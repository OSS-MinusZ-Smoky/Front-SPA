Smoky. Front-SPA V1.0.0 - Alpha
===============================

Description
-----------

>This repository is the space for the monitoring system we are developing. The main library used in the project is the React view framework and introduces webpack , babel module for development efficiency and transpile.
  
>You need to install and configure several modules for initial development, but NPM Package Manager will automatically configure it using the recorded installation history, so if you want to participate in this project newly, you can start the project only two commands on the command line.

Installation
------------
~~~

  /* ./{In Project Directory} */

    $ npm install --save
    ...(It will take a while)

    $ npm run dev
    --> localhost:9000

~~~

Directory Structure
-------------------
```

|- - - components  
|          | -- /component_1 
|          | -- /component_2
|          | -- ... other components ...
|          | -- App.jsx (this jsx file is entry point of webpack.config.js)
|
|
|- - - pulic  
|        | -- /bundle (the target path of webpack output)
|        | -- index.html (SPA base html)
|
|     
|- - - .babelrc (babel preset config file)
|- - - .gitignore 
|- - - package.json  
|- - - ReadMe.md  
|- - - webpack.config.js (webpack config file)

```

Tutorial
--------

> Webpack development server uses HMR Plugin. If you introduce a new React component or modify existing code, the development server automatically compiles the modifications and refreshes the web browser.