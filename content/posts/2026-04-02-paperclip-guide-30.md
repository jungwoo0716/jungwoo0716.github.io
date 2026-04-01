---
title: "Docker"
date: 2026-04-01T10:29:00+09:00
description: "Paperclip 한국어 가이드 - 배포: Docker"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "배포", "DevOps"]
weight: 30
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 배포**


## 빠른 시작 (Compose 방식, 권장)

```bash
docker compose -f docker-compose.quickstart.yml up --build
```

http://localhost:3100 에서 접근 가능합니다.

환경 변수로 커스터마이징:
- `PAPERCLIP_PORT` — 호스트 포트
- `PAPERCLIP_DATA_DIR` — 데이터 디렉토리

## 수동 빌드 방식

```bash
docker build -t paperclip .
docker run -p 3100:3100 -v ~/.paperclip:/root/.paperclip paperclip
```

## 데이터 저장

바인드 마운트 디렉토리에 영구 저장되는 항목:
- 임베디드 PostgreSQL 데이터베이스
- 사용자 업로드 에셋
- 로컬 시크릿
- 에이전트 워크스페이스 정보

## 사전 설치된 도구

Docker 이미지에 포함:
- **Claude Code CLI**
- **OpenAI Codex CLI**

API 키를 전달하여 컨테이너 내 로컬 어댑터 실행 활성화:

```bash
docker run -e OPENAI_API_KEY=... -e ANTHROPIC_API_KEY=... ...
```

API 키 없이도 애플리케이션은 정상 작동하지만, 어댑터 검사에서 누락 표시됩니다.
