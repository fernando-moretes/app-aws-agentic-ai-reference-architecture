from agentic_ai_architecture import DEFAULT_COMPONENTS, coverage_score, missing_dimensions, generate_review

def test_coverage_score_is_calculated_from_resilience_dimensions():
    assert coverage_score(DEFAULT_COMPONENTS) == 71

def test_missing_dimensions_identifies_architecture_gaps():
    assert missing_dimensions(DEFAULT_COMPONENTS) == ["deployment-runtime", "knowledge-base"]

def test_generate_review_includes_guardrails_and_mcp_gateway():
    review = generate_review(DEFAULT_COMPONENTS)
    assert "Bedrock Guardrails" in review
    assert "MCP Tool Gateway" in review
    assert "Coverage score: 71%" in review
