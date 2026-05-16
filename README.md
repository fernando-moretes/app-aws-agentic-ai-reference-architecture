# AWS Agentic AI Reference Architecture

Production-grade reference architecture for **resilient agentic AI workloads on AWS**. The repository is designed as a portfolio-quality blueprint for Solution Architects building enterprise AI platforms with Amazon Bedrock, MCP tools, guardrails, identity, observability and Well-Architected practices.

## Live portfolio / Portfolio ao vivo

- **Production:** [AWS Agentic AI Reference Architecture](https://agentic-ai.moretes.com)
- **Documentation:** [Project docs](docs/architecture.md)
- **GitHub:** [fernandofatech/aws-agentic-ai-reference-architecture](https://github.com/fernandofatech/aws-agentic-ai-reference-architecture)
- **Author:** [Fernando Francisco Azevedo](https://fernando.moretes.com) · [LinkedIn](https://www.linkedin.com/in/fernando-francisco-azevedo/) · [GitHub](https://github.com/fernandofatech)

This public repository is part of a bilingual portfolio focused on solution architecture, AWS, AI, MCP/tooling, DevSecOps, and production-ready engineering practices.

Este repositório público faz parte de um portfólio bilíngue focado em arquitetura de soluções, AWS, IA, MCP/tools, DevSecOps e boas práticas de engenharia para produção.

## Why this project exists

Most AI demos stop at a chat UI. Enterprise architects need more: resilience, security, cost control, operational visibility, governance and integration with real systems. This project documents and validates an AWS architecture for agentic AI that can survive production constraints.

## Reference stack

- Amazon Bedrock for foundation models and managed AI capabilities.
- Amazon Bedrock Guardrails for responsible AI policy enforcement.
- MCP Tool Gateway for controlled tool access.
- AWS Lambda / ECS / Bedrock AgentCore-style runtime patterns for agents.
- Amazon OpenSearch Serverless or Bedrock Knowledge Bases for RAG.
- AWS IAM / identity broker for inbound and outbound authorization.
- Amazon CloudWatch, X-Ray and OpenTelemetry for traces, metrics and logs.
- EventBridge for asynchronous human-in-the-loop and audit events.

## Architecture diagram

See [`docs/diagrams/architecture.mmd`](docs/diagrams/architecture.mmd).

## Key architecture qualities

- **Security-first:** tool allow-listing, identity boundary, guardrails and audit events.
- **Reliable:** bounded retries, circuit breakers, fallback model strategy and human escalation.
- **Observable:** reasoning traces, tool invocation telemetry and quality evaluation signals.
- **Cost-aware:** token budgets, model routing and caching strategy.
- **Enterprise-ready:** ADRs, threat model, Well-Architected review and CI checks.

## Run locally

```bash
python -m pip install -e . pytest
pytest -q
```

## Portfolio positioning

This repository demonstrates Fernando Azevedo's focus on AWS, AI Engineering, DevSecOps, Well-Architected design and enterprise solution architecture for regulated environments.

## Frontend

```bash
cd frontend
npm ci
npm run lint
npm run build
```

The frontend is a dependency-light static portfolio surface ready for Vercel deployment.

## Operations

See [OPERATIONS.md](OPERATIONS.md) for GitFlow, Vercel secrets and security pipeline details.
