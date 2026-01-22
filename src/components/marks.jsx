import React, { Component } from "react";
import ShowMarks from "./showmarks";

class Marks extends Component {
    constructor(props) {
        super(props);
        this.state = { marks: 0 };

        this.markIncrement = this.markIncrement.bind(this);
        this.markReset = this.markReset.bind(this);
    }

    markIncrement(){
        this.setState({ 
            marks: this.state.marks + 5
        });
    }

    markReset(){
        this.setState({ 
            marks: 0
        });
    }

    render(){
        return(
            <ShowMarks marks={this.state.marks} markIncrement={this.markIncrement} markReset={this.markReset}/>
        );
    }
}

export default Marks;