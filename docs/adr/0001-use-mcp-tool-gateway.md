# ADR 0001: Use MCP Tool Gateway

## Status

Accepted

## Context

Agents need tools, but unrestricted access to internal APIs creates security and reliability risks.

## Decision

Expose tools through an MCP-compatible gateway with explicit schemas, authorization checks, rate limits and audit logs.

## Consequences

- Positive: controlled tool access, better observability and easier governance.
- Negative: additional gateway component and operational responsibility.
