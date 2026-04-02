---
title: "빠른 시작"
date: 2026-04-01T11:01:00+09:00
description: "OpenClaw 한국어 가이드: 빠른 시작"
series: ["OpenClaw 가이드"]
tags: ["OpenClaw", "AI", "에이전트", "시작하기"]
weight: 2
ShowToc: true
TocOpen: true
---

> 이 문서는 [OpenClaw 공식 문서](https://docs.openclaw.ai/)를 한국어로 번역/정리한 것입니다.
> **시리즈: OpenClaw 가이드**


설치부터 첫 메시지 전송까지 약 **5분**이면 완료된다.

---

## 요구 사항

| 항목 | 조건 |
|------|------|
| **Node.js** | 24 권장 (22.14 이상 지원) |
| **API 키** | Anthropic, OpenAI, Google 중 하나 이상 |
| **OS** | macOS, Linux, Windows |

---

## 1단계: 설치

### macOS / Linux

```bash
curl -fsSL https://get.openclaw.dev | bash
```

### Windows (PowerShell)

```powershell
irm https://get.openclaw.dev/windows | iex
```

설치가 완료되면 `openclaw` 명령어를 사용할 수 있다.

---

## 2단계: 온보딩 및 데몬 설치

```bash
openclaw onboard --install-daemon
```

이 명령어는 다음을 수행한다:

- 초기 설정 마법사 실행
- API 키 입력 (Anthropic, OpenAI, Google 등)
- 기본 모델 선택
- 게이트웨이 데몬 설치 및 시작

---

## 3단계: 게이트웨이 상태 확인

```bash
openclaw gateway status
```

정상적으로 실행 중이면 게이트웨이가 포트 `18789`에서 수신 대기 중이라는 메시지가 표시된다.

```
Gateway running on 127.0.0.1:18789
```

---

## 4단계: 대시보드 열기

```bash
openclaw dashboard
```

Control UI가 기본 브라우저에서 열린다. 여기서 에이전트 관리, 채널 연결, 설정 변경 등을 할 수 있다.

---

## 5단계: 첫 메시지 전송

Control UI에서 WebChat을 열고 에이전트에게 첫 메시지를 보낸다.

또는 CLI에서 직접 메시지를 보낼 수도 있다:

```bash
openclaw agent --message "안녕하세요, OpenClaw!"
```

---

## 환경 변수

OpenClaw의 동작을 환경 변수로 커스터마이징할 수 있다.

| 환경 변수 | 설명 | 기본값 |
|-----------|------|--------|
| `OPENCLAW_HOME` | OpenClaw 홈 디렉토리 | `~/.openclaw` |
| `OPENCLAW_STATE_DIR` | 상태 데이터 저장 경로 | `$OPENCLAW_HOME/state` |
| `OPENCLAW_CONFIG` | 설정 파일 경로 | `$OPENCLAW_HOME/openclaw.json` |

### 환경 변수 설정 예시

```bash
# .bashrc 또는 .zshrc에 추가
export OPENCLAW_HOME="$HOME/.openclaw"
export OPENCLAW_STATE_DIR="$OPENCLAW_HOME/state"
export OPENCLAW_CONFIG="$OPENCLAW_HOME/openclaw.json"
```

---

## 다음 단계

설치가 완료되었다면 다음 문서를 참고하자:

- [게이트웨이 아키텍처](03-게이트웨이아키텍처.md) - 게이트웨이 구조 이해
- [에이전트 런타임](04-에이전트런타임.md) - 에이전트 설정과 커스터마이징
- [채팅 채널](10-채널.md) - WhatsApp, Telegram 등 채널 연결
- [설정](15-설정.md) - 상세 설정 가이드
