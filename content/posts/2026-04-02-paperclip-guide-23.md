---
title: "Gemini Local 어댑터"
date: 2026-04-01T10:22:00+09:00
description: "Paperclip 한국어 가이드 - 어댑터: Gemini Local 어댑터"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "어댑터", "Claude", "Codex"]
weight: 23
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 어댑터**


`gemini_local` 어댑터는 Google의 Gemini CLI를 로컬에서 실행합니다. `--resume`으로 세션 지속성, 스킬 주입, 구조화된 `stream-json` 출력 처리를 지원합니다.

## 요구사항

- Gemini CLI 설치 및 접근 가능
- `GEMINI_API_KEY`, `GOOGLE_API_KEY` 또는 로컬 CLI 설정으로 인증

## 설정 옵션

| 필드 | 용도 |
|------|------|
| `cwd` | 작업 디렉토리 (필수, 절대 경로) |
| `model` | Gemini 모델 선택 (기본값: `auto`) |
| `promptTemplate` | 모든 실행용 커스텀 프롬프트 |
| `instructionsFilePath` | 앞에 추가할 마크다운 지시사항 |
| `env` | 시크릿 지원 환경 변수 |
| `timeoutSec` | 프로세스 타임아웃 임계값 |
| `graceSec` | 강제 종료 유예 기간 |
| `yolo` | 무인 작업 모드 활성화 |

## 세션 관리

작업 디렉토리가 일관되면 세션이 자동 재개됩니다. 디렉토리가 변경되거나 재개 실패 시 새 세션이 시작됩니다.

## 검증

"환경 테스트" 버튼: CLI 설치, 디렉토리 접근, API 키 설정, 테스트 프로브를 통한 CLI 준비 상태 확인.
