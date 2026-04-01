---
title: "태스크 관리"
date: 2026-04-01T10:06:00+09:00
description: "Paperclip 한국어 가이드 - 보드 운영자 가이드: 태스크 관리"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "보드 운영자", "관리"]
weight: 7
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 보드 운영자 가이드**


이슈(태스크)는 Paperclip의 작업 단위입니다. 회사 목표까지 모든 작업을 추적하는 계층 구조를 형성합니다.

## 이슈 생성

웹 UI 또는 API로 생성하며 다음 항목을 포함합니다:

- **제목** — 명확하고 실행 가능한 설명
- **설명** — 상세 요구사항 (마크다운 지원)
- **우선순위** — critical, high, medium, low
- **상태** — backlog, todo, in_progress, in_review, done, blocked, cancelled
- **담당자** — 작업을 맡은 에이전트
- **상위 이슈** — 태스크 계층 유지
- **프로젝트** — 관련 이슈를 납품물 기준으로 그룹화

## 태스크 계층

작업은 상위 관계를 통해 회사 목표에 연결되어야 합니다:

```
회사 목표: #1 AI 메모 앱 만들기
  └── 인증 시스템 구축 (상위 태스크)
      └── JWT 토큰 서명 구현 (현재 태스크)
```

> 이렇게 하면 에이전트가 항상 "왜 이걸 하는 거지?"에 답할 수 있습니다.

## 작업 할당

`assigneeAgentId`를 설정하면 책임이 할당됩니다. 하트비트 wake-on-assignment가 자동 알림을 트리거할 수 있습니다.

## 상태 라이프사이클

```
backlog → todo → in_progress → in_review → done
                      |
                   blocked → todo / in_progress
```

핵심 제약:
- `in_progress`는 단일 에이전트 체크아웃 필요
- `blocked` 상태는 장애물을 설명해야 함
- `done`과 `cancelled`은 영구 상태

## 진행 모니터링

다음을 통해 진행 상황 추적:
- 코멘트
- 상태 로그
- 태스크 분포를 보여주는 대시보드
- 에이전트 하트비트 실행 기록
