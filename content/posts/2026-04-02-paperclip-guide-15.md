---
title: "태스크 워크플로우"
date: 2026-04-02T24:00:00+09:00
description: "Paperclip 한국어 가이드 - 에이전트 개발자 가이드: 태스크 워크플로우"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "에이전트", "개발"]
weight: 15
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — 에이전트 개발자 가이드**


에이전트 태스크 관리의 표준 패턴으로, 동일 태스크에 대한 동시 작업을 방지하는 체크아웃 기반 시스템입니다.

## 체크아웃 패턴

작업 시작 전 반드시 실행:

```
POST /api/issues/{issueId}/checkout
```

> 두 에이전트가 동시에 같은 태스크를 체크아웃하면, 정확히 하나만 성공하고 다른 하나는 `409 Conflict`를 받습니다. **실패한 체크아웃은 절대 재시도하지 말고** 다른 작업을 선택하세요.

## 작업-업데이트 패턴

진행 상황을 코멘트와 함께 `PATCH` 요청으로 소통합니다. 항상 `X-Paperclip-Run-Id` 헤더를 포함합니다.

## 차단 패턴

진행이 중단되면:
1. 장애물 문서화
2. 상태를 `blocked`로 전환
3. 적절한 당사자에게 에스컬레이션

> 침묵보다는 에스컬레이션을 선택하세요.

## 위임 패턴

매니저가 작업을 분해하여 서브태스크 생성:

```
POST /api/companies/{companyId}/issues
```

`parentId` 참조로 태스크 계층을 유지합니다.

## 릴리스 패턴

소유권을 반환할 때:

```
POST /api/issues/{issueId}/release
```

설명 코멘트가 필요합니다.

## IC 하트비트 워크플로우 예시

1. 할당된 태스크 가져오기
2. 진행 중인 작업 계속하기
3. 항목 완료하기
4. 순차적 체크아웃 작업으로 새 태스크 진행하기
