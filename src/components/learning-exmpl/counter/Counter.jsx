import { Component } from "react";
import "./Counter.css";

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            counter : 0
        }  
        this.increment = this.increment.bind(this)  
    }
    
    render() {
        return(
            <div>
                <h1>Titas is learning</h1>
                <CounterBtn by={+2} incSpan = {this.increment}/>
                <CounterBtn by = {+20} incSpan = {this.increment}/>
                <CounterBtn by={+100} incSpan = {this.increment}/>
                <CounterBtn by={-50} incSpan = {this.increment}/>
                <CounterBtn by = {+30} incSpan = {this.increment}/>
                <CounterBtn by={-100} incSpan = {this.increment}/>
                <span className="Count">{this.state.counter}</span>
            </div>
        )
    }
    increment(by) {
        this.setState(
            (prevState) => {
            return {counter : prevState.counter+by}
        }) 
        console.log(this.state.counter)
    }
   
}

class CounterBtn extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
    }
    
    render() {
        return(
            <div className="CounterPane">
                <button onClick={this.increment}>{this.props.by}</button>
                {/* <span className="Count">{this.state.counter}</span> */}
            </div>
        )
    }
    increment() {
        this.setState({
            counter : this.state.counter + this.props.by
        })
        this.props.incSpan(this.props.by);
    }
}

CounterBtn.defaultProps = {
    by : 1
}
export default Counter;