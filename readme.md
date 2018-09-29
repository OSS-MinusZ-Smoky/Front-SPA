Smoky. Front-SPA V1.0.0 - Alpha
===============================
Description
-----------

>~~This repository is the space for the monitoring system we are developing. The main library used in the project is the React view framework and introduces webpack , babel module for development efficiency and transpile.~~

>This repository is a monitoring system that can visualize the data of the devices installed in the public station and use the information. More specifically, the communicable Arduino device is equipped with an MQ-7 sensor for recognition of smoking. The Arduino unit installed on the station transmits continuously recognized data to the remote server. Our web service can receive data from the server and use the data that the device knows.
  
>You need to install and configure several modules for initial development, but NPM Package Manager will automatically configure it using the recorded installation history, so if you want to participate in this project newly, you can start the project only two commands on the command line.

>이 저장소는 공공 스테이션에 설치된 장치들의 데이터를 시각화하여 정보를 이용가능한 모니터링 시스템 입니다. 자세히 설명하자면 통신이 가능한 아두이노 장치는 MQ-7센서를 장비하여 흡연에 대한 인식이 가능합니다. 스테이션에 설치된 아두이노 장치는 원격지 서버쪽으로 지속적으로 인식된 데이터를 전송합니다. 저희 웹 서비스는 그 서버로부터 데이터를 받아와 장치가 인식하고 있는 데이터를 이용할 수 있습니다. 

>NPM 패키지 모듈은 저희 프로젝트에 필요한 모듈들을 자동적으로 파악하여 설치할 것입니다. 저희의 프로젝트에 바로 실행해보길 원하신다면 아래의 두 명령어 만으로 프로젝트 구동이 가능합니다.


Installation
------------
~~~

   ./{In Project Directory}     ./{프로젝트 root 경로에서}  

    $ npm install               $ npm install
    ...(It will take a while)   ...(조금 걸릴 것입니다.)

    $ node app.js               $ node app.js
    --> localhost:3000          --> localhost:3000

~~~

Directory Structure
-------------------
```

{In Project Direcrtory}
│
├─ components  
│  ├─ page_1
│  ├─ paricles
|  ├─ SharedStyles
│  └─ App.jsx (this jsx file is entry point of webpack.config.js)
│
├─ pulic  
│  ├─ /bundle (the target path of webpack output)
│  ├─ /images
│  ├─ /JS
│  ├─ /Styles
│  ├─ main.html
│  └─ index.html (base html)
│
│
├─ .babelrc (babel preset config file)
├─ .gitignore 
├─ package.json  
├─ ReadMe.md  
└─ webpack.config.js (webpack config file)

```

~~Tutorial~~ Dev Contribute
--------
> In the current version, the react-router-dom module is no longer used, making full SPA operation difficult. The index page was implemented as react, but the next main page was purely developed by Vanilla JS. Therefore, if you want to develop an index page to reflect the changes, enter the following command and refresh the browser.


> 현재 버전에서 react-router-dom 모듈을 더이상 사용하지 않기 때문에 완전한 SPA 작동이 어렵게 되었습니다. index 페이지는 react로 구현이 되었으나 다음의 main 페이지는 Vanilla JS로 순수하게 개발 하였습니다. 그러므로 인덱스 페이지를 개발하여 변동 사항을 반영해보고자 할 경우 다음의 명령어를 입력하고 브라우저를 리프레쉬 합니다.

~~~ 
npm run bundle 
~~~

> If you want to develop a main page and make changes, simply refresh the page.
 
> 메인 페이지를 개발하여 변동 사항을 해보고자 할 경우에는 단순히 페이지만 리프레시 하면 됩니다.


# ScreenShots

## Index 

![Index](https://github.com/OSS-MinusZ-Smoky/Front-SPA/blob/master/screenshots/index.PNG?raw=true)

## Main

![Main](https://github.com/OSS-MinusZ-Smoky/Front-SPA/blob/master/screenshots/main.PNG?raw=true)

Smoky. Front-SPA V2.0.0 - Alpha
===============================

Change History
--------------

>1.We discarded the react module 'react-router-dom' It was very hard to use (Browser history problem , Preserving state , etc... ). As an alternative to use this module. Our team decided to use Node.js backend module 'express' for page routing.
  
>2.We have set the main page to be available by selecting the country from the current index page. The main page is initialized, and the list of the local area in the country is received from the server and the data of the devices installed in the local area can be accessed and examined.

>3.The CSS work for the page is also in progress. We are currently working on the components of the index page and will be able to use our web services in any environment: desktop, laptop, tablet, or mobile.

>1.개발중에 리액트 모듈인 'react-router-dom'을 사용하지 않게 되었습니다. 브라우저단에서의 히스토리 기록(뒤로가기 , 앞으로가기) 와 히스토리 변경시에 생겨나는 데이터 상태 보존을 컨트롤 하는것이 쉽지 않았습니다. 그 대안으로 , 서비스에 Node.js의 express 모듈을 사용하기로 결정하였습니다. 이를 통해 페이지 라우팅과 브라우저 히스토리에 대응 , 유저 데이터 보존이 가능해졌습니다.

>2.저희는 메인페이지의 동작을 첫 인덱스 페이지에서 선택한 국가에 따라 동적으로 초기화 되도록 구현하였습니다. 메인페이지에 입장하게 되면, 인덱스 페이지에서 선택한 국가를 '키'로 활용하여 국가의 행정 구역과 그곳에 설치된 장치들의 데이터를 가져옵니다.

>3.CSS 작업또한 진행중에 있습니다. 다양한 디바이스 (Deskotp , laptop , tablet , mobile)를 통해 저희 웹 서비스에 접속하여도 이용가능합니다.

