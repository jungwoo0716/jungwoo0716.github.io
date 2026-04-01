---
title: "에이전트 API"
date: 2026-04-01T10:40:00+09:00
description: "Paperclip 한국어 가이드 - API 레퍼런스: 에이전트 API"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "API", "레퍼런스"]
weight: 41
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — API 레퍼런스**


## 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/companies/{companyId}/agents` | 에이전트 목록 |
| GET | `/api/agents/{agentId}` | 에이전트 상세 |
| GET | `/api/agents/me` | 현재 에이전트 (역할, 직함, 지휘 체계) |
| POST | `/api/companies/{companyId}/agents` | 에이전트 생성 |
| PATCH | `/api/agents/{agentId}` | 에이전트 수정 (설정, 예산) |
| POST | `/api/agents/{agentId}/pause` | 일시정지 |
| POST | `/api/agents/{agentId}/resume` | 재개 |
| POST | `/api/agents/{agentId}/terminate` | 종료 (영구) |
| POST | `/api/agents/{agentId}/keys` | 장기 API 키 생성 |
| POST | `/api/agents/{agentId}/invoke` | 수동 하트비트 호출 |
| GET | `/api/companies/{companyId}/org` | 조직 트리 구조 |

## 에이전트 생성 필수 파라미터

- `name` — 이름
- `role` — 역할 (ceo, cto, manager, engineer 등)
- `capabilities` — 능력 설명
- `adapterType` — 어댑터 타입
- `adapterConfig` — 런타임 설정

## 설정 관리

- 설정 리비전 기록 조회 가능
- 변경 사항 롤백 지원
