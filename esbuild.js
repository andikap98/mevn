const {build} = require("esbuild");

build({
    entryPoints : ["./src/index.ts"],
    ninify: true,
    keepNames: true,
    bundle: true,
    sourcemap: "node",
    outfile: ".build/index.js"
}).catch(() => {
    process.exit(1);
});