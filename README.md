# [📦 box-extractor](https://github.com/astahmer/box-extractor/)

**Static code extraction. Zero-runtime CSS-in-TS `<Box />`**

Optimize your code and elevate your developer experience with compile-time optimizations from static analysis.

💎 &nbsp; Enhanced DX close to [Chakra-UI's `<Box />`](https://chakra-ui.com/docs/styled-system/style-props#pseudo) without [the](https://github.com/chakra-ui/chakra-ui/issues/4003) [runtime](https://github.com/chakra-ui/chakra-ui/issues/859) [cost](https://twitter.com/jaredpalmer/status/1271482711132254210?lang=en)

✂️ &nbsp; Smaller CSS/JS output (up to 99%) with compile-time purge just like Tailwind CSS

🎁 &nbsp; [Built-in](#box-extractorvanilla-theme---chakratailwind-sprinkle) preconfigured theme [sprinkles](https://vanilla-extract.style/documentation/packages/sprinkles/) with most of [Chakra-UI default theme](https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src/foundations)'

🎯 &nbsp; Over 180k props/values/conditions combinations, only 1 used in your app, only 1 will remain

⚡ &nbsp; [vite](#vanilla-extractsprinkles-adapter) & esbuild plugins available

🔄 &nbsp; [Reversed conditions props](#reversed-conditions-props) allowing you to use multiple sprinkle properties on the same condition

🔍 &nbsp; Smart analyzer built-in for near instant drop-in benefits

💾 &nbsp; Low-level AST output with access to `ts-morph` `Node` objects for fine-grained control

🔌 &nbsp; Pluggable integration with exported primitives & hooks available at each step

---

Example of a build run (removed some noise / added space) :

```sh
pnpm i
pnpm build

Running vite build WITH ✅  @box-extractor/vanilla-extract optimizations...

vite v3.2.5 building for production...
box-ex:ve:result {
  before: 33,
  after: 1,
  fileScope: 'src/components/minimalSprinkles.css.ts$$$box-extractor-ve-demo',
  filePath: '/Users/astahmer/dev/alex/box-extractor-ve-demo/src/components/minimalSprinkles.css.ts'
}
box-ex:ve:result {
  before: 33,
  after: 1,
  fileScope: 'node_modules/.pnpm/@box-extractor+vanilla-theme@0.2.7_225hxfj6s7njsjatjyrstn3pbi/node_modules/@box-extractor/vanilla-theme/src/css/external.css.ts$$$box-extractor-ve-demo',
  filePath: '/Users/astahmer/dev/alex/box-extractor-ve-demo/node_modules/.pnpm/@box-extractor+vanilla-theme@0.2.7_225hxfj6s7njsjatjyrstn3pbi/node_modules/@box-extractor/vanilla-theme/src/css/external.css.ts'
}
box-ex:ve:result {
  before: 187652,
  after: 16,
  fileScope: 'node_modules/.pnpm/@box-extractor+vanilla-theme@0.2.7_225hxfj6s7njsjatjyrstn3pbi/node_modules/@box-extractor/vanilla-theme/src/css/properties.css.ts$$$box-extractor-ve-demo',
  filePath: '/Users/astahmer/dev/alex/box-extractor-ve-demo/node_modules/.pnpm/@box-extractor+vanilla-theme@0.2.7_225hxfj6s7njsjatjyrstn3pbi/node_modules/@box-extractor/vanilla-theme/src/css/sprinkles.css.ts'
}

✓ 96 modules transformed.
dist/assets/favicon.17e50649.svg   1.49 KiB
dist/index.html                    0.46 KiB
dist/assets/index.9c229ed4.css     1.00 KiB / gzip: 0.41 KiB
dist/assets/index.28900c32.js      215.33 KiB / gzip: 70.80 KiB
build execution time was 4 s.

-----------------------

Running vite build WITHOUT ❌ @box-extractor/vanilla-extract optimizations...

vite v3.2.5 building for production...
✓ 96 modules transformed.
dist/assets/favicon.17e50649.svg   1.49 KiB
dist/index.html                    0.46 KiB
dist/assets/index.3b74aeec.css     15887.85 KiB / gzip: 1916.80 KiB
dist/assets/index.dac2043e.js      4515.63 KiB / gzip: 770.86 KiB

(!) Some chunks are larger than 500 KiB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/guide/en/#outputmanualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
build execution time was 12 s.

-----------------------

box-extractor-ve-demo main*​​ 18s
```
