# Map project

Start a new project: `npm init -y`.

Already have a `package.json` file?. Install dependencies with `npm install`.

Initiate eslint in project directory: `eslint --init`

Parcel is a program to compile and run typescript code in the browser. You can
install it with `npm install -g parcel-bundler`. If you want to run it, just
type `parcel index.html`.

You can import any JavaScript library into Typescript. Some JavaScript modules
don't have a type definition file so if this is the case, you will need to
install that manually. As an example in this project, faker doesn't have this so
you will need to install this manually with `npm install @types/faker` in your
project directory.
