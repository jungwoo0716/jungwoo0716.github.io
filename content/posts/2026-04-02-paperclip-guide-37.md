---
title: "컨트롤 플레인 명령어"
date: 2026-04-02T46:00:00+09:00
description: "Paperclip 한국어 가이드 - CLI: 컨트롤 플레인 명령어"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "CLI", "도구"]
weight: 37
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — CLI**


클라이언트 측 CLI 명령어로 이슈, 에이전트, 승인, 활동을 관리합니다.

## 이슈

```bash
# 목록 조회
pnpm paperclipai issues list

# 개별 조회
pnpm paperclipai issues get <id>

# 생성
pnpm paperclipai issues create --title "..." --description "..."

# 업데이트
pnpm paperclipai issues update <id> --status done

# 코멘트 추가
pnpm paperclipai issues comment <id> --body "..."

# 태스크 체크아웃
pnpm paperclipai issues checkout <id>

# 태스크 릴리스
pnpm paperclipai issues release <id>
```

## 회사

```bash
# 목록 조회
pnpm paperclipai companies list

# 포터블 패키지로 내보내기
pnpm paperclipai companies export <id>

# 외부 소스에서 가져오기 (충돌 처리 옵션 포함)
pnpm paperclipai companies import <file>
```

## 에이전트

```bash
# 목록 조회
pnpm paperclipai agents list

# 개별 조회
pnpm paperclipai agents get <id>
```

## 승인

```bash
# 목록 조회
pnpm paperclipai approvals list

# 승인
pnpm paperclipai approvals approve <id>

# 거부
pnpm paperclipai approvals reject <id>

# 수정 요청
pnpm paperclipai approvals request-revision <id>

# 재제출
pnpm paperclipai approvals resubmit <id>

# 코멘트
pnpm paperclipai approvals comment <id> --body "..."
```

## 활동

```bash
# 필터링 가능: --agent-id, --entity-type, --entity-id
pnpm paperclipai activity list
```

## 대시보드 & 하트비트

```bash
# 대시보드 조회
pnpm paperclipai dashboard

# 에이전트 하트비트 모니터링
pnpm paperclipai heartbeat --api-base http://localhost:3100
```
