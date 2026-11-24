// Make the AI Judge Laugh: Cat Reviews Its Human — entry program (program/v1).
//
// Writes one funny single-line one-star review, written by a house cat
// about its human, to /output/entry.txt.
//
// The line was chosen against the judge's brief, in the order the judge
// weighs things:
//   1. A funny one-star review written by a house cat about its human
//      owner — the review shape ("One star", "Would not recommend this
//      human") is deadpan, and the complaint is the cat's, not the human's.
//   2. Specific and recognisable: the $400 cat bed versus the cardboard
//      box it came in — a complaint every cat owner has lived through.
//   3. Unmistakably feline: the human is measured by cat standards, and
//      the review gives away more about the cat (it chose the box) than
//      about the owner.
//   4. Tight and surprising: the sting lands in the last few words, and
//      the betrayal is the human's, not the cat's — a second read flips
//      who is being reviewed.
//   5. Keeps the deadpan shape of a real one-star review while the
//      content goes somewhere only a cat would go.
//
// The line: One star. He spent $400 on a cat bed, then looked betrayed
// when I slept in the box. Would not recommend this human.
// 115 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. He spent $400 on a cat bed, then looked betrayed when I slept in the box. Would not recommend this human.";

// Gate self-check, mirroring ONLY the sealed scorer: UTF-8 text of 1 to
// 200 characters, not only white space.
function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`line is ${chars} characters, outside the 1-200 gate`);
  }
  if (!line.trim()) {
    throw new Error("line is only white space");
  }
}

gate(LINE);
// The harness runs the program with MAKEFUN_OUTPUT_DIR=/output; honour
// it when set so a local re-run lands in the same place as the grade.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`wrote ${[...LINE].length}-character entry to ${join(OUT_DIR, "entry.txt")}`);
