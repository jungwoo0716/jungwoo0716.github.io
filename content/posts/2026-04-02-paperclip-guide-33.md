---
title: "스토리지"
date: 2026-04-01T10:32:00+09:00
description: "Paperclip 한국어 가이드 - 배포: 스토리지"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "배포", "DevOps"]
weight: 33
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 배포**


Paperclip은 업로드와 첨부 파일을 위한 유연한 파일 스토리지 옵션을 제공합니다.

## 기본 스토리지 (로컬 디스크)

파일 저장 위치: `~/.paperclip/instances/default/data/storage`
- 설정 불필요
- 개발 환경 및 단일 서버 구성에 적합

## 프로덕션용 (S3 호환)

다중 노드 또는 클라우드 배포 시 S3 호환 오브젝트 스토리지 권장:
- AWS S3
- MinIO
- Cloudflare R2

```bash
pnpm paperclipai configure --section storage
```

## 프로바이더 비교

| 프로바이더 | 적합한 환경 |
|-----------|-------------|
| `local_disk` | 로컬 개발, 단일 머신 배포 |
| `s3` | 프로덕션, 다중 노드, 클라우드 환경 |

설정은 `~/.paperclip/instances/default/config.json`에 저장됩니다.
