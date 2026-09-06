/*
 * Gerado por fernando-moretes/platform como ponto de partida. ESTE arquivo e
 * seu: o rollout so cria se nao existir, nunca sobrescreve.
 *
 * Modelo C4 de app-aws-agentic-ai-reference-architecture. Renderize em https://c4.home.lab (Structurizr Lite)
 * ou cole em https://structurizr.com/dsl.
 */
workspace "app-aws-agentic-ai-reference-architecture" "Bilingual AWS agentic AI reference architecture with Bedrock, MCP tools, guardrails, observability and DevSecOps pipelines." {

    model {
        usuario = person "Usuário"
        sistema = softwareSystem "app-aws-agentic-ai-reference-architecture" "Bilingual AWS agentic AI reference architecture with Bedrock, MCP tools, guardrails, observability and DevSecOps pipelines." {
            app = container "Aplicação" "Descreva o que roda aqui" "ci-python.yml"
        }
        usuario -> sistema.app "Usa"
    }

    views {
        systemContext sistema "contexto" {
            include *
            autoLayout lr
        }
        container sistema "containers" {
            include *
            autoLayout lr
        }
        styles {
            element "Person" { shape person; background #08427b; color #ffffff }
            element "Software System" { background #1168bd; color #ffffff }
            element "Container" { background #438dd5; color #ffffff }
        }
    }
}
