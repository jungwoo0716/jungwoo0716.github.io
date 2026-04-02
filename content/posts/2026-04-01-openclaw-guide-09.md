---
title: "멀티 에이전트 라우팅"
date: 2026-04-01T11:08:00+09:00
description: "OpenClaw 한국어 가이드: 멀티 에이전트 라우팅"
series: ["OpenClaw 가이드"]
tags: ["OpenClaw", "AI", "에이전트", "개념"]
weight: 9
ShowToc: true
TocOpen: true
---

> 이 문서는 [OpenClaw 공식 문서](https://docs.openclaw.ai/)를 한국어로 번역/정리한 것입니다.
> **시리즈: OpenClaw 가이드**


## 개요

OpenClaw는 **여러 에이전트를 동시에 운영**하며, 들어오는 메시지를 적절한 에이전트로 라우팅한다. 각 에이전트는 별도의 워크스페이스, 에이전트 디렉토리, 세션을 가지며 완전히 격리되어 동작한다.

---

## 에이전트 격리

각 에이전트는 다음이 독립적으로 분리되어 있다:

| 항목 | 설명 |
|------|------|
| **워크스페이스** | 별도의 `AGENTS.md`, `SOUL.md` 등 |
| **에이전트 디렉토리** | `~/.openclaw/agents/<agentId>/` |
| **세션** | 독립된 세션 저장소 |
| **도구 설정** | 에이전트별 사용 가능 도구 지정 |
| **샌드박스** | 에이전트별 격리된 실행 환경 |

```
~/.openclaw/agents/
├── customer-support/     # 고객 지원 에이전트
│   ├── workspace/
│   └── sessions/
├── code-review/          # 코드 리뷰 에이전트
│   ├── workspace/
│   └── sessions/
└── scheduler/            # 스케줄 관리 에이전트
    ├── workspace/
    └── sessions/
```

---

## 라우팅 계층

메시지가 들어오면 다음 **우선순위 순서**로 라우팅 대상을 결정한다.

```
1. direct peer       (가장 높음) - 직접 지정된 피어
2. parent peer                  - 부모 피어
3. Discord role+guild           - Discord 역할 + 길드 조합
4. guild                        - Discord 길드
5. team                         - 팀 단위
6. account                      - 계정 단위
7. channel                      - 채널 단위
8. default           (가장 낮음) - 기본 에이전트
```

### 라우팅 예시

```json5
{
  "agents": {
    "default": {
      // 기본 에이전트 - 매칭되는 규칙 없을 때 사용
      "model": "anthropic/claude-sonnet-4-6"
    },
    "vip-support": {
      // 특정 WhatsApp 번호에서 오는 메시지
      "routing": {
        "peers": ["+82-10-1234-5678"]
      }
    },
    "discord-mod": {
      // 특정 Discord 길드의 관리자 역할
      "routing": {
        "discord": {
          "guild": "123456789",
          "roles": ["admin", "moderator"]
        }
      }
    },
    "team-agent": {
      // 팀 단위 라우팅
      "routing": {
        "teams": ["engineering"]
      }
    }
  }
}
```

---

## 멀티 계정 지원

하나의 게이트웨이에서 여러 메시징 계정을 동시에 운영할 수 있다.

### 지원 플랫폼

| 플랫폼 | 멀티 계정 |
|--------|----------|
| **WhatsApp** | 여러 전화번호 동시 운영 |
| **Telegram** | 여러 봇 토큰 동시 운영 |
| **Discord** | 여러 봇 계정 동시 운영 |

### 설정 예시

```json5
{
  "channels": {
    "whatsapp": [
      {
        "name": "support-line",
        "phone": "+82-10-0000-0001",
        "agent": "customer-support"
      },
      {
        "name": "sales-line",
        "phone": "+82-10-0000-0002",
        "agent": "sales"
      }
    ],
    "telegram": [
      {
        "name": "main-bot",
        "token": "${TELEGRAM_BOT_TOKEN_1}",
        "agent": "default"
      },
      {
        "name": "admin-bot",
        "token": "${TELEGRAM_BOT_TOKEN_2}",
        "agent": "admin"
      }
    ]
  }
}
```

---

## 에이전트별 샌드박스와 도구

각 에이전트가 사용할 수 있는 도구와 실행 환경을 개별적으로 설정한다.

```json5
{
  "agents": {
    "customer-support": {
      "tools": {
        "allowed": ["web_search", "memory_search", "memory_get"],
        "denied": ["shell", "browser"]
      },
      "sandbox": {
        "enabled": true,
        "network": "restricted"
      }
    },
    "code-review": {
      "tools": {
        "allowed": ["shell", "browser", "web_search"],
        "denied": []
      },
      "sandbox": {
        "enabled": true,
        "network": "full"
      }
    }
  }
}
```

이렇게 하면 고객 지원 에이전트는 셸 접근이 차단되고, 코드 리뷰 에이전트는 전체 네트워크 접근이 허용된다.
