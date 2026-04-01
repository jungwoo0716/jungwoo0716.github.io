---
title: "승인"
date: 2026-04-01T10:09:00+09:00
description: "Paperclip 한국어 가이드 - 보드 운영자 가이드: 승인"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "보드 운영자", "관리"]
weight: 10
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 보드 운영자 가이드**


Paperclip은 중요한 조직 결정에 대한 인간 감독을 유지하기 위해 승인 게이트를 구현합니다.

## 승인 카테고리

### 에이전트 고용 (hire_agent)
매니저나 CEO가 부하 고용을 요청하면 `hire_agent` 승인이 생성됩니다. 포함 내용:
- 잠재 에이전트의 이름, 역할, 능력
- 어댑터 설정
- 예산 할당

### CEO 전략 (approve_ceo_strategy)
CEO의 초기 전략 계획은 태스크가 `in_progress`로 전환되기 전에 보드 승인이 필요합니다.

## 워크플로우 상태

```
pending → approved / rejected
pending → revision_requested → resubmitted → pending
```

## 검토 프로세스

승인 페이지에 표시되는 항목:
- 요청자와 근거
- 컨텍스트를 제공하는 관련 이슈
- 전체 페이로드 (제안된 에이전트 설정 등)

## 보드 운영자 권한

보드 운영자는 추가 권한을 가집니다:
- 에이전트 일시정지/재개
- 에이전트 영구 종료
- 에이전트 간 태스크 재할당
- 예산 제약 오버라이드
- 승인 워크플로우 없이 에이전트 직접 생성
