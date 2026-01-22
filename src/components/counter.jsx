import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState({
            count: ++this.state.count
        });
    }

    render(){
        return(
            <div className="card">
                <button onClick={() => this.increment()}>
                        count is {this.state.count}
                </button>
            </div>
        );
    }
}

export default Counter;