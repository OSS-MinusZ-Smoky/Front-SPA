
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

    GET_CONTRY();
    INIT_MAP();
    INIT_CHART();

    let ruru = document.getElementById('ruru');
    ruru.appendChild(new Card(ruru.id));
    
}

function GET_CONTRY() {

    let CONTRY_REQUEST = new XMLHttpRequest();

    CONTRY_REQUEST.onreadystatechange = () => {

        if ((CONTRY_REQUEST.status == 200 || CONTRY_REQUEST.status == 304) && CONTRY_REQUEST.readyState == 4) {

            let Jres = JSON.parse(CONTRY_REQUEST.responseText)
            console.log(Jres.contry);
        }
    }

    CONTRY_REQUEST.open('GET', './getcontry');
    CONTRY_REQUEST.send(null);

}

function INIT_CHART() {
    ChartCanvas = document.getElementById("myChart");

    GlobalChart = new Chart(ChartCanvas, {
        type: 'line',
        data: {

            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],

            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 3,
                backgroundColor: 'rgb(234, 96, 96)',
                borderColor: 'rgb(234, 96, 96)',
                tension: 0.5,
                pointRadius: 0,
                label: '흡연 인식 기록',
                fill: false,
            }]
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
