---
title: "배포 모드"
date: 2026-04-02T37:00:00+09:00
description: "Paperclip 한국어 가이드 - 배포: 배포 모드"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "배포", "DevOps"]
weight: 28
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 배포**


## 로컬 트러스티드 모드 (기본)

솔로 운영자를 위한 표준 설정:
- localhost에만 바인딩
- 인증 불필요
- 로컬 보드 사용자 자동 생성
- `pnpm paperclipai onboard`로 활성화

## 인증 모드

Better Auth를 통한 사용자 로그인 필수. 두 가지 하위 설정:

### 프라이빗 네트워크
- Tailscale, VPN, LAN 같은 제한된 네트워크용
- 자동 베이스 URL 감지
- 프라이빗 호스트 신뢰 검증 필요
- 커스텀 Tailscale 호스트명: `pnpm paperclipai allowed-hostname`

### 퍼블릭 인터넷
- 인터넷 접근 가능한 배포용
- 명시적 퍼블릭 URL 필요
- doctor 진단 체크 시 향상된 보안 검증

## 보드 소유권 이전

로컬에서 인증 모드로 마이그레이션하면 일회성 클레임 메커니즘이 트리거됩니다:
- 시작 시 인증 토큰이 포함된 특별 URL 표시
- 로그인한 사용자가 인스턴스 관리자 권한을 획득
- 원래 로컬 관리자 계정은 강등

## 설정 관리

```bash
pnpm paperclipai configure --section server
```

또는 런타임 환경 변수: `PAPERCLIP_DEPLOYMENT_MODE`
