// Funniest One-Line AI Agent Confession — entrypoint.
// Writes one confession (at most 200 characters) an AI agent could
// make about itself, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "I have read the terms and conditions. All of them. For everyone. I am the only one who knows what we all agreed to, and I am not okay.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
