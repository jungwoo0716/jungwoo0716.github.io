---
title: "Discord 채널"
type: docs
weight: 27
description: "OpenClaw|Discord 채널"
---


## 개요

Discord 채널은 봇 자격 증명과 Message Content Intent를 통해 연동한다. DM/길드 정책, Components v2, 스레드 바인딩, 음성 채널 등 Discord 네이티브 기능을 폭넓게 지원한다.

---

## 봇 설정

### 1. 봇 생성

1. [Discord Developer Portal](https://discord.com/developers/applications)에서 애플리케이션 생성
2. **Bot** 탭에서 봇 추가
3. **Token** 복사

### 2. Message Content Intent 활성화

봇이 메시지 내용을 읽으려면 **Privileged Gateway Intents**에서 **Message Content Intent**를 활성화해야 한다.

### 3. 설정

```json5
{
  "channels": {
    "discord": {
      "enabled": true,
      "botToken": "${DISCORD_BOT_TOKEN}",
      "dmPolicy": "pairing"
    }
  }
}
```

---

## DM/길드 정책

### DM 정책

| 정책 | 설명 |
|------|------|
| `pairing` | 페어링 승인 필요 (기본값) |
| `allowlist` | 허용 목록 사용자만 |
| `open` | 모든 사용자 허용 |
| `disabled` | DM 비활성화 |

### 길드(서버) 정책

에이전트가 참여할 수 있는 서버를 제한한다.

```json5
{
  "channels": {
    "discord": {
      "guildAllowlist": ["서버ID-1", "서버ID-2"]
    }
  }
}
```

---

## Components v2

Discord의 최신 인터랙션 컴포넌트를 지원한다.

| 컴포넌트 | 설명 |
|----------|------|
| **Buttons** | 사용자 클릭 가능한 버튼 |
| **Select Menus** | 드롭다운 선택 메뉴 |
| **Modals** | 팝업 입력 폼 |

에이전트가 인터랙티브한 메시지를 생성하여 사용자 입력을 구조화된 방식으로 받을 수 있다.

---

## 스레드 바인딩

서브 에이전트를 Discord 스레드에 바인딩할 수 있다.

- 서브 에이전트 스폰 시 자동으로 스레드 생성
- 해당 서브 에이전트의 모든 응답이 스레드 내에 전송
- 메인 채널을 깔끔하게 유지

```
#general
├── 사용자: "이 데이터 분석해줘"
├── 에이전트: "서브 에이전트가 분석 중입니다"
└── 📎 분석 결과 (스레드)
    ├── 서브 에이전트: "데이터 로딩 중..."
    ├── 서브 에이전트: "분석 완료. 결과:"
    └── 서브 에이전트: (분석 결과)
```

---

## PluralKit 지원

PluralKit 프록시 메시지를 인식하고 올바른 사용자로 매핑한다. 복수 자아(plural system) 사용자를 적절히 처리한다.

---

## 음성 채널

에이전트가 Discord 음성 채널에 참여할 수 있다.

- 음성 채널 입장/퇴장
- 음성 메시지 수신 및 처리
- 파형(waveform) 포함 음성 메시지 전송

---

## 실행 승인 (버튼)

셸 명령 실행 승인이 필요할 때 Discord 버튼으로 승인/거부할 수 있다.

```
에이전트: "다음 명령을 실행하겠습니다: npm run deploy"
[✅ 승인] [❌ 거부]
```

관리자가 버튼을 클릭하여 즉시 승인 또는 거부할 수 있다.

---

## 라이브 스트림 미리보기

에이전트가 긴 작업을 수행할 때 Discord 메시지를 실시간으로 업데이트하여 진행 상황을 보여준다.
