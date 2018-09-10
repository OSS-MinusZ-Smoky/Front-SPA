
class Card{

    constructor(ID){
        setInterval(()=>{
            let Domstance = document.getElementById(ID);
            if(Domstance.innerHTML == "0"){
                Domstance.innerHTML = "1"
            }
            else{
                Domstance.innerHTML = "0"
            }
        },1000)
    }

}

let ChartCanvas;
let GlobalChart;

window.onload = () => {

    GET_CONTRY()
    INIT_MAP();
    INIT_CHART();
    INIT_NAV();
    
}

function INIT_NAV() {

    let $LOGO = document.getElementById('LOGO');
    $LOGO.addEventListener('click',()=>{
        window.location.href = '../'
    })

}

function LIST_DISTRICTS(contry) {
    console.log(contry);
    let DISTRICT_REQUEST = new XMLHttpRequest();

    DISTRICT_REQUEST.onreadystatechange = () => {

        if ((DISTRICT_REQUEST.status == 200 || DISTRICT_REQUEST.status == 304) && DISTRICT_REQUEST.readyState == 4) {
            
            let Jres = JSON.parse(DISTRICT_REQUEST.responseText);
            let $DISTRICTS = document.getElementById('DISTRICT');
            
            for (const key in Jres) {

                let $DIV = document.createElement('div');
                $DIV.setAttribute('class','District-Partition');

                let $H3 = document.createElement('h3');
                $H3.setAttribute('class','District-Partition__Key');
                $H3.textContent = key;
                $DIV.appendChild($H3);

                let $ul = document.createElement('ul');
                
                $ul.setAttribute('class','District-Partition__List List-Initial-State Font-NotoSansKr');

                for (let index = 0; index < Jres[key].length; index++) {
                    let $li = document.createElement('li');
                    $li.textContent = Jres[key][index];
                    $li.classList.add('Font-NotoSansKr');
                    $ul.appendChild($li);
                    
                }
                
                $H3.addEventListener('click',COLLAPSE_CHECKER);
    
                $DIV.appendChild($ul);
                $DISTRICTS.appendChild($DIV);

            }
        }
    }

    DISTRICT_REQUEST.open('GET','./getcontrydistricts');
    DISTRICT_REQUEST.send(null);

}

function COLLAPSE_CHECKER(event) {
    
    let $DO = event.target;
    let $DO_LIST = $DO.nextSibling;
    
    if($DO_LIST.classList.contains('showing')){
       $DO_LIST.classList.remove('showing');
       $DO_LIST.classList.add('closing');
    }
    else{
       $DO_LIST.classList.remove('closing');
       $DO_LIST.classList.add('showing');
    }
    
    
}


function GET_CONTRY() {

    
    let CONTRY_REQUEST = new XMLHttpRequest();

    CONTRY_REQUEST.onreadystatechange = () => {

        if ((CONTRY_REQUEST.status == 200 || CONTRY_REQUEST.status == 304) && CONTRY_REQUEST.readyState == 4) {

            let Jres = JSON.parse(CONTRY_REQUEST.responseText)
            let $CONTRY = document.getElementById('CONTRY');
            $CONTRY.innerHTML = Jres.contry;
            LIST_DISTRICTS(Jres.contry);
            // console.log(Jres.contry);
        }
    }

    CONTRY_REQUEST.open('GET', './getcontry');
    CONTRY_REQUEST.send(null);
    
}

function RANDOM_BORDER_COLOR() {

    let R = Math.floor((Math.random()*255)+1);
    let G = Math.floor((Math.random()*255)+1);
    let B = Math.floor((Math.random()*255)+1);

    let RGB_String = 'rgb('+R+','+G+','+B+')';
    return RGB_String;

}

function RANDOM_BACKGROUND_COLOR() {

    let R = Math.floor((Math.random()*255)+1);
    let G = Math.floor((Math.random()*255)+1);
    let B = Math.floor((Math.random()*255)+1);
    let A = 0.5;

    let RGBA_String = 'rgba('+R+','+G+','+B+','+A+')';
    return RGBA_String;

}

function INIT_CHART() {
    ChartCanvas = document.getElementById("myChart");

    GlobalChart = new Chart(ChartCanvas, {

        type: 'line',
        data: {

            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],

            datasets: [

                {

                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 3,
                    backgroundColor: RANDOM_BACKGROUND_COLOR(),
                    borderColor: RANDOM_BORDER_COLOR(),
                    tension: 0.5,
                    pointRadius: 0,
                    label: '흡연 인식 기록',
                    fill: true,

                }

            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}
