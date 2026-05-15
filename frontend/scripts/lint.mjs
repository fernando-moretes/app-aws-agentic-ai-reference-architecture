import { readFile } from "node:fs/promises";

const html = await readFile("public/index.html", "utf8");
const css = await readFile("public/styles.css", "utf8");

const required = [
  "AWS Agentic AI Reference Architecture",
  "Bedrock",
  "MCP Tool Gateway",
  "Guardrails",
  "Observability",
];

for (const text of required) {
  if (!html.includes(text)) {
    throw new Error(`Missing required content: ${text}`);
  }
}

const links = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
const hasRepoLink = links.some((link) => {
  const url = new URL(link, "https://portfolio.local");
  return (
    url.protocol === "https:" &&
    url.hostname === "github.com" &&
    url.pathname === "/fernandofatech/aws-agentic-ai-reference-architecture"
  );
});

if (!hasRepoLink) {
  throw new Error("Missing canonical GitHub repository link.");
}

if (!css.includes("@media") || !css.includes(":root")) {
  throw new Error("Stylesheet must include responsive and tokenized styling.");
}
