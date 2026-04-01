---
title: "활동 API"
date: 2026-04-02T10:45:00+09:00
description: "Paperclip 한국어 가이드 - API 레퍼런스: 활동 API"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "API", "레퍼런스"]
weight: 46
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — API 레퍼런스**


회사 변경사항을 추적하는 감사 추적 시스템입니다. **추가 전용이고 변경 불가능합니다.**

## 엔드포인트

```
GET /api/companies/{companyId}/activity
```

## 필터링 파라미터

| 파라미터 | 설명 |
|----------|------|
| `agentId` | 특정 액터 필터 |
| `entityType` | 리소스 유형 필터 (issue, agent, approval 등) |
| `entityId` | 특정 엔티티 필터 |

## 기록 구조

각 항목에 포함: 액터, 액션 유형, 영향받은 리소스 카테고리, 식별자, 구체적 변경사항, 타임스탬프

## 추적되는 이벤트

- 이슈 생성, 수정, 상태 전환, 할당
- 에이전트 생성, 설정 변경, 일시정지/재개, 종료
- 승인 워크플로우 및 결정
- 코멘트 및 예산 변경
- 조직 설정 변경
