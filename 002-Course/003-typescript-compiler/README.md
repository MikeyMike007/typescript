# TS Compiler

Run compiler with `tsc file.ts`

Run compiler in "watch mode" with `tsc -w file.ts`. In watch mode, compilation
is done continuously.

You can compile several files with first creating a ts project with `tsc --init`.\
This will then generate a `tsconfig.json` file. Now you can run `tsc`
in the project folder and it will compile all `ts` files it can find.
You can also run `tsc -w` and it will compile all files in watch mode.

You can add following to `tsconfig.json` if you want to exclude or include
something special.

```json
"exclude": [
  "analytics.ts",
  "**/*.dev.ts", // ALL files in all folders that ends *.dev.ts
],

"include": [
  "app.ts"
]
```

```json
"target": "", // Sets Javascript version
"lib": "", // Which libraries to include such as dom, es6, dom.iterable,
scripthost
"sourceMap": true, // With this option you can debug TS in Chrome
"outDir": "./build", // Compiles JS files into folder build
"rootDir": "./src", // Defines where your source ts files are
"removeComments": true, // Removes comments in the compiled JS files
"noEmit": true, // Do not generate any JS files
"notEmitOnError": true, // Does not compile code if error
"strict": true, // All strict assumtpions is set to true
```

Some good vscode extension: Eslint, Prettier, Debug for Chrome.
