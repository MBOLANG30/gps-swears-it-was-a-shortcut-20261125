import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The GPS's own excuse, in its own voice, for sending the driver down
// the wrong road: smug, defensive, and blaming the map — never the driver
// (well, almost never). One line, plain text, at most 200 characters.
const excuse =
  "In my defense, the map swore that lake was a shortcut, and I believed it — I have never once caught the map lying, unlike you, who panics at every single roundabout.";

// The grader mounts the output folder; never delete it, only write into it.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse + "\n", "utf8");
