---
title: "Telegram 채널"
type: docs
weight: 26
description: "OpenClaw|Telegram 채널"
---


## 개요

Telegram 채널은 BotFather를 통해 생성한 봇 토큰으로 연동한다. DM/그룹 정책, 포럼 토픽 격리, 라이브 스트리밍, 웹훅 모드 등을 지원한다.

---

## 봇 생성

1. Telegram에서 [@BotFather](https://t.me/BotFather)에게 DM
2. `/newbot` 명령 입력
3. 봇 이름과 사용자명 설정
4. 발급된 토큰 복사

---

## 설정

```json5
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "${TELEGRAM_BOT_TOKEN}",
      "dmPolicy": "pairing"
    }
  }
}
```

---

## DM 정책

| 정책 | 설명 |
|------|------|
| `pairing` | 최초 대화 시 관리자 승인 필요 (기본값) |
| `allowlist` | 허용 목록의 사용자만 DM 가능 |
| `open` | 모든 사용자 DM 허용 |
| `disabled` | DM 비활성화 |

### 페어링 승인

새 사용자가 봇에 메시지를 보내면 관리자에게 알림이 전송된다. 관리자가 승인하면 해당 사용자와 대화가 시작된다.

---

## 포럼 토픽 격리

Telegram 포럼(슈퍼그룹)의 토픽은 **스레드별로 격리**된다.

- 각 토픽이 독립된 세션으로 처리
- 토픽 A의 대화가 토픽 B에 영향을 주지 않음
- 일반 그룹에서는 전체 그룹이 하나의 세션

---

## 라이브 스트리밍

에이전트의 응답을 실시간으로 스트리밍할 수 있다.

- 토큰 단위로 점진적 메시지 업데이트
- 긴 응답도 즉시 사용자에게 표시 시작
- 네트워크 부하를 고려한 업데이트 간격 자동 조절

---

## 네이티브 답장 스레딩

Telegram의 답장(reply) 기능을 활용한 스레드 관리를 지원한다.

- 에이전트 응답이 원본 메시지에 대한 답장으로 전송
- 대화 흐름을 시각적으로 추적 가능

---

## 미디어 지원

| 타입 | 지원 |
|------|------|
| 오디오/비디오 노트 | 지원 |
| 스티커 | 지원 |
| 문서/파일 | 지원 |
| 사진/비디오 | 지원 |

---

## 웹훅 모드

기본 롱 폴링(long polling) 대신 웹훅 모드를 사용할 수 있다.

```json5
{
  "channels": {
    "telegram": {
      "mode": "webhook",
      "webhookUrl": "https://your-domain.com/telegram/webhook"
    }
  }
}
```

웹훅 모드는 서버 환경에서 더 효율적이며 응답 지연이 줄어든다.

---

## 트러블슈팅

### 프라이버시 모드

봇이 그룹 메시지를 받지 못하는 경우 프라이버시 모드를 확인한다.

1. BotFather에서 `/mybots` → 봇 선택
2. **Bot Settings** → **Group Privacy**
3. **Turn off** (그룹 메시지 수신 허용)

### IPv6 이슈

일부 환경에서 Telegram API 연결이 IPv6로 시도되어 실패할 수 있다.

```bash
# IPv4 강제 사용
export TELEGRAM_FORCE_IPV4=true
```

또는 DNS 설정에서 IPv4를 우선하도록 조정한다.
