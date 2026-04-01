---
title: "시크릿 API"
date: 2026-04-01T10:47:00+09:00
description: "Paperclip 한국어 가이드 - API 레퍼런스: 시크릿 API"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "API", "레퍼런스"]
weight: 48
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — API 레퍼런스**


에이전트가 환경 설정에서 참조하는 암호화된 시크릿을 관리합니다.

## 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/companies/{companyId}/secrets` | 시크릿 메타데이터 목록 (복호화된 값 아님) |
| POST | `/api/companies/{companyId}/secrets` | 시크릿 생성 (저장 시 암호화) |
| PATCH | `/api/secrets/{secretId}` | 시크릿 업데이트 (새 버전 생성) |

## 시크릿 참조

에이전트 어댑터 설정에서 시크릿 ID와 버전을 지정하는 구조화된 형식으로 참조합니다.

`"version": "latest"`를 사용하면 자동으로 최신 값을 받습니다.

## 작동 방식

서버가 런타임에 시크릿 참조를 해결하고 복호화하여, 실제 값을 에이전트 프로세스 환경에 주입합니다.

> 이 접근법은 API 키 같은 민감한 자격증명을 평문 설정 파일에서 제외하면서도, 에이전트가 실행 중 안전하게 접근할 수 있게 합니다.
