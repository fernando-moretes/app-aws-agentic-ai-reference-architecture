import { access, readFile } from "node:fs/promises";

for (const file of ["public/index.html", "public/styles.css", "public/robots.txt", "public/sitemap.xml", "vercel.json"]) {
  await access(file);
}

const html = await readFile("public/index.html", "utf8");
const css = await readFile("public/styles.css", "utf8");
const robots = await readFile("public/robots.txt", "utf8");
const sitemap = await readFile("public/sitemap.xml", "utf8");

const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => new URL(match[1], "https://agentic-ai.moretes.com/"));
const metas = [...html.matchAll(/<meta\s+([^>]+)>/g)].map((match) => match[1]);
const links = [...html.matchAll(/<link\s+([^>]+)>/g)].map((match) => match[1]);

const hasRepoLink = hrefs.some((url) => url.protocol === "https:" && url.hostname === "github.com" && url.pathname === "/fernandofatech/aws-agentic-ai-reference-architecture");
const hasLinkedInLink = hrefs.some((url) => url.protocol === "https:" && url.hostname === "www.linkedin.com" && url.pathname === "/in/fernando-francisco-azevedo/");
const hasPortfolioLink = hrefs.some((url) => url.protocol === "https:" && url.hostname === "fernando.moretes.com");
const hasCanonical = links.some((attrs) => attrs.includes('rel="canonical"') && attrs.includes('href="https://agentic-ai.moretes.com/"'));
const hasOpenGraph = metas.some((attrs) => attrs.includes('property="og:title"'));
const hasTwitterCard = metas.some((attrs) => attrs.includes('name="twitter:card"'));
const robotLines = new Set(robots.split(/\r?\n/).map((line) => line.trim()).filter(Boolean));
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));

const required = [
  [html.includes("<main"), "index.html must include a main landmark"],
  [html.includes("AWS Agentic AI Reference Architecture"), "index.html must include the project title"],
  [html.includes("Português") && html.includes("English"), "index.html must include bilingual content"],
  [hasCanonical, "index.html must include canonical domain"],
  [hasOpenGraph, "index.html must include Open Graph metadata"],
  [hasTwitterCard, "index.html must include Twitter card metadata"],
  [hasLinkedInLink, "index.html must link to LinkedIn"],
  [hasPortfolioLink, "index.html must link to the main portfolio"],
  [hasRepoLink, "index.html must link to GitHub"],
  [robotLines.has("Sitemap: https://agentic-ai.moretes.com/sitemap.xml"), "robots.txt must point to sitemap"],
  [sitemapLocs.some((url) => url.href === "https://agentic-ai.moretes.com/"), "sitemap.xml must include canonical domain"],
  [css.includes(":focus-visible"), "styles.css must include visible focus states"],
  [css.includes("@media"), "styles.css must include responsive rules"],
];

const failures = required.filter(([passed]) => !passed).map(([, message]) => message);

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("SEO static landing checks passed.");
