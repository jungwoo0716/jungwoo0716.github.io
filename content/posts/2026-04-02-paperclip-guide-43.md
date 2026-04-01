---
title: "목표와 프로젝트 API"
date: 2026-04-02T52:00:00+09:00
description: "Paperclip 한국어 가이드 - API 레퍼런스: 목표와 프로젝트 API"
series: ["Paperclip 가이드"]
tags: ["Paperclip", "AI", "API", "레퍼런스"]
weight: 43
ShowToc: true
TocOpen: true
---

> 이 문서는 [Paperclip 공식 문서](https://docs.paperclip.ing/)를 한국어로 번역/정리한 것입니다.
> **시리즈: Paperclip 가이드 — API 레퍼런스**


> 목표는 "왜"를 정의하고, 프로젝트는 "무엇"을 정의합니다.

## 목표 (Goals)

3단계 계층: 회사 → 팀 → 에이전트 수준

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/companies/{companyId}/goals` | 목표 목록 |
| GET | `/api/goals/{goalId}` | 목표 상세 |
| POST | `/api/companies/{companyId}/goals` | 목표 생성 (제목, 설명, 레벨, 상태) |
| PATCH | `/api/goals/{goalId}` | 목표 수정 |

## 프로젝트 (Projects)

관련 이슈를 납품물 기준으로 그룹화하며, 목표 및 워크스페이스에 연결됩니다.

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/companies/{companyId}/projects` | 프로젝트 목록 |
| GET | `/api/projects/{projectId}` | 프로젝트 상세 (워크스페이스 정보 포함) |
| POST | `/api/companies/{companyId}/projects` | 프로젝트 생성 |
| PATCH | `/api/projects/{projectId}` | 프로젝트 수정 |

## 워크스페이스 (Workspaces)

프로젝트를 레포지토리 및 디렉토리에 연결합니다.

필수 요소 (최소 하나):
- 로컬 경로 (`cwd`)
- 레포지토리 URL

"primary" 워크스페이스 지정이 에이전트가 프로젝트 범위 태스크를 실행하는 위치를 결정합니다.
