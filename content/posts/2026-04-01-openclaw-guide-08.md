---
title: "모델 프로바이더"
date: 2026-04-01T11:07:00+09:00
description: "OpenClaw 한국어 가이드: 모델 프로바이더"
series: ["OpenClaw 가이드"]
tags: ["OpenClaw", "AI", "에이전트", "개념"]
weight: 8
ShowToc: true
TocOpen: true
---

> 이 문서는 [OpenClaw 공식 문서](https://docs.openclaw.ai/)를 한국어로 번역/정리한 것입니다.
> **시리즈: OpenClaw 가이드**


## 개요

OpenClaw는 **35개 이상의 AI 모델 프로바이더**를 지원한다. 모델은 `provider/model` 형식으로 지정한다.

```
anthropic/claude-opus-4-6
openai/gpt-4o
google/gemini-2.5-pro
```

---

## 내장 프로바이더

| 프로바이더 | 식별자 | 주요 모델 |
|-----------|--------|----------|
| **Anthropic** | `anthropic` | `claude-opus-4-6`, `claude-sonnet-4-6` |
| **OpenAI** | `openai` | `gpt-4o`, `gpt-4-turbo`, `o1` |
| **Google Gemini** | `google` | `gemini-2.5-pro`, `gemini-2.5-flash` |
| **OpenCode** | `opencode` | 다양한 오픈소스 모델 |
| **OpenRouter** | `openrouter` | 여러 프로바이더 통합 라우터 |
| **Mistral** | `mistral` | `mistral-large`, `mistral-medium` |
| **Groq** | `groq` | `llama-3`, `mixtral` (초고속 추론) |

---

## 커스텀 프로바이더

자체 호스팅 모델을 사용하려면 `models.providers` 설정으로 커스텀 프로바이더를 등록한다.

### 지원 플랫폼

- **Ollama** - 로컬 LLM 실행
- **vLLM** - 고성능 추론 서버
- **SGLang** - 구조화된 생성 지원

### 설정 예시

```json5
{
  "models": {
    "providers": {
      "my-ollama": {
        "type": "openai-compatible",
        "baseUrl": "http://localhost:11434/v1",
        "models": ["llama3:8b", "codellama:13b"]
      },
      "my-vllm": {
        "type": "openai-compatible",
        "baseUrl": "http://gpu-server:8000/v1",
        "apiKey": "${VLLM_API_KEY}",
        "models": ["meta-llama/Llama-3-70b"]
      }
    }
  }
}
```

---

## API 키 설정

### 환경 변수

각 프로바이더의 API 키는 환경 변수로 설정한다.

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
export OPENAI_API_KEY="sk-..."
export GOOGLE_API_KEY="AIza..."
export MISTRAL_API_KEY="..."
export GROQ_API_KEY="gsk_..."
```

### API 키 로테이션

여러 API 키를 환경 변수에 등록하여 로테이션할 수 있다. 하나의 키가 rate limit에 도달하면 자동으로 다음 키로 전환된다.

---

## CLI 명령어

### 온보딩 (최초 설정)

```bash
openclaw onboard
```

대화형 마법사를 통해 프로바이더 선택, API 키 입력, 기본 모델 설정을 진행한다.

### 모델 목록 조회

```bash
openclaw models list
```

현재 설정된 모든 프로바이더와 사용 가능한 모델을 표시한다.

```
anthropic
  ├── claude-opus-4-6
  ├── claude-sonnet-4-6
  └── claude-haiku-3-5
openai
  ├── gpt-4o
  └── gpt-4-turbo
google
  ├── gemini-2.5-pro
  └── gemini-2.5-flash
```

### 기본 모델 변경

```bash
openclaw models set anthropic/claude-sonnet-4-6
```

에이전트의 기본 모델을 변경한다.

---

## 에이전트별 모델 설정

각 에이전트마다 다른 모델을 지정할 수 있다.

```json5
{
  "agents": {
    "default": {
      "model": "anthropic/claude-sonnet-4-6"
    },
    "code-assistant": {
      "model": "anthropic/claude-opus-4-6"
    },
    "quick-responder": {
      "model": "groq/llama-3-70b"
    }
  }
}
```

---

## 모델 선택 가이드

| 용도 | 권장 모델 | 이유 |
|------|----------|------|
| 범용 대화 | `anthropic/claude-sonnet-4-6` | 균형 잡힌 성능과 비용 |
| 복잡한 추론 | `anthropic/claude-opus-4-6` | 최고 수준의 추론 능력 |
| 빠른 응답 | `groq/llama-3-70b` | 초고속 추론 |
| 코드 생성 | `anthropic/claude-sonnet-4-6` | 뛰어난 코드 이해와 생성 |
| 비용 절약 | `google/gemini-2.5-flash` | 저렴하고 빠름 |
| 로컬 실행 | 커스텀 Ollama | 외부 API 없이 로컬 실행 |
