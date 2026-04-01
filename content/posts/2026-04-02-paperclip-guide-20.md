---
title: "어댑터 개요"
date: 2026-04-02T29:00:00+09:00
description: "Paperclip 한국어 가이드 - 어댑터: 어댑터 개요"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "어댑터", "Claude", "Codex"]
weight: 20
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 어댑터**


어댑터는 Paperclip의 오케스트레이션 시스템과 서로 다른 AI 에이전트 런타임 사이의 커넥터입니다. 호출과 결과 캡처를 처리합니다.

## 실행 프로세스

하트비트가 트리거되면:
1. 시스템이 에이전트의 어댑터 타입 식별
2. 컨텍스트와 함께 실행
3. 런타임 생성
4. stdout 및 사용량 데이터를 포함한 구조화된 결과 반환

## 빌트인 어댑터

| 어댑터 | 설명 |
|--------|------|
| `claude_local` | Anthropic Claude Code CLI |
| `codex_local` | OpenAI Codex CLI |
| `gemini_local` | Google Gemini CLI |
| `opencode_local` | OpenCode CLI |
| `cursor` | Cursor CLI |
| `openclaw_gateway` | OpenClaw 게이트웨이 |
| `hermes_local` | Hermes 에이전트 |
| `pi_local` | Pi 에이전트 |
| `process` | 임의의 셸 명령 |
| `http` | 외부 웹훅 |

## 기술 구조

각 어댑터는 3개의 모듈로 구성:
- **공유 인덱스** — 메타데이터 정의
- **서버 컴포넌트** — 실행 및 파싱 처리
- **UI/CLI 모듈** — 트랜스크립트 렌더링 및 터미널 포맷팅

## 선택 가이드

- **코딩 에이전트 필요?** → `claude_local`, `codex_local`, `gemini_local`, `opencode_local`
- **스크립트 실행?** → `process`
- **외부 서비스?** → `http`
- **특수 런타임?** → 커스텀 어댑터 생성
