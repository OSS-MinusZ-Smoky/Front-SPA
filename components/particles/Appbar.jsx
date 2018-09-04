// 리엑트 프레임워크를 Import 하고,
import React from 'react';
//  작성한 Appbar 스타일 시트를 Import 합니다.
import AppbarStyle from './Appbar.css'

// Appbar 컴포넌트는 리엑트 컴포넌트 클래스를 상속합니다.
class Appbar extends React.Component{
  // Appbar 컴포넌트가 생성될 경우,
  constructor(props){

    // 전달받은 파라미터 묶음(props object)를 부모클래스에도 전달하며 인스턴스화 합니다. 이것은 React.Component라는 클래스를 인스턴스화 하여 갖고있는 setState() , render() 와 같은 함수들을 해당 컴포넌트에서 사용할 수 있게 됩니다.

    super(props);

    // Appbar의  input 요소는 '상태' 라는 것을 가질 수 있게 되는데 유저 입력을 받은 상태를 머금고 있다고 생각하는 것이 편합니다. 초기 생성시에는 당연히 빈칸이므로 빈 스트링이겠죠.
    this.state = {
      contry : ""
    }
    // 해당 핸들러를 생성된 Appbar에서 발생하는 이벤트를 리스닝하도록 합니다.
    this.handleContryInput = this.handleContryInput.bind(this);
  }
  // 유저입력이벤트가 발생했을때 동작하는 핸들러 함수에 대한 내용을 정의합니다.
  handleContryInput(event){

   this.setState({
     contry : event.target.value
   },()=>{
     console.log(this.state.contry)
   })
   
  
  }
  render(){

    return(
      <div className="Appbar-Grid-Container">
      
        <div className="Appbar-Grid-Container__Item">
          <span className="Appbar-Grid-Container__Item__Text Font-Roboto">SMOKY</span>
        </div>

        <div className="Appbar-Grid-Container__Item"></div>
        <div className="Appbar-Grid-Container__Item">
          <input id="CONTRY" className="Appbar-Grid-Container__Item__Input Font-Roboto" type="text" placeholder="Search..." onChange={this.handleContryInput} value={this.state.contry}/>
        </div>
      </div>
    )

  }
}

export default Appbar;