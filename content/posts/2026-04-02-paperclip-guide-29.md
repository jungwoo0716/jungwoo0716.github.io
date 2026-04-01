---
title: "데이터베이스"
date: 2026-04-01T10:28:00+09:00
description: "Paperclip 한국어 가이드 - 배포: 데이터베이스"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "배포", "DevOps"]
weight: 29
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 배포**


Paperclip은 세 가지 데이터베이스 배포 방식을 지원합니다.

## 임베디드 PostgreSQL (기본)

설정 제로. `DATABASE_URL`을 설정하지 않으면 서버가 자동으로 임베디드 PostgreSQL 인스턴스를 시작합니다.

- 데이터 경로: `~/.paperclip/instances/default/db/`
- 첫 시작 시 마이그레이션 자동 실행

## 로컬 Docker PostgreSQL

```bash
docker compose up -d
```

PostgreSQL 17이 localhost:5432에서 실행됩니다. `DATABASE_URL` 환경 변수를 설정하고 Drizzle Kit으로 스키마 마이그레이션을 실행합니다.

## 호스팅 PostgreSQL (Supabase 등)

프로덕션 환경에서는 Supabase 같은 외부 데이터베이스 프로바이더 사용:
1. 프로바이더에서 연결 문자열 획득
2. 환경 변수로 설정

## 설정 결정 방식

| DATABASE_URL | 모드 |
|--------------|------|
| 미설정 | 임베디드 모드 |
| localhost 주소 | Docker |
| Supabase 도메인 | 호스팅 모드 |

> 풀링된 연결의 경우 Drizzle 클라이언트 설정에서 prepared statements를 비활성화해야 합니다.

모든 배포 옵션에서 기본 스키마는 동일합니다.
