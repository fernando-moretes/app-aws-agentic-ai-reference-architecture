from dataclasses import dataclass
from enum import Enum
from typing import Iterable

class Criticality(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

@dataclass(frozen=True)
class ArchitectureComponent:
    name: str
    dimension: str
    criticality: Criticality
    mitigations: tuple[str, ...]

RESILIENCE_DIMENSIONS = (
    "foundation-models", "agent-orchestration", "deployment-runtime",
    "knowledge-base", "agent-tools", "security-compliance", "evaluation-observability",
)

DEFAULT_COMPONENTS = (
    ArchitectureComponent("Amazon Bedrock", "foundation-models", Criticality.CRITICAL, ("model fallback", "cross-region inference", "quota monitoring")),
    ArchitectureComponent("Agent Orchestrator", "agent-orchestration", Criticality.CRITICAL, ("bounded retries", "deterministic workflow", "human escalation")),
    ArchitectureComponent("MCP Tool Gateway", "agent-tools", Criticality.HIGH, ("tool allow-list", "circuit breaker", "schema validation")),
    ArchitectureComponent("Bedrock Guardrails", "security-compliance", Criticality.CRITICAL, ("policy enforcement", "PII filters", "prompt injection checks")),
    ArchitectureComponent("OpenTelemetry Traces", "evaluation-observability", Criticality.HIGH, ("reasoning traces", "tool latency metrics", "quality evaluation")),
)

def coverage_score(components: Iterable[ArchitectureComponent]) -> int:
    dimensions = {c.dimension for c in components}
    return round(len(dimensions.intersection(RESILIENCE_DIMENSIONS)) / len(RESILIENCE_DIMENSIONS) * 100)

def missing_dimensions(components: Iterable[ArchitectureComponent]) -> list[str]:
    dimensions = {c.dimension for c in components}
    return [d for d in RESILIENCE_DIMENSIONS if d not in dimensions]

def generate_review(components: Iterable[ArchitectureComponent]) -> str:
    items = list(components)
    score = coverage_score(items)
    missing = missing_dimensions(items)
    lines = [f"# Agentic AI Resilience Review", "", f"Coverage score: {score}%", ""]
    for c in items:
        lines.append(f"- {c.name} [{c.dimension}/{c.criticality.value}]: " + "; ".join(c.mitigations))
    if missing:
        lines += ["", "## Missing dimensions"] + [f"- {m}" for m in missing]
    return "
".join(lines) + "
"
