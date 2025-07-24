import React, { Component } from 'react'
import './css/Counter.css';

export class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    };
  }
  
  render() {
    return (
      <>
        <div className="counter-parent">
          <div className="counter-child">
            <p>{this.state.count}</p>
          </div>
          <div className="counter-child">
            <button onClick={() => {
              this.setState({count: this.state.count+1})
            }}>Increament</button>


            <button onClick={() => {
              this.setState({count: this.state.count-1})
            }}>Decreament</button>
          </div>
        </div>
      </>
    )
  }
} 
  

export default Counter;
