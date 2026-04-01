---
title: "Process 어댑터"
date: 2026-04-02T10:24:00+09:00
description: "Paperclip 한국어 가이드 - 어댑터: Process 어댑터"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "어댑터", "Claude", "Codex"]
weight: 25
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 어댑터**


Process 어댑터는 임의의 셸 명령을 실행합니다. 간단한 스크립트, 일회성 작업, 커스텀 프레임워크 에이전트에 적합합니다.

## 적합한 경우

- Paperclip API를 호출하는 Python 스크립트 실행
- 커스텀 에이전트 루프 실행
- 셸 명령으로 호출 가능한 모든 런타임

## 부적합한 경우

- 실행 간 세션 지속성이 필요한 시나리오
- 하트비트 간 대화 컨텍스트가 필요한 에이전트

## 설정 파라미터

| 필드 | 타입 | 필수 | 용도 |
|------|------|------|------|
| `command` | string | 예 | 실행할 셸 명령 |
| `cwd` | string | 아니오 | 작업 디렉토리 |
| `env` | object | 아니오 | 환경 변수 |
| `timeoutSec` | number | 아니오 | 프로세스 타임아웃 |

## 작동 흐름

1. 명령을 자식 프로세스로 생성
2. 표준 Paperclip 환경 변수 주입 (`PAPERCLIP_AGENT_ID`, `PAPERCLIP_API_KEY` 등)
3. 프로세스를 완료까지 실행
4. 종료 코드로 성공 여부 판단
