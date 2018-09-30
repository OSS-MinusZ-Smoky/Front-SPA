import React from 'react'
import './MyCard.css'

class MyCard extends React.Component{

  constructor(props){

    super(props)
    this.state = {
      isStatusGood : true,
      lastStatus : 0,
      isDrawingChart : false,
      TimerID : null
    }

    this.handleShowChart = this.handleShowChart.bind(this)
    this.statusChecker = this.statusChecker.bind(this)

  }

  componentDidMount(){

    this.statusChecker()

    setInterval(()=>{
    
      this.statusChecker()

    },3000)
    

  }

  statusChecker(props){
    let Query = "http://192.168.43.131:9999/data?doh="+this.props.doh+"&city="+this.props.city+"&id="+this.props.id  

    fetch(Query).then((response)=>{
      let Jres = response.json()
      return Jres
    }).then((Jres)=>{

      let statusVal = Jres.message[0].state

      if(statusVal >= 380){

        this.setState({
          isStatusGood : false,
          lastStatus : statusVal
        })

        
      }
      else{

        this.setState({
          isStatusGood : true,
          lastStatus : statusVal
        })
        
      }
      
    })
  }

  handleShowChart(props){

    if(this.state.isDrawingChart === false){

      alert('차트를 그리기 시작합니다.');
      this.setState({
        isDrawingChart : true,
        TimerID : setInterval(()=>{
          this.props.ChartDrawer(this.state.lastStatus,this.props.id)
        },1500)},()=>{
          this.props.clickHandler(this.state.isDrawingChart)
        })
    }
    else{

      alert('더이상 차트를 그리지 않겠습니다.');
      this.setState({
        isDrawingChart : false
      },()=>{
        clearInterval(this.state.TimerID)
        this.props.clickHandler(this.state.isDrawingChart);
      })

    }
  }

  render(){
    return(
      <div onClick={this.handleShowChart} className="Card-Box">
        <div className={"Card-Row " + (this.state.isStatusGood ? "Status-Good" : "Status-Bad")}>
          <span className="Card-Text">{this.props.id}</span>
        </div>
        <div className="Card-Row">
          <span className="Card-Text">{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default MyCard