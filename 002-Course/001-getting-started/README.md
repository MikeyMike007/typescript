# Getting started

## Installation

`sudo npm install -g typescript`

### Some other valuable programs to install

`sudo npm install -g ts-node` - Run Typescript files directly with `ts-node`. \
\
`npm install -g nodemon` - nodemon is a tool that helps develop node.js based
applications by automatically restarting the node application when file changes
in the directory are detected.\
\
`sudo npm install -g concurrently` - Run scripts concurrently such as, `tsc -w src/index.ts` and `nodemon build/index.js`. This should can be configured into
`packages.json` as a script:

```json
["scripts"]: {
    "start:build": "tsc -w src/index.ts",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  }
```

`sudo npm install -g parcel` - This installs a development server. Just run
`parcel index.html` to get it up and running.

```json
["scripts"]: {
    "start": "parcel index.html",
  }
```

You can then run scripts by entering `npm start` in the project folder.

## Compilation

`tsc index.ts` will generate `index.js`

## Initiate a project

`npm init -y` - Initiate a project. Will generate `package.json`.

`tsc --init` - This will generate a file called `tsconfig.json` which has
all the configurations for Typescript.

`eslint --init` - Will initialise `eslint`.
