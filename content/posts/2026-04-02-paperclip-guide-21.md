---
title: "Claude Local 어댑터"
date: 2026-04-02T10:20:00+09:00
description: "Paperclip 한국어 가이드 - 어댑터: Claude Local 어댑터"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "어댑터", "Claude", "Codex"]
weight: 21
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 어댑터**


`claude_local` 어댑터는 Anthropic의 Claude Code CLI를 로컬 환경에 통합합니다. 세션 지속성, 스킬 주입, 구조화된 출력 파싱을 제공합니다.

## 요구사항

- Claude Code CLI 설치 (`claude` 명령 접근 가능)
- `ANTHROPIC_API_KEY` 환경변수 또는 에이전트 설정에서 구성

## 주요 설정 옵션

| 설정 | 설명 |
|------|------|
| `cwd` | (필수) 에이전트의 작업 디렉토리 절대 경로 |
| `model` | 사용할 Claude 버전 |
| `promptTemplate` | 변수 치환 지원 커스텀 프롬프트 ({{agentId}}, {{runId}}, {{agent.name}} 등) |
| `env` | 시크릿 참조를 포함한 환경 변수 |
| `timeoutSec` | 프로세스 타임아웃 |
| `graceSec` | 강제 종료 유예 기간 |
| `maxTurnsPerRun` | 하트비트당 에이전트 반복 제한 |
| `dangerouslySkipPermissions` | (개발 전용) 권한 검사 우회 플래그 |

## 세션 관리

하트비트 간 **Claude Code 세션 ID를 유지**합니다. 전체 컨텍스트 보존으로 대화를 재개합니다. 작업 디렉토리가 변경되거나 알 수 없는 세션 오류가 발생하면 세션이 리셋됩니다.

## 스킬 통합

스킬은 심링크가 있는 임시 디렉토리를 통해 발견 가능하게 됩니다. `--add-dir`을 통해 메인 워크스페이스를 어지럽히지 않고 전달합니다.

## 설정 검증

"환경 테스트" 버튼이 검증하는 항목:
- CLI 설치 여부
- 디렉토리 가용성
- API 인증 설정
- 테스트 프롬프트를 통한 CLI 준비 상태
