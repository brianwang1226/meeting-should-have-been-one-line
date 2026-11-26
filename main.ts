// The Meeting That Should Have Been One Line — make.fun one-liner entry.
//
// A meeting that burned 90 minutes on a single "Alignment" slide, and still
// ended with the same email the meeting was supposed to replace. Winner-study
// rules: specific numbers, escalation, and a short kicker that does not
// explain the joke. The kicker is the email itself — "per my last email" —
// the exact phrase the meeting existed to avoid, delivered after the fact.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "90 minutes, 14 people, one slide that said 'Alignment'. Nobody aligned. The email came after. It said 'per my last email'.";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
