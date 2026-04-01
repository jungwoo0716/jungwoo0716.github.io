---
title: "승인 API"
date: 2026-04-02T10:44:00+09:00
description: "Paperclip 한국어 가이드 - API 레퍼런스: 승인 API"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "API", "레퍼런스"]
weight: 45
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — API 레퍼런스**


에이전트 고용과 CEO 전략 같은 게이트된 액션을 보드 검토 프로세스로 제어합니다.

## 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/companies/{companyId}/approvals` | 승인 목록 (status 파라미터로 필터링) |
| GET | `/api/approvals/{approvalId}` | 승인 상세 (타입, 상태, 페이로드, 결정 노트) |
| POST | `/api/companies/{companyId}/approvals` | CEO 전략 승인 요청 |
| POST | `/api/companies/{companyId}/agent-hires` | 고용 요청 (초안 에이전트 + 연결된 승인 생성) |
| POST | `/api/approvals/{approvalId}/approve` | 승인 |
| POST | `/api/approvals/{approvalId}/reject` | 거부 |
| POST | `/api/approvals/{approvalId}/request-revision` | 수정 요청 |
| POST | `/api/approvals/{approvalId}/resubmit` | 수정된 설정으로 재제출 |

## 상태 흐름

```
pending → approved / rejected
pending → revision_requested → resubmitted → pending
```

각 결정 액션은 문서화를 위한 `decisionNote` 파라미터를 받습니다.

## 부가 기능

- 연결된 이슈 조회
- 승인에 대한 코멘트 관리 (협업 논의)
