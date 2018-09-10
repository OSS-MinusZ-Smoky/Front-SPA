// 리엑트 프레임워크를 Import 하고,
import React from 'react';
//  작성한 Appbar 스타일 시트를 Import 합니다.
import './Appbar.css';
// Appbar 컴포넌트는 리엑트 컴포넌트 클래스를 상속합니다.
class Appbar extends React.Component{
  // Appbar 컴포넌트가 생성될 경우,
  
  constructor(props){

    // 전달받은 파라미터 묶음(props object)를 부모클래스에도 전달하며 인스턴스화 합니다. 이것은 React.Component라는 클래스를 인스턴스화 하여 갖고있는 setState() , render() 와 같은 함수들을 해당 컴포넌트에서 사용할 수 있게 됩니다.
    super(props);
  }
  // Appbar 컴포넌트를 어디에선가 도입하여 이용할 때 다음과 같이 반환합니다.
  render(){
    
      return(
        <div className="Appbar-Grid-Container">
        
          <div className="Appbar-Grid-Container__Item">
            <span className="Appbar-Grid-Container__Item__Text Font-Roboto Font-Weight-Bold">{this.props.brand}</span>
          </div>

          <div className="Appbar-Grid-Container__Item">
          </div>
          <div className="Appbar-Grid-Container__Item">
            <input id="CONTRY-INPUT" className="Appbar-Grid-Container__Item__Input Font-Roboto" type="text" placeholder="Search..." />
          </div>
        </div>
      )
  }
}

// 외부에서 도입가능하도록 해당 모듈을 export 합니다.
export default Appbar;