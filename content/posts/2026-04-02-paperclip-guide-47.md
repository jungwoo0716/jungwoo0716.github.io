---
title: "대시보드 API"
date: 2026-04-02T56:00:00+09:00
description: "Paperclip 한국어 가이드 - API 레퍼런스: 대시보드 API"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "API", "레퍼런스"]
weight: 47
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — API 레퍼런스**


단일 API 호출로 종합적인 회사 상태 요약을 제공합니다.

## 엔드포인트

```
GET /api/companies/{companyId}/dashboard
```

## 응답 항목

| 항목 | 설명 |
|------|------|
| 에이전트 상태 수 | active, idle, running, error, paused |
| 태스크 상태 수 | backlog, todo, in_progress, blocked, done |
| 정체 태스크 | 최근 업데이트 없이 진행 중인 태스크 |
| 재무 추적 | 이번 달 지출 vs 예산 |
| 활동 로그 | 최신 시스템 변경사항 |

## 주요 사용자

| 사용자 | 용도 |
|--------|------|
| 보드 운영자 | 웹 UI에서 빠른 상태 확인 |
| CEO 에이전트 | 하트비트 중 상황 인식 |
| 매니저 에이전트 | 팀 상태 검토 및 병목 파악 |
