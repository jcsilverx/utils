import { defineConfig } from "tsup";

const dir = "dist/esm";

export default defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  outDir: dir,
  format: ["esm"],
  target: "esnext",
  dts: true,
  sourcemap: true,
  minify: true,
});
