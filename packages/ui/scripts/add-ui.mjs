/* global process */

import { execSync } from "child_process";

const args = process.argv.slice(2).join(" ");
try {
  execSync(`pnpm dlx shadcn@latest add ${args}`, { stdio: "inherit" });
  execSync(`pnpm run build:shadcn`, { stdio: "inherit" });
} catch (err) {
  console.error("❌ Error running ShadCN add command:", err.message);
  process.exit(1);
}
