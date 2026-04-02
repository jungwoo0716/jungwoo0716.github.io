---
title: "WhatsApp 채널"
type: docs
weight: 25
description: "OpenClaw|WhatsApp 채널"
---


## 개요

WhatsApp 채널은 OpenClaw 에이전트를 WhatsApp 메신저에 연결한다. QR 코드 페어링으로 설정하며, DM/그룹 정책, 미디어 처리, 멀티 계정을 지원한다.

---

## 설치 및 설정

### 플러그인 설치

```bash
openclaw onboard
# 또는
openclaw channels add whatsapp
```

### QR 코드 페어링

```bash
openclaw channels login whatsapp
```

터미널에 QR 코드가 표시되면 WhatsApp 모바일 앱의 **연결된 기기** 메뉴에서 스캔한다.

---

## DM 정책

| 정책 | 설명 |
|------|------|
| `pairing` | 최초 메시지 시 페어링 승인 필요 (기본값) |
| `allowlist` | 허용 목록에 있는 번호만 DM 가능 |
| `open` | 모든 사용자의 DM 허용 |
| `disabled` | DM 비활성화 |

```json5
{
  "channels": {
    "whatsapp": {
      "dmPolicy": "pairing",
      "allowlist": [
        "+82-10-1234-5678",
        "+82-10-9876-5432"
      ]
    }
  }
}
```

### 페어링 방식

1. 새 사용자가 에이전트에 DM 발송
2. 에이전트가 "페어링 요청"을 관리자에게 알림
3. 관리자가 승인하면 해당 사용자와 대화 시작
4. 거부하면 해당 사용자의 메시지 무시

---

## 그룹 정책

그룹 허용 목록으로 에이전트가 참여할 그룹을 제한한다.

```json5
{
  "channels": {
    "whatsapp": {
      "groupAllowlist": [
        "그룹명 또는 그룹ID"
      ]
    }
  }
}
```

---

## 메시지 제한

| 항목 | 제한 |
|------|------|
| 텍스트 청크 | 4,000자 |
| 미디어 파일 | 50MB |

텍스트가 4,000자를 초과하면 자동으로 여러 메시지로 분할하여 전송한다.

---

## 리액션

WhatsApp 리액션은 4단계로 지원된다.

| 레벨 | 동작 |
|------|------|
| 0 | 리액션 비활성화 |
| 1 | 수신 리액션만 처리 |
| 2 | 처리 상태 리액션 (진행 중 이모지) |
| 3 | 응답 결과 리액션 (성공/실패 이모지) |

---

## 멀티 계정

하나의 게이트웨이에서 여러 WhatsApp 계정을 동시에 운영할 수 있다.

```json5
{
  "channels": {
    "whatsapp": [
      { "id": "cs-bot", "phone": "+82-10-1111-2222" },
      { "id": "sales-bot", "phone": "+82-10-3333-4444" }
    ]
  }
}
```

각 계정별로 독립적인 DM/그룹 정책을 설정할 수 있다.

---

## 인증 정보 저장

WhatsApp 인증 정보는 다음 경로에 저장된다.

```
~/.openclaw/credentials/whatsapp/
├── cs-bot/
│   └── auth_info.json
└── sales-bot/
    └── auth_info.json
```

이 디렉토리는 민감한 정보를 포함하므로 적절한 파일 권한을 설정해야 한다.

```bash
chmod 700 ~/.openclaw/credentials/whatsapp/
```
