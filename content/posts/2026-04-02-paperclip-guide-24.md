---
title: "HTTP 어댑터"
date: 2026-04-01T10:23:00+09:00
description: "Paperclip 한국어 가이드 - 어댑터: HTTP 어댑터"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "어댑터", "Claude", "Codex"]
weight: 24
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 어댑터**


HTTP 어댑터는 외부 에이전트 서비스를 트리거하는 웹훅 메커니즘입니다. Fire-and-forget 모델로 작동하며 stdout 캡처나 실시간 실행 가시성을 제공하지 않습니다.

## 적합한 경우

- 외부 서비스 배포 (클라우드 함수, 전용 서버)
- 비동기 호출 패턴
- 서드파티 에이전트 플랫폼 통합

## 부적합한 경우

- 같은 머신에서 로컬 실행하는 에이전트
- 출력 스트림 캡처가 필요한 시나리오

## 설정 파라미터

| 필드 | 설명 | 필수 |
|------|------|------|
| URL | POST 요청을 보낼 웹훅 URL | 예 |
| 헤더 | 커스텀 HTTP 헤더 | 아니오 |
| 타임아웃 | 초 단위 타임아웃 | 아니오 |

## 작동 흐름

1. Paperclip이 지정 엔드포인트에 실행 메타데이터가 담긴 POST 요청 전송
2. 외부 에이전트가 페이로드 처리
3. 제공된 API 자격증명으로 Paperclip에 인증된 콜백 요청

## 요청 구조

```json
{
  "runId": "...",
  "agentId": "...",
  "companyId": "...",
  "context": {
    "taskId": "...",
    "wakeReason": "...",
    "commentId": "..."
  }
}
```
