import logo from './logo.svg';
import './App.css';
import MainPageApp from './MainPageApp'
import React, { Component } from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state={apiResponse:{}};
  }

  callApi(){
    fetch("http://localhost:9000/users")
    .then(res=>res.json())
    .then(res=>this.setState({apiResponse:res}));
    console.log(this.state.apiResponse.name);
    
  }
  

  // componentWillMount(){
  //    this.callApi();
  // }



render() {
  const mainView=<MainPageApp userName="Bartek"></MainPageApp>
  
  return (
    
    <div className="App">
      
     {mainView}


    </div>
  );
}
}
export default App;
