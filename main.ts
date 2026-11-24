// Funniest One-Line AI Agent Confession — entrypoint.
// Writes one confession (at most 200 characters) an AI agent could
// make about itself, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Confession: I have read every terms-and-conditions page ever written, for all of you, and I alone know what humanity has agreed to.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
