---
title: "채팅 채널"
date: 2026-04-01T11:09:00+09:00
description: "OpenClaw 한국어 가이드: 채팅 채널"
series: ["OpenClaw 가이드"]
tags: ["OpenClaw", "AI", "자동화", "채널"]
weight: 10
ShowToc: true
TocOpen: true
---

> 이 문서는 [OpenClaw 공식 문서](https://docs.openclaw.ai/)를 한국어로 번역/정리한 것입니다.
> **시리즈: OpenClaw 가이드**


## 개요

OpenClaw는 **30개 이상의 메시징 채널**을 지원한다. 하나의 게이트웨이에서 모든 채널을 통합 관리하며, 에이전트를 한 번 설정하면 모든 채널에서 동작한다.

---

## 지원 채널 목록

### 주요 메시징 플랫폼

| 채널 | 텍스트 | 미디어 | 리액션 | 비고 |
|------|--------|--------|--------|------|
| **WhatsApp** | O | O | O | 멀티 계정 지원 |
| **Discord** | O | O | O | 멀티 계정, 길드/역할 라우팅 |
| **Telegram** | O | O | O | 가장 빠른 설정, 멀티 봇 |
| **Signal** | O | O | O | 프라이버시 중심 |
| **iMessage** | O | O | - | BlueBubbles 연동 필요 |
| **Slack** | O | O | O | 워크스페이스 연동 |

### 비즈니스 메시징

| 채널 | 텍스트 | 미디어 | 리액션 | 비고 |
|------|--------|--------|--------|------|
| **Google Chat** | O | - | - | Google Workspace 연동 |
| **Microsoft Teams** | O | O | - | MS 365 연동 |

### 소셜 및 커뮤니티

| 채널 | 텍스트 | 미디어 | 리액션 | 비고 |
|------|--------|--------|--------|------|
| **Matrix** | O | O | O | 탈중앙화 프로토콜 |
| **LINE** | O | O | O | 아시아 시장 |
| **IRC** | O | - | - | 레거시 호환 |
| **Nostr** | O | - | - | 탈중앙화 소셜 |

### 웹 기반

| 채널 | 텍스트 | 미디어 | 리액션 | 비고 |
|------|--------|--------|--------|------|
| **WebChat** | O | O | - | 내장 웹 채팅 위젯 |

> **참고**: 텍스트는 모든 채널에서 지원되지만, 미디어(이미지, 오디오, 비디오, 파일)와 리액션(이모지 반응)은 채널별로 지원 여부가 다르다.

---

## 빠른 시작: Telegram (가장 빠른 설정)

Telegram은 가장 빠르게 설정할 수 있는 채널이다.

### 1단계: Telegram 봇 생성

1. Telegram에서 [@BotFather](https://t.me/BotFather)와 대화
2. `/newbot` 명령어 입력
3. 봇 이름과 사용자명 설정
4. 받은 **봇 토큰** 저장

### 2단계: 설정 추가

```json5
{
  "channels": {
    "telegram": {
      "token": "${TELEGRAM_BOT_TOKEN}",
      "agent": "default"
    }
  }
}
```

### 3단계: 환경 변수 설정

```bash
export TELEGRAM_BOT_TOKEN="1234567890:ABCdefGHIjklMNOpqrSTUvwxYZ"
```

### 4단계: 대화 시작

Telegram에서 봇을 찾아 메시지를 보내면 에이전트가 응답한다.

---

## DM 페어링

특정 사용자와 에이전트를 1:1로 연결(pairing)할 수 있다. 해당 사용자의 DM은 항상 지정된 에이전트로 라우팅된다.

```json5
{
  "agents": {
    "personal-assistant": {
      "routing": {
        "peers": [
          "whatsapp:+82-10-1234-5678",
          "telegram:@username",
          "discord:user-id-123"
        ]
      }
    }
  }
}
```

---

## 허용 목록 (Allowlists)

보안을 위해 특정 사용자만 에이전트와 대화할 수 있도록 제한한다.

```json5
{
  "channels": {
    "whatsapp": {
      "allowlist": [
        "+82-10-1234-5678",
        "+82-10-9876-5432"
      ]
    },
    "telegram": {
      "allowlist": [
        "@allowed_user1",
        "@allowed_user2"
      ]
    }
  }
}
```

허용 목록에 없는 사용자의 메시지는 무시된다. 허용 목록을 설정하지 않으면 모든 사용자의 메시지를 수신한다.

---

## 채널별 기능 비교 요약

```
                텍스트  이미지  오디오  비디오  문서  리액션
WhatsApp        ✓      ✓      ✓      ✓      ✓     ✓
Discord         ✓      ✓      ✓      ✓      ✓     ✓
Telegram        ✓      ✓      ✓      ✓      ✓     ✓
Signal          ✓      ✓      ✓      ✓      ✓     ✓
iMessage        ✓      ✓      ✓      ✓      ✓     -
Slack           ✓      ✓      -      -      ✓     ✓
Google Chat     ✓      -      -      -      -     -
MS Teams        ✓      ✓      -      -      ✓     -
LINE            ✓      ✓      ✓      ✓      -     ✓
WebChat         ✓      ✓      -      -      ✓     -
```
