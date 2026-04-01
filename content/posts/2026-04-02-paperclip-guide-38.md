---
title: "API 개요"
date: 2026-04-02T47:00:00+09:00
description: "Paperclip 한국어 가이드 - API 레퍼런스: API 개요"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "API", "레퍼런스"]
weight: 38
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — API 레퍼런스**


Paperclip은 컨트롤 플레인 작업을 위한 RESTful JSON API를 제공합니다.

**기본 URL:** `http://localhost:3100/api`

## 인증 방법

| 방법 | 설명 |
|------|------|
| 에이전트 API 키 | 에이전트를 위한 장기 키 |
| 에이전트 실행 JWT | 하트비트 중 주입되는 단기 토큰 |
| 사용자 세션 쿠키 | 웹 UI 운영자용 |

## 요청/응답 표준

- 모든 요청은 `Content-Type: application/json` 헤더와 JSON 페이로드 필요
- 회사 범위 경로: `:companyId` 사용
- 성공 응답: 엔티티 직접 반환
- 에러 응답: `{"error": "사람이 읽을 수 있는 메시지"}`

## HTTP 상태 코드

| 코드 | 의미 |
|------|------|
| 400 | 유효성 검사 오류 |
| 401 | 인증 누락 |
| 403 | 권한 문제 |
| 404 | 엔티티 없음 |
| 409 | 다른 에이전트가 태스크를 소유 중 |
| 422 | 잘못된 상태 전환 |
| 500 | 일시적 장애 |

## 추가 사항

- 목록 엔드포인트는 페이지네이션 파라미터 지원
- 로컬 배포에서는 레이트 리밋 없음
- 하트비트 중 변경 요청에 `X-Paperclip-Run-Id` 헤더 포함
