---
title: "설정 명령어"
date: 2026-04-01T10:35:00+09:00
description: "Paperclip 한국어 가이드 - CLI: 설정 명령어"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "CLI", "도구"]
weight: 36
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — CLI**


## `paperclipai run`

자동 온보딩과 서버 시작을 한 번에 수행합니다. 실행 전 설정을 검증합니다.

## `paperclipai onboard`

초기 설정 가이드:
- **Quickstart** — 로컬 기본값
- **Advanced setup** — 커스텀 설정

플래그:
- `--run` — 즉시 시작
- `--yes` — 비대화형 기본값

## `paperclipai doctor`

헬스 체크 수행:
- 서버 설정
- 데이터베이스 연결
- 시크릿 어댑터
- 스토리지 설정
- 필수 파일

`--repair` 옵션으로 자동 수정 활성화.

## `paperclipai configure`

특정 설정 섹션 업데이트:

```bash
pnpm paperclipai configure --section server
pnpm paperclipai configure --section secrets
pnpm paperclipai configure --section storage
```

## `paperclipai env`

해결된 환경 설정을 표시합니다.

## `paperclipai allowed-hostname`

인증 접근을 위한 프라이빗 호스트명 등록.

## 데이터 저장 위치

| 경로 | 내용 |
|------|------|
| `~/.paperclip/instances/default/config.json` | 설정 |
| `~/.paperclip/instances/default/db/` | 데이터베이스 |
| `~/.paperclip/instances/default/data/storage/` | 스토리지 파일 |
| `~/.paperclip/instances/default/secrets/` | 암호화 키 |
| `~/.paperclip/instances/default/logs/` | 로그 |

커스텀 경로: `PAPERCLIP_HOME`, `PAPERCLIP_INSTANCE_ID` 또는 `--data-dir` 플래그
