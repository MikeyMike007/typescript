# Getting started

## Installation

`sudo npm install -g typescript`

Some other valuable programs to install:

`sudo npm install -g ts-node` - Run Typescript files directly with `ts-node`
`npm install -g nodemon` - nodemon is a tool that helps develop node.js based
applications by automatically restarting the node application when file changes
in the directory are detected.
`npm install -g concurrently` - Run scripts concurrently such as,

`tsc -w src/index.ts` and `nodemon build/index.js`. This should can be
configured into `packages.json` as a script:

```json
["scripts"]: {
    "start:build": "tsc -w src/index.ts",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  }
```

You can then run the script by entering `npm start` in the project folder.

## Compilation

`tsc index.ts`

## Initiate a project

`tsc --init`

This will then generate a file called `tsconfig.json` which has all the
configurations for Typescript.
