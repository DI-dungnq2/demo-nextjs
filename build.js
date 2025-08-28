const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["./scripts/worker.ts"],
  bundle: true,
  minify: true,
  platform: "browser",
  outfile: "public/worker.js",
}).catch(() => process.exit(1));