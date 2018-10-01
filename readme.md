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
│  ├─ /Styles
│  └─ index.html (base html)
│
├─ .babelrc (babel preset config file)
├─ .gitignore 
├─ package.json  
├─ ReadMe.md  
└─ webpack.config.js (webpack config file)

```

Dev Contribute
--------
> If you want to contribute through additional development in the current version, you can proceed with development through the following command and reflect the changes to the bundle.js file. The following commands are used in experimental development.

> 현재 버전에서 추가적인 개발을 통해 기여를 원할 경우 다음의 명령어를 통해 개발을 진행하고 변경된 내용을 bundle.js 한 파일에 반영시킬 수 있습니다. 실험적인 개발 과정에서는 다음의 명령어를 사용합니다.

~~~ 
npm run dev
~~~

> If the developed contents are satisfactory, you can reflect the whole development contents to the bundle.js file through the webpack module through the following command. The location of the bundle.js file is ./public/JS.
 
> 개발된 내용이 만족스러운 경우, 다음의 명령어를 통해 전체 개발내용을 webpack 모듈을 통해  bundle.js로 한 파일에 반영할 수 있습니다. bundle.js 파일의 위치는 ./public/JS 입니다.

~~~
npm run bundle
~~~

# ScreenShots

## Index 

![IndexD](https://github.com/OSS-MinusZ-Smoky/FrontEnd/blob/master/screenshots/index.PNG?raw=true)

## Index(Tablet) 

![IndexT](https://github.com/OSS-MinusZ-Smoky/FrontEnd/blob/master/screenshots/index_tablet.PNG?raw=true)

## Index(Mobile) 

![IndexM](https://github.com/OSS-MinusZ-Smoky/FrontEnd/blob/master/screenshots/index_mobile.PNG?raw=true)

## Search(Desktop)

![SearchD](https://github.com/OSS-MinusZ-Smoky/FrontEnd/blob/master/screenshots/search_desktop.PNG?raw=true)

## Search(Tablet)

![SearchDT](https://github.com/OSS-MinusZ-Smoky/FrontEnd/blob/master/screenshots/search_tablet.PNG?raw=true)

## Search(Tablet2)

![SearchDT2](https://github.com/OSS-MinusZ-Smoky/FrontEnd/blob/master/screenshots/search_tablet2.PNG?raw=true)


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

Smoky. Front-SPA V2.0.1 - Alpha
===============================

Change History
--------------

>1.기존 국가검색 -> 메인페이지 이용의 흐름에서 메인 페이지를 더이상 이용하지 않고 처음 인덱스 페이지에서 기능을 전부 이용하도록 변경하였습니다.
기능의 규모도 전세계 -> 한국의 도시로 좁혔습니다. 국내 도시 이름을 검색할 경우 도시내에 존재하는 장치들의 시각화 데이터가 웹 페이지에 표시될 것입니다.
시각화 데이터를 클릭하면 장치가 인식하는 데이터를 실시간 드로잉되는 차트로 그 변화를 살펴 볼 수 있습니다.

>2.실제 아두이노 장치로 테스트를 해보았습니다. 흡연의 경우 MQ-7센서를 통해 실제 흡연을 해보면서 테스트 해본결과 어느정도 설치된 장비에서 떨어진 거리에서 누군가 흡연을 한다라고 인식되는 임계값은 센서의 인식값 기준 '380'의 값으로 설정하였습니다. 시각화된 각각의 오브젝트들은 주기적으로 서버와 통신하고 통신결과로 전해받은 인식데이터가 임계값을 초과할 경우
자신의 색상을 붉은색으로 변경하여 이용하는 사용자들이 해당 장치가 설치된 주변 지역에서 누군가 흡연행위를 하고 있음을 확인 할 수 있습니다.

>3.또 동적차트 모듈을 도입하여 관심있는 장치를 클릭하면 기존 웹페이지에서 구글맵으로 렌더링 되는 부분이 상태 변경을 통해 차트로 렌더링 됩니다.


페이지 이용법
-----------

>1. 웹 앱바 상단 우측 'Search...' 박스를 클릭하여 도시 정보를 내려받습니다. 입력 예 (안산 , 서울)
>2. 나타난 카드 컴포넌트의 변화를 살펴볼 수 있으며 카드 컴포넌트를 클릭하면 차트를 통해 데이터 변동을 확인할 수 있습니다.

License
-------

Module Licenses

MIT : [ babel , webpack , react , node-sass , express ,nodejs ,typeface-roboto , google-maps-react ]

해당 리포지토리는 MIT 라이선스를 적용하였습니다.