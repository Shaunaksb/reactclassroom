import React, { Component } from "react";

class DataFetcher extends Component {
    constructor(props) {
    super(props);
    this.state = {
        station: "",
        data: ""
    };
    }

    fetchData = () => {
    fetch(`https://api.met.no/weatherapi/tafmetar/1.0/?content=metar&content_type=text%2Fplain&icao=${this.state.station}`)
        .then(response => response.text())
        .then(text => {
        this.setState({ data: text });
        });
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
    return (
        <div>
            <input 
            type="text" 
            value={this.state.station} 
            onChange={(e) => this.setState({ station: e.target.value })} 
            />
            <button onClick={this.fetchData}>Get Weather</button>

            <div>
            <h3>Weather Data:</h3>
            <p>{this.state.data}</p>
            </div>
        </div>
        );
    }
}

export default DataFetcher;