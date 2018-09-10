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

    $ npm install
    ...(It will take a while)

    $ node app.js
    --> localhost:3000

~~~

Directory Structure
-------------------
```

{In Project Direcrtory}
│
├─ components  
│  ├─ component_1 
│  ├─ component_2
│  ├─ ... other components ...
│  └─ App.jsx (this jsx file is entry point of webpack.config.js)
│
├─ pulic  
│  ├─ /bundle (the target path of webpack output)
│  └─ index.html (SPA base html)
│
├─ .babelrc (babel preset config file)
├─ .gitignore 
├─ package.json  
├─ ReadMe.md  
└─ webpack.config.js (webpack config file)

```

Tutorial
--------

> Webpack development server uses HMR Plugin. If you introduce a new React component or modify existing code, the development server automatically compiles the modifications and refreshes the web browser.

Smoky. Front-SPA V2.0.0 - Alpha
===============================

Change History
--------------

>1.We discarded the react module 'react-router-dom' It was very hard to use (Browser history problem , Preserving state , etc... ). As an alternative to use this module. Our team decided to use Node.js backend module 'express' for page routing.
  
>2.We have set the main page to be available by selecting the country from the current index page. The main page is initialized, and the list of the local area in the country is received from the server and the data of the devices installed in the local area can be accessed and examined.

>3.The CSS work for the page is also in progress. We are currently working on the components of the index page and will be able to use our web services in any environment: desktop, laptop, tablet, or mobile.

