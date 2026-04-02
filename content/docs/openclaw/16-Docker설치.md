---
title: "Docker 설치"
type: docs
weight: 16
description: "OpenClaw|Docker 설치"
---


## 개요

OpenClaw는 Docker 컨테이너로 배포할 수 있다. Docker 설치는 **선택 사항**이며, 서버 환경이나 격리된 실행이 필요한 경우에 사용한다.

---

## 사전 요구 사항

- Docker 및 Docker Compose 설치
- 충분한 디스크 공간 (이미지 + 데이터)
- AI 모델 프로바이더 API 키

---

## 빠른 설정

### 설정 스크립트 실행

```bash
./scripts/docker/setup.sh
```

이 스크립트는 다음을 수행한다:

- 필요한 디렉토리 생성
- 기본 설정 파일 생성
- Docker 이미지 다운로드
- 컨테이너 시작

---

## 사전 빌드 이미지

GitHub Container Registry(GHCR)에서 사전 빌드된 이미지를 사용할 수 있다.

```bash
docker pull ghcr.io/openclaw/openclaw:latest
```

### 이미지 태그

| 태그 | 설명 |
|------|------|
| `latest` | 최신 안정 릴리스 |
| `x.y.z` | 특정 버전 |
| `nightly` | 최신 개발 빌드 |

---

## Docker Compose 설정 예시

```yaml
version: '3.8'

services:
  openclaw:
    image: ghcr.io/openclaw/openclaw:latest
    ports:
      - "18789:18789"
    volumes:
      - ./config:/root/.openclaw          # 설정 파일
      - ./workspace:/root/.openclaw/agents/default/workspace  # 워크스페이스
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
      - TELEGRAM_BOT_TOKEN=${TELEGRAM_BOT_TOKEN}
      - OPENCLAW_GATEWAY_TOKEN=${OPENCLAW_GATEWAY_TOKEN}
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://127.0.0.1:18789/healthz"]
      interval: 30s
      timeout: 10s
      retries: 3
```

---

## Control UI 접근

컨테이너가 실행되면 브라우저에서 Control UI에 접근할 수 있다.

```
http://127.0.0.1:18789/
```

Control UI에서 에이전트 관리, 채널 설정, 실시간 대화 모니터링 등이 가능하다.

---

## 에이전트 샌드박스

Docker 환경에서는 에이전트 샌드박스가 **별도의 컨테이너**에서 실행된다.

```yaml
services:
  openclaw:
    # ... 메인 게이트웨이

  agent-sandbox:
    image: ghcr.io/openclaw/openclaw-sandbox:latest
    network_mode: "none"          # 네트워크 격리 (필요 시)
    volumes:
      - sandbox-data:/workspace
    security_opt:
      - no-new-privileges:true

volumes:
  sandbox-data:
```

이를 통해 에이전트의 도구 실행(셸 명령어, 파일 접근 등)이 호스트 시스템으로부터 격리된다.

---

## 스토리지

### 바인드 마운트

설정과 워크스페이스는 호스트 파일시스템에 바인드 마운트하여 영속성을 보장한다.

```yaml
volumes:
  - ./config:/root/.openclaw                    # 설정 파일
  - ./workspace:/root/.openclaw/agents/default/workspace  # 워크스페이스
  - ./sessions:/root/.openclaw/agents/default/sessions    # 세션 데이터
```

### 디렉토리 구조

```
docker-openclaw/
├── docker-compose.yml
├── .env                    # 환경 변수 (API 키 등)
├── config/
│   └── openclaw.json       # 설정 파일
├── workspace/
│   ├── AGENTS.md
│   ├── SOUL.md
│   └── MEMORY.md
└── sessions/               # 세션 데이터 (자동 생성)
```

---

## 헬스 체크

게이트웨이의 상태를 확인하는 헬스 체크 엔드포인트가 제공된다.

```bash
curl http://127.0.0.1:18789/healthz
```

정상 응답:

```json
{
  "status": "ok",
  "uptime": 3600,
  "version": "1.0.0"
}
```

### Docker Compose 헬스 체크

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://127.0.0.1:18789/healthz"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 15s
```

---

## 환경 변수 관리

Docker 환경에서는 `.env` 파일로 환경 변수를 관리한다.

```bash
# .env
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
TELEGRAM_BOT_TOKEN=1234567890:ABCdef...
DISCORD_BOT_TOKEN=MTIzNDU2...
OPENCLAW_GATEWAY_TOKEN=my-secret-gateway-token
```

> **주의**: `.env` 파일은 `.gitignore`에 추가하여 버전 관리에서 제외해야 한다.

---

## 운영 명령어

```bash
# 컨테이너 시작
docker compose up -d

# 로그 확인
docker compose logs -f openclaw

# 컨테이너 중지
docker compose down

# 이미지 업데이트
docker compose pull && docker compose up -d

# 상태 확인
docker compose ps
```

---

## 문제 해결

### 포트 충돌

기본 포트 `18789`가 사용 중인 경우 다른 포트로 매핑한다.

```yaml
ports:
  - "28789:18789"    # 호스트 28789 → 컨테이너 18789
```

### 권한 문제

바인드 마운트 디렉토리의 권한을 확인한다.

```bash
chmod -R 755 ./config ./workspace
```

### 컨테이너 리소스 제한

필요 시 컨테이너의 리소스를 제한한다.

```yaml
services:
  openclaw:
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '2'
```
