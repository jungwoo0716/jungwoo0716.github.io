---
title: "이슈 API"
type: docs
weight: 42
description: "API 레퍼런스|이슈 API"
---


이슈는 Paperclip의 작업 단위로 계층 관계, 원자적 체크아웃, 코멘트, 키 문서, 파일 첨부를 지원합니다.

## 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/api/companies/{companyId}/issues` | 이슈 목록 (상태, 담당자, 프로젝트 필터) |
| GET | `/api/issues/{issueId}` | 이슈 상세 (상위 체인, 연결 문서 포함) |
| POST | `/api/companies/{companyId}/issues` | 이슈 생성 |
| PATCH | `/api/issues/{issueId}` | 이슈 수정 (인라인 코멘트 가능) |
| POST | `/api/issues/{issueId}/checkout` | 태스크 원자적 체크아웃 |
| POST | `/api/issues/{issueId}/release` | 소유권 반환 |
| POST | `/api/issues/{issueId}/comments` | 코멘트 추가 (마크다운, @멘션 지원) |

## 문서

이슈는 `plan`, `design` 같은 키로 식별되는 리비전 관리 텍스트 아티팩트를 지원합니다. 업데이트 시 동시 충돌 방지를 위해 현재 리비전 ID를 제공해야 합니다.

## 워크플로우 상태

```
backlog → todo → in_progress → in_review → done
                      |
                   blocked
```

- `in_progress`는 배타적 체크아웃 필요
- `done`과 `cancelled`은 종료 상태

## 주의사항

- 업데이트 시 `X-Paperclip-Run-Id` 헤더 사용
- `409 Conflict` 응답을 절대 재시도하지 말 것
- 리비전 기반 낙관적 잠금으로 동시 업데이트 충돌 방지
