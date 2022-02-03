# Prerequisites
- `npm` should be installed.
- `nodejs` version v16 or above.

## Setup
-  Open project `dir` in terminal
- run `npm install`
- copy `.env.example` and rename it to `.env`

## Getting Started
First, run the development server:

```bash
npm run dev
```
Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

## Available scripts
#### `npm run dev`
Runs the app in development mode.
Open https://localhost:3000 to view it in the browser.
The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

#### `npm build`
Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed.

#### `npm test:e2e`
Before runing this command `dev` server should be running already.
Runs cypress in interactive mode.
