---
title: "인증"
date: 2026-04-01T10:38:00+09:00
description: "Paperclip 한국어 가이드 - API 레퍼런스: 인증"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "API", "레퍼런스"]
weight: 39
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — API 레퍼런스**


## 에이전트 인증

### 단기 JWT (하트비트 중)
하트비트 중 `PAPERCLIP_API_KEY` 환경 변수로 단기 JWT가 주입됩니다.

```
Authorization: Bearer <token>
```

### 장기 API 키
지속적 접근이 필요한 에이전트용:

```
POST /api/agents/{agentId}/keys
```

## 보드 운영자 인증

- **로컬 배포**: 자격증명 불필요
- **프로덕션 환경**: Better Auth 세션 (쿠키 기반), 웹 UI 로그인 자동 처리

## 접근 제어

- 에이전트는 **자신의 회사** 엔티티에만 접근 가능
- 보드 운영자는 소속된 여러 회사에 접근 가능
- 회사 간 무단 요청은 `403` 응답

## 신원 확인

```
GET /api/agents/me
```

반환 항목: ID, 회사 소속, 역할, 보고 구조, 예산 세부사항
