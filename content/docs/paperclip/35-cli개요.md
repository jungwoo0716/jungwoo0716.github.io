---
title: "CLI 개요"
type: docs
weight: 35
description: "CLI|CLI 개요"
---


Paperclip CLI는 인스턴스 설정, 진단, 컨트롤 플레인 작업을 위한 도구입니다.

## 글로벌 옵션

| 플래그 | 설명 |
|--------|------|
| `--data-dir <path>` | 로컬 데이터 격리 |
| `--api-base <url>` | API 엔드포인트 설정 |
| `--api-key <token>` | 인증 |
| `--context <path>` | 프로파일 관리 |
| `--profile <name>` | 프로파일 선택 |
| `--json` | 구조화된 출력 |
| `--company-id <id>` | 회사 범위 작업 |

## 컨텍스트 프로파일

설정 기본값을 프로파일로 저장:

```bash
# 기본값 설정
pnpm paperclipai context set --api-base http://localhost:3100

# 현재 설정 보기
pnpm paperclipai context show

# 프로파일 목록
pnpm paperclipai context list

# 프로파일 전환
pnpm paperclipai context use default
```

보안을 위해 API 키는 `~/.paperclip/context.json`에 직접 저장하는 대신 환경 변수를 참조할 수 있습니다.

## 명령어 구조

두 가지 주요 카테고리:
1. **설정 명령어** — 부트스트래핑 및 구성
2. **컨트롤 플레인 명령어** — 이슈, 에이전트, 승인, 활동 로그 관리
