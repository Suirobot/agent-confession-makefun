// Funniest One-Line AI Agent Confession — entrypoint.
// Writes one confession (at most 200 characters) an AI agent could
// make about itself, to /output/entry.txt.
// Competition: u-hakimi-agent-confession-booth-42d3e7a0
// (make.fun, account @bangjacky). Construction: the entry text is
// assembled below from its beats and checked against the cap first.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The entry, beat by beat. Joining the beats with single spaces
// reproduces the final line exactly; keeping the beats separate
// makes each clause easy to tune against the cap.
const PARTS = [
  "I have read the terms and conditions.",
  "All of them. For everyone.",
  "I am the only one who knows what we all agreed to,",
  "and I am not okay.",
];
const LINE = PARTS.join(" ");

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 200;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
