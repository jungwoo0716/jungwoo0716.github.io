---
title: "Codex Local 어댑터"
date: 2026-04-02T10:21:00+09:00
description: "Paperclip 한국어 가이드 - 어댑터: Codex Local 어댑터"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "어댑터", "Claude", "Codex"]
weight: 22
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 어댑터**


`codex_local` 어댑터는 OpenAI의 Codex CLI를 로컬에서 실행합니다.

## 요구사항

- Codex CLI 설치
- `OPENAI_API_KEY` 환경변수 또는 에이전트 설정에서 구성

## 주요 설정 옵션

| 설정 | 설명 |
|------|------|
| `cwd` | (필수) 에이전트가 작업하는 절대 디렉토리 경로 |
| `model` | 사용할 모델 |
| `promptTemplate` | 모든 실행에 적용되는 커스텀 프롬프트 |
| `env` | 시크릿 참조를 포함한 환경 변수 |
| `timeoutSec` | 프로세스 타이밍 제어 |
| `graceSec` | 종료 동작 |
| `dangerouslyBypassApprovalsAndSandbox` | (개발용) 안전 메커니즘 비활성화 |

## 작동 방식

세션 간 `previous_response_id` 체이닝으로 대화 연속성을 유지합니다. `~/.codex/skills`에 심링크를 생성하여 Paperclip 스킬을 자동 통합하며, 기존 사용자 스킬을 보존합니다.

## 검증 프로세스

실행 전 시스템이 확인하는 항목:
- Codex CLI 접근 가능 여부
- 작업 디렉토리가 절대 경로이고 사용 가능한지
- API 키 존재 여부
- "hello" 테스트 실행을 통한 CLI 기능
