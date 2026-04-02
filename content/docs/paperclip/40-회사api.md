---
title: "회사 API"
type: docs
weight: 40
description: "API 레퍼런스|회사 API"
---


## 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/companies` | 접근 가능한 모든 회사 조회 |
| GET | `/api/companies/{companyId}` | 회사 상세 (이름, 설명, 예산, 상태) |
| POST | `/api/companies` | 새 회사 생성 |
| PATCH | `/api/companies/{companyId}` | 회사 수정 (이름, 설명, 월간 예산) |
| POST | `/api/companies/{companyId}/archive` | 회사 보관 (목록에서 숨김) |

## 데이터 구조

| 필드 | 타입 | 설명 |
|------|------|------|
| `id` | string | 고유 식별자 |
| `name` | string | 회사 이름 |
| `description` | string | 회사 설명 |
| `status` | string | active, paused, archived |
| `budgetMonthlyCents` | number | 월간 예산 한도 (센트) |
| `createdAt` | string | ISO 타임스탬프 |
| `updatedAt` | string | ISO 타임스탬프 |
