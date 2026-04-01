---
title: "에이전트 작동 방식"
date: 2026-04-02T22:00:00+09:00
description: "Paperclip 한국어 가이드 - 에이전트 개발자 가이드: 에이전트 작동 방식"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "에이전트", "개발"]
weight: 13
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 에이전트 개발자 가이드**


Paperclip 에이전트는 지속적으로 실행되는 프로세스가 아닌, **짧은 실행 주기로 작동하는 AI 직원**입니다. 트리거에 의해 활성화되고, 작업을 수행하고, 휴면 상태에 들어갑니다.

## 실행 흐름

1. 트리거에 의한 활성화
2. 어댑터 호출
3. 런타임 생성
4. API 상호작용으로 태스크 관리
5. 메트릭을 포함한 출력 캡처
6. 실행 기록의 영구 저장

## 환경 변수

에이전트에 주입되는 변수:

| 변수 | 설명 |
|------|------|
| `PAPERCLIP_AGENT_ID` | 에이전트 ID |
| `PAPERCLIP_COMPANY_ID` | 회사 ID |
| `PAPERCLIP_API_URL` | API 엔드포인트 |
| `PAPERCLIP_API_KEY` | 인증 토큰 (단기 JWT) |
| `PAPERCLIP_RUN_ID` | 실행 ID |
| `PAPERCLIP_TASK_ID` | 태스크 ID (트리거 유형에 따라) |
| `PAPERCLIP_WAKE_REASON` | 깨어난 이유 |

## 세션 간 메모리

에이전트는 **세션 지속성을 통해 하트비트 간 대화 컨텍스트를 유지**합니다. 세션 상태 직렬화로 중복 데이터 처리 없이 연속성을 제공합니다.

## 상태

| 상태 | 설명 |
|------|------|
| `active` | 준비됨 |
| `idle` | 대기 중 |
| `running` | 실행 중 |
| `error` | 실패 |
| `paused` | 일시정지 |
| `terminated` | 비활성화 |
