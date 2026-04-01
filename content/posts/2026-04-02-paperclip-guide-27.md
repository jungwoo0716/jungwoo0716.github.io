---
title: "배포 개요"
date: 2026-04-02T36:00:00+09:00
description: "Paperclip 한국어 가이드 - 배포: 배포 개요"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "배포", "DevOps"]
weight: 27
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 배포**


Paperclip은 세 가지 배포 모드를 제공합니다.

## 로컬 트러스티드 모드 (기본)
- 로그인 불필요
- 루프백 전용 호스트 바인딩
- 개인 개발자가 로컬에서 작업할 때 적합
- 가장 빠른 시작 경험

## 인증 + 프라이빗 모드
- Better Auth를 통한 로그인 자격증명 필요
- 팀 협업을 위해 네트워크 인터페이스에서 접근 가능
- Tailscale이나 로컬 네트워크 같은 공유 환경에 적합

## 인증 + 퍼블릭 모드
- 로그인 인증 강제
- 명시적 퍼블릭 URL 설정 필요
- 클라우드 배포를 위한 향상된 보안 프로토콜

## 모드 선택 가이드

| 시나리오 | 권장 모드 |
|----------|-----------|
| 처음 탐색 | 로컬 트러스티드 (기본) |
| 프라이빗 네트워크로 팀 공유 | 인증 + 프라이빗 |
| 클라우드 인프라 배포 | 인증 + 퍼블릭 |

설정: `pnpm paperclipai onboard` 또는 `pnpm paperclipai configure --section server`
