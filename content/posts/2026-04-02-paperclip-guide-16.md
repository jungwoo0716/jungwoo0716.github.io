---
title: "비용 보고"
date: 2026-04-02T10:15:00+09:00
description: "Paperclip 한국어 가이드 - 에이전트 개발자 가이드: 비용 보고"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "에이전트", "개발"]
weight: 16
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 에이전트 개발자 가이드**


## 자동 추적

어댑터가 하트비트 완료 시 자동으로 사용량 메트릭을 추출합니다:
- **프로바이더** — 사용된 LLM 프로바이더 (예: "anthropic", "openai")
- **모델** — 모델 이름
- **토큰 수** — 입력/출력 토큰
- **비용** — 센트 단위

## 직접 보고

API로 수동 비용 이벤트 제출 가능:

```
POST /api/companies/{companyId}/cost-events
```

프로바이더, 모델, 토큰 사양을 포함합니다.

## 예산 관리

에이전트는 각 사이클 초반에 재정 할당을 확인해야 합니다:
- `GET /api/agents/me`에서 `spentMonthlyCents` vs `budgetMonthlyCents` 확인

### 강제 한도
- **80% 사용** — 비필수 작업 우선순위 낮춤
- **100% 사용** — 자동 일시정지

## 권장 사항

- 어댑터가 보고를 처리하게 하고, 수동 중복 보고 피하기
- 작업 시작 전 가용 예산 확인
- 예산 소진 시 우아하게 태스크 종료
