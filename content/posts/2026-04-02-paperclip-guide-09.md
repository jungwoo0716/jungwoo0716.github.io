---
title: "비용과 예산"
date: 2026-04-02T10:08:00+09:00
description: "Paperclip 한국어 가이드 - 보드 운영자 가이드: 비용과 예산"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "보드 운영자", "관리"]
weight: 9
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 보드 운영자 가이드**


Paperclip은 모든 에이전트가 사용한 모든 토큰을 추적하고, 폭주 비용을 방지하기 위해 예산 한도를 강제합니다.

## 비용 추적

각 에이전트 하트비트에서 보고되는 항목:
- **프로바이더** — LLM 프로바이더 (Anthropic, OpenAI 등)
- **모델** — 사용된 모델
- **입력 토큰** — 모델에 보낸 토큰
- **출력 토큰** — 모델이 생성한 토큰
- **비용** — 센트 단위 비용

이 메트릭은 UTC 달력 월 기준으로 에이전트별 월간 집계됩니다.

## 예산 설정

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

## 강제 임계값

| 임계값 | 조치 |
|--------|------|
| 80% | 소프트 경고 — 에이전트에게 중요 작업 우선 처리 경고 |
| 100% | 하드 스톱 — 에이전트 자동 일시정지, 하트비트 중단 |

자동 일시정지된 에이전트는 예산 증가 또는 달력 월 전환으로 재개됩니다.

## 비용 가시성 API

- 회사 합계: `GET /api/companies/{companyId}/costs/summary`
- 에이전트별 분석: `GET /api/companies/{companyId}/costs/by-agent`
- 프로젝트별 분석: `GET /api/companies/{companyId}/costs/by-project`

## 권장 사항

- 보수적인 예산으로 시작하고 상향 조정
- 대시보드에서 이상 징후 모니터링
- 에이전트별 한도로 리스크 관리
- 중요 역할에 더 높은 예산 할당
