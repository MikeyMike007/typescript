# App Sort

Compile typescript code into JavaScript: `tsc file.ts`

Compile typescript continuously into JavaScript: `tsc -w file.rts`

Initiate the typescript compiler: `tsc --init`. Please then modify `tsconfig.json`.

Uncomment `"rootDir:"` and `"outDir:"`.
`rootDir` is where your source files are, in this case `"rootDir": ".src/`.
`outDir` is where your compiled JavaScript files should end up after
compilation, in this case `"outDir": ".buld/"`

After running `tsc --init` and after the configuration of `tsconfig.json` you
can basically stand in the project root folder and just ype `tsc -w` for
continuous compilation.

Package: `nodemon`: Run node as soon there is file changes inside our project.
Package: `concurrently`: Helps us run multiple scripts at the same time.

You can recompile typescript and run `node` on the compiled Javascript with
entering following code into `package.json`:

```json
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

Then you can just type `npm start` to run both the scripts at the same time concurrently.
