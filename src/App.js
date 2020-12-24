import React, { Component } from 'react';
// import FirstComponent, {SecondComp} from './components/learning-exmpl/FirstComponent';
// import ThirdComp from "./components/learning-exmpl/ThirdComp";
// import FunctionComp from "./components/learning-exmpl/FunctionComp";
import Counter from "./components/learning-exmpl/counter/Counter";
//import logo from './logo.svg';
import './App.css';

class App extends Component{
  render() {
    return(
      <div className="App">
        <Counter />
      </div>
    )
  }
}
export default App;
