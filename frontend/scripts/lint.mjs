import { access, readFile } from "node:fs/promises";

for (const file of ["public/index.html", "public/styles.css", "public/robots.txt", "public/sitemap.xml", "vercel.json"]) {
  await access(file);
}

const html = await readFile("public/index.html", "utf8");
const css = await readFile("public/styles.css", "utf8");
const robots = await readFile("public/robots.txt", "utf8");
const sitemap = await readFile("public/sitemap.xml", "utf8");

const links = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
const hasRepoLink = links.some((link) => {
  const url = new URL(link, "https://agentic-ai.moretes.com");
  return url.protocol === "https:" && url.hostname === "github.com" && url.pathname === "/fernandofatech/aws-agentic-ai-reference-architecture";
});

const required = [
  [html.includes("<main"), "index.html must include a main landmark"],
  [html.includes("AWS Agentic AI Reference Architecture"), "index.html must include the project title"],
  [html.includes("Português") && html.includes("English"), "index.html must include bilingual content"],
  [html.includes('rel="canonical" href="https://agentic-ai.moretes.com/"'), "index.html must include canonical domain"],
  [html.includes('property="og:title"'), "index.html must include Open Graph metadata"],
  [html.includes('name="twitter:card"'), "index.html must include Twitter card metadata"],
  [html.includes("https://www.linkedin.com/in/fernando-francisco-azevedo/"), "index.html must link to LinkedIn"],
  [html.includes("https://fernando.moretes.com"), "index.html must link to the main portfolio"],
  [hasRepoLink, "index.html must link to GitHub"],
  [robots.includes("Sitemap: https://agentic-ai.moretes.com/sitemap.xml"), "robots.txt must point to sitemap"],
  [sitemap.includes("https://agentic-ai.moretes.com/"), "sitemap.xml must include canonical domain"],
  [css.includes(":focus-visible"), "styles.css must include visible focus states"],
  [css.includes("@media"), "styles.css must include responsive rules"],
];

const failures = required.filter(([passed]) => !passed).map(([, message]) => message);

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("SEO static landing checks passed.");
