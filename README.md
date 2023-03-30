# Can you set up a React project without any template or web bundler?

This is a common React.js interview questions.

**Git this project a star ⭐ to used it later!**

## Creation of a React project without any templating tool like CRA or VITE

First we have to know that we need a code transpiler, we can use Babel or a VITE transpiler which is a plugin we are going to use on this project.

## Prerequisites:
- Have a folder where you want to host your project
- An 'index.jsx' file on the root of the project. We need this since the plugin were are going to use only supports this types of files
- An 'index.html' file also in the root of the project with the body tag that contains: 
    ```
        <div id="app"></div>
        <script type="module" src="/index.jsx"></script>
    ```
## Steps:
1. Create the package.json file, execute: npm init -y
2. Change the package.json file:
   ```
    -- "main": "index.js",
    ++ "main": "index.jsx",
   ```
   And add the following into the 'scripts' property:
   ```
    "scripts": {
    ++  "dev": "vite",
        ...
    },
   ```   
3. Install the transpiler from Vite (the -E is to use the exact version): 
   ```
   npm install @vitejs/plugin-react -E
   ```
4. Install the following libraries:
   1. 'react' that provides the React.js api
   2. 'react-dom' that provides the bidings with the browser, this is the one that will trasnlate the synthetic events for example.
   ```
   npm install react react-dom -E
   ```
5. Create the vite file config in the root of the project with the name 'vite.config.js'. And include the content as the content is present on the file on this project:
   ```
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    export default defineConfig({
        plugins: [react()],
    });
   ```
6. Start the project by executing
   ```
   npm run dev
   ```
