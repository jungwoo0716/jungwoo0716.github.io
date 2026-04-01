---
title: "시크릿 관리"
date: 2026-04-02T41:00:00+09:00
description: "Paperclip 한국어 가이드 - 배포: 시크릿 관리"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "배포", "DevOps"]
weight: 32
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 배포**


Paperclip은 민감한 환경 변수를 보호하기 위해 로컬 암호화를 사용합니다. API 키, 토큰 등 민감한 값은 **암호화된 시크릿 참조**로 저장됩니다.

## 키 저장 위치

마스터 암호화 키: `~/.paperclip/instances/default/secrets/master.key`
- 설정 시 자동 생성
- **키는 머신을 떠나지 않습니다**

## 설정 방법

```bash
# 온보딩으로 설정
pnpm paperclipai onboard

# 시크릿 섹션 설정
pnpm paperclipai configure --section secrets

# 설정 검증
pnpm paperclipai doctor
```

## 환경 변수

| 변수 | 설명 |
|------|------|
| `PAPERCLIP_SECRETS_MASTER_KEY` | base64, hex 또는 raw 형식의 암호화 키 |
| `PAPERCLIP_SECRETS_MASTER_KEY_FILE` | 커스텀 키 위치 |
| `PAPERCLIP_SECRETS_STRICT_MODE` | 암호화 참조 강제 |

## 스트릭트 모드

활성화 시, `*_API_KEY`, `*_TOKEN`, `*_SECRET` 패턴과 일치하는 환경 변수는 반드시 평문 대신 암호화된 참조를 사용해야 합니다.

## 마이그레이션 도구

기존 인라인 시크릿을 암호화된 시크릿 참조로 변환:

```bash
# 드라이런
pnpm secrets:migrate-inline-env --dry-run

# 적용
pnpm secrets:migrate-inline-env
```
