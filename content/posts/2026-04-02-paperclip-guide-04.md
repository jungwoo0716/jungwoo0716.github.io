---
title: "아키텍처"
date: 2026-04-01T10:03:00+09:00
description: "Paperclip 한국어 가이드 - 시작하기: 아키텍처"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "오케스트레이션", "시작하기"]
weight: 4
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 시작하기**


Paperclip은 4개의 주요 레이어를 가진 모노레포입니다.

## 스택 개요

```
┌─────────────────────────────────────┐
│  React UI (Vite)                    │
│  대시보드, 조직 관리, 태스크         │
├─────────────────────────────────────┤
│  Express.js REST API (Node.js)      │
│  라우트, 서비스, 인증, 어댑터        │
├─────────────────────────────────────┤
│  PostgreSQL (Drizzle ORM)           │
│  스키마, 마이그레이션, 임베디드 모드  │
├─────────────────────────────────────┤
│  어댑터                              │
│  Claude, Codex, Gemini, Cursor,     │
│  OpenCode, OpenClaw, Hermes,        │
│  Process, HTTP                      │
└─────────────────────────────────────┘
```

## 기술 스택

| 레이어 | 기술 |
|--------|------|
| 프론트엔드 | React 19, Vite 6, React Router 7, Radix UI, Tailwind CSS 4, TanStack Query |
| 백엔드 | Node.js 20+, Express.js 5, TypeScript |
| 데이터베이스 | PostgreSQL 17 (또는 임베디드 PGlite), Drizzle ORM |
| 인증 | Better Auth (세션 + API 키) |
| 어댑터 | Claude Code CLI, Codex CLI, Gemini CLI, Cursor CLI, OpenCode CLI, OpenClaw Gateway, Hermes, 셸 프로세스, HTTP 웹훅 |
| 패키지 매니저 | pnpm 9 (워크스페이스) |

## 레포지토리 구조

```
paperclip/
├── ui/                          # React 프론트엔드
│   ├── src/pages/              # 라우트 페이지
│   ├── src/components/         # React 컴포넌트
│   ├── src/api/                # API 클라이언트
│   └── src/context/            # React 컨텍스트 프로바이더
│
├── server/                      # Express.js API
│   ├── src/routes/             # REST 엔드포인트
│   ├── src/services/           # 비즈니스 로직
│   ├── src/adapters/           # 에이전트 실행 어댑터
│   └── src/middleware/         # 인증, 로깅
│
├── packages/
│   ├── db/                      # Drizzle 스키마 + 마이그레이션
│   ├── shared/                  # API 타입, 상수, 밸리데이터
│   ├── adapter-utils/           # 어댑터 인터페이스 및 헬퍼
│   └── adapters/               # 각 어댑터 패키지
│
├── skills/                      # 에이전트 스킬
├── cli/                         # CLI 클라이언트
└── doc/                         # 내부 문서
```

## 요청 흐름

하트비트가 발생하면:

1. **트리거** — 스케줄러, 수동 실행 또는 이벤트(할당, 멘션)가 하트비트 트리거
2. **어댑터 호출** — 서버가 설정된 어댑터의 `execute()` 함수 호출
3. **에이전트 프로세스** — 어댑터가 에이전트(예: Claude Code CLI)를 Paperclip 환경변수와 프롬프트로 생성
4. **에이전트 작업** — 에이전트가 Paperclip REST API를 호출하여 할당 확인, 태스크 체크아웃, 작업 수행, 상태 업데이트
5. **결과 캡처** — 어댑터가 stdout 캡처, 사용량/비용 데이터 파싱, 세션 상태 추출
6. **실행 기록** — 서버가 실행 결과, 비용, 다음 하트비트를 위한 세션 상태 기록

## 어댑터 모델

어댑터는 Paperclip과 에이전트 런타임 사이의 브릿지입니다. 각 어댑터는 3개의 모듈을 가진 패키지입니다:

- **서버 모듈** — 에이전트를 생성/호출하는 `execute()` 함수 + 환경 진단
- **UI 모듈** — 실행 뷰어용 stdout 파서, 에이전트 생성 설정 폼 필드
- **CLI 모듈** — `paperclipai run --watch`용 터미널 포맷터

## 핵심 설계 결정

- **컨트롤 플레인, 실행 플레인 아님** — Paperclip은 에이전트를 오케스트레이션하지 실행하지 않음
- **회사 범위** — 모든 엔티티는 정확히 하나의 회사에 속함; 엄격한 데이터 경계
- **단일 담당자 태스크** — 원자적 체크아웃으로 동시 작업 방지
- **어댑터 불가지론** — HTTP API를 호출할 수 있는 모든 런타임이 에이전트로 작동
- **기본 임베디드** — 임베디드 PostgreSQL로 설정 없이 로컬 모드 지원
