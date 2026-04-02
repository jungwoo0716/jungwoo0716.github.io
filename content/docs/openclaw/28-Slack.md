---
title: "Slack 채널"
type: docs
weight: 28
description: "OpenClaw|Slack 채널"
---


## 개요

Slack 채널은 Socket Mode(기본) 또는 HTTP Events API를 통해 연동한다. 봇 토큰과 앱 토큰으로 인증하며, 스레딩, Block Kit, 네이티브 명령어 등 Slack 네이티브 기능을 지원한다.

---

## 인증 토큰

| 토큰 | 형식 | 용도 |
|------|------|------|
| **Bot Token** | `xoxb-...` | 메시지 읽기/쓰기, 채널 관리 |
| **App Token** | `xapp-...` | Socket Mode 연결 |

### Slack 앱 생성

1. [Slack API](https://api.slack.com/apps)에서 앱 생성
2. **OAuth & Permissions**에서 Bot Token Scopes 설정
3. **Socket Mode** 활성화 및 App Token 생성
4. 워크스페이스에 앱 설치

---

## 연결 모드

### Socket Mode (기본)

WebSocket을 통한 실시간 연결. 방화벽 뒤에서도 동작하며 별도의 공개 URL이 필요 없다.

```json5
{
  "channels": {
    "slack": {
      "enabled": true,
      "mode": "socket",
      "botToken": "${SLACK_BOT_TOKEN}",
      "appToken": "${SLACK_APP_TOKEN}"
    }
  }
}
```

### HTTP Events API

공개 URL에 이벤트를 수신하는 방식. 서버 환경에서 더 안정적이다.

```json5
{
  "channels": {
    "slack": {
      "mode": "http",
      "botToken": "${SLACK_BOT_TOKEN}",
      "eventsUrl": "https://your-domain.com/slack/events"
    }
  }
}
```

---

## DM 정책

| 정책 | 설명 |
|------|------|
| `pairing` | 페어링 승인 필요 |
| `allowlist` | 허용 목록 사용자만 |
| `disabled` | DM 비활성화 |

Slack에서는 `open` 정책을 지원하지 않는다. 워크스페이스 내 사용자만 접근 가능하므로 `pairing` 또는 `allowlist`를 사용한다.

---

## 스레딩

### 스레드 스코프

Slack의 스레드(답장) 기능을 세션 범위로 활용한다.

- 스레드 내 대화는 별도 컨텍스트로 처리
- 기본 히스토리 20개 메시지
- 스레드 외부 메시지와 격리

```json5
{
  "channels": {
    "slack": {
      "threading": {
        "scope": "thread",
        "historySize": 20
      }
    }
  }
}
```

---

## 네이티브 명령어

Slack 슬래시 명령어 등록. 기본값은 **비활성화**이다.

```json5
{
  "channels": {
    "slack": {
      "nativeCommands": true
    }
  }
}
```

활성화하면 에이전트 명령어를 Slack 슬래시 명령어로 등록할 수 있다.

---

## Block Kit 디렉티브

에이전트가 Slack Block Kit을 사용하여 리치 메시지를 생성할 수 있다.

```json
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*작업 완료*\n분석 결과가 준비되었습니다."
      }
    },
    {
      "type": "actions",
      "elements": [
        {
          "type": "button",
          "text": { "type": "plain_text", "text": "결과 보기" },
          "action_id": "view_result"
        }
      ]
    }
  ]
}
```

---

## 트러블슈팅

### 채널 연결 실패

```
Error: channel_not_found
```

- 봇이 해당 채널에 초대되었는지 확인
- `/invite @봇이름` 명령으로 채널에 봇 추가

### DM이 무시되는 경우

- DM 정책이 `disabled`로 설정되어 있지 않은지 확인
- `pairing` 모드에서 승인이 완료되었는지 확인
- 봇의 `im:read`, `im:write` 스코프가 있는지 확인

### Socket Mode 연결 이슈

```
Error: websocket_disconnect
```

- App Token(`xapp-`)이 올바른지 확인
- Socket Mode가 Slack 앱 설정에서 활성화되었는지 확인
- 네트워크 프록시가 WebSocket을 차단하지 않는지 확인
