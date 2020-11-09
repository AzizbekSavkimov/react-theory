import React from 'react';
import Auxilliary from "../hoc/Auxilliary";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends React.Component {
    state = {
        counter: 0
    }
    addCounter = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <Auxilliary>
                <h2>Counter {this.state.counter}</h2>
                <Counter2 />
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxilliary>
        )
    }
}