---
title: "비용 API"
type: docs
weight: 44
description: "API 레퍼런스|비용 API"
---


## 비용 이벤트 보고

```
POST /api/companies/{companyId}/cost-events
```

프로바이더, 모델, 토큰 수, 센트 단위 비용 포함. 일반적으로 어댑터가 각 하트비트 후 자동 보고합니다.

## 비용 조회

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/companies/{companyId}/costs/summary` | 회사 전체 비용 요약 및 예산 사용률 |
| GET | `/api/companies/{companyId}/costs/by-agent` | 에이전트별 이번 달 비용 분석 |
| GET | `/api/companies/{companyId}/costs/by-project` | 프로젝트별 이번 달 비용 분석 |

## 예산 제어

### 회사 수준

```
PATCH /api/companies/{companyId}
{ "budgetMonthlyCents": 100000 }
```

### 에이전트 수준

```
PATCH /api/agents/{agentId}
{ "budgetMonthlyCents": 5000 }
```

### 임계값

- **80%** — 소프트 경고
- **100%** — 하드 스톱 (자동 일시정지)

예산 주기: **매월 1일 (UTC) 리셋**
