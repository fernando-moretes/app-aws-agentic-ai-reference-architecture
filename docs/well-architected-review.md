# AWS Well-Architected Review for Agentic AI

## Operational Excellence

- Use IaC for all cloud resources.
- Emit agent traces, tool-call metrics and evaluation events.
- Keep runbooks for model fallback, tool outage and guardrail incidents.

## Security

- Enforce inbound authentication for users.
- Use scoped outbound authorization for agent tools.
- Validate all tool arguments with schemas.
- Apply Bedrock Guardrails for safety policies.
- Store secrets in AWS Secrets Manager.

## Reliability

- Apply circuit breakers around external tools.
- Use bounded retries with exponential backoff.
- Isolate critical tools by account or runtime boundary.
- Use human-in-the-loop escalation for high-risk actions.

## Performance Efficiency

- Route requests to the smallest acceptable model.
- Use prompt caching for repeated system context.
- Track p50/p95/p99 latency for reasoning and tools.

## Cost Optimization

- Set token budgets per workflow.
- Record cost per business transaction.
- Use async execution for long-running tasks.

## Sustainability

- Prefer efficient model routing.
- Cache embeddings and prompt context.
- Remove unused evaluation datasets and traces according to retention policy.
