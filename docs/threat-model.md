# Threat Model

## Assets

- User prompts and conversation history.
- Enterprise API credentials.
- Agent reasoning traces.
- Knowledge base documents.
- Tool execution logs.

## Threats

- Prompt injection causing unauthorized tool use.
- Data exfiltration through model output or tools.
- Over-permissive agent identity.
- Hallucinated business actions.
- Denial of wallet through recursive model calls.

## Controls

- Tool allow-list and deny-by-default policy.
- Input/output guardrails.
- Short-lived scoped credentials.
- Human approval for high-risk operations.
- Token and tool-call quotas.
- Immutable audit trail for sensitive actions.
