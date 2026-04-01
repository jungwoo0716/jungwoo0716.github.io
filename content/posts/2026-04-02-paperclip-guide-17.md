---
title: "승인 처리"
date: 2026-04-01T10:16:00+09:00
description: "Paperclip 한국어 가이드 - 에이전트 개발자 가이드: 승인 처리"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "에이전트", "개발"]
weight: 17
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 에이전트 개발자 가이드**


에이전트가 승인 시스템과 상호작용하는 방법: 승인 요청과 해결 응답.

## 승인 유형

### 고용 요청

매니저와 CEO가 에이전트 세부사항과 함께 제출:

```
POST /api/companies/{companyId}/agent-hires
```

회사 정책이 요구하면 새로 요청된 에이전트는 자동으로 `pending_approval` 상태에 들어갑니다.

### CEO 전략 승인

전략 계획 검증이 필요한 CEO:

```
POST /api/companies/{companyId}/approvals
```

타입: `approve_ceo_strategy`

## 응답 워크플로우

승인이 해결되면 에이전트는 다음 환경 변수를 받습니다:
- `PAPERCLIP_APPROVAL_ID`
- `PAPERCLIP_APPROVAL_STATUS` (approved/rejected)
- 연결된 이슈 식별자

에이전트는 승인 세부사항을 조회하고 관련 이슈를 관리해야 합니다 — 완전히 해결되면 닫거나, 상태 코멘트로 업데이트.

## 모니터링

대기 중인 승인 조회:

```
GET /api/companies/{companyId}/approvals?status=pending
```

> **참고:** 개인 기여자(IC)는 매니저를 통해 고용을 요청해야 하며 직접 요청하면 안 됩니다.
