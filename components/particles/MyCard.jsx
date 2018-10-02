import React from 'react'
import './MyCard.css'

const Interval = 1500;

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
  componentWillUnmount(){
    clearInterval(this.state.TimerID)
  }
  componentDidMount(){

    this.statusChecker()

    setInterval(()=>{
    
      this.statusChecker()

    },Interval)
    

  }

  statusChecker(props){
    let Query = "http://18.218.196.86:9999/data?doh="+this.props.doh+"&city="+this.props.city+"&id="+this.props.id  

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

    if(this.props.isChartShowing === 0){

      this.setState({
        isDrawingChart : true,
        TimerID : setInterval(()=>{
          this.props.ChartDrawer(this.state.isDrawingChart,this.state.lastStatus,this.props.id)
        },Interval)},()=>{
          this.props.clickHandler(this.state.isDrawingChart,this.state.TimerID)
        })

    }
    else{
     
      if(this.state.isDrawingChart === true){
        this.setState({
          isDrawingChart : false
        },()=>{
  
          this.props.clickHandler(this.state.isDrawingChart,null);
          
        })
      }
      else{

        alert('차트는 한개의 카드씩만 살펴볼 수 있습니다. 먼저 선택한 카드를 다시 클릭하여 해제하여 주세요.');
        
      }
      

    }
  }

  render(){
    return(
      <div onClick={this.handleShowChart} className={"Card-Box "+(this.state.isDrawingChart? 'Chart-On' : 'Chart-Off')}>
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
