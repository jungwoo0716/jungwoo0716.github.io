---
title: "로컬 개발"
date: 2026-04-02T43:00:00+09:00
description: "Paperclip 한국어 가이드 - 배포: 로컬 개발"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "배포", "DevOps"]
weight: 34
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 배포**


## 사전 요구사항

- Node.js 20+
- pnpm 9+

## 시작하기

```bash
pnpm install
pnpm dev
```

API 서버: `http://localhost:3100`, UI도 같은 오리진에서 제공. 외부 서비스 불필요.

## 초기 설정

```bash
pnpm paperclipai run
```

자동 온보딩, 진단 체크 및 자동 복구, 검증 통과 시 서버 시작.

## 프라이빗 네트워크 접근

인증 개발 접근용:

```bash
pnpm dev --tailscale-auth
```

서버를 `0.0.0.0`에 바인딩합니다. 추가 프라이빗 호스트명 화이트리스트:

```bash
pnpm paperclipai allowed-hostname [hostname]
```

## 서버 헬스 테스트

```bash
# 헬스 체크
curl http://localhost:3100/api/health
# 응답: {"status":"ok"}

# 회사 목록
curl http://localhost:3100/api/companies
# 응답: [] (초기에는 빈 배열)
```

## 데이터 저장 위치

`~/.paperclip/instances/default/` 하위:
- `config.json` — 설정
- `db/` — 데이터베이스
- `data/storage/` — 파일 스토리지
- `secrets/` — 암호화 키
- `logs/` — 로그

커스텀 경로: `PAPERCLIP_HOME` 및 `PAPERCLIP_INSTANCE_ID` 환경 변수

## 초기화 (데이터 리셋)

```bash
rm -rf ~/.paperclip/instances/default/db
pnpm dev
```
