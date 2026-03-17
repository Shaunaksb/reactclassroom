import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            username: ""
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted:", this.state);
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1> 
                
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                    />
                    <br />

                    <label>Email:</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                    />
                    <br />

                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                    />
                    <br />

                    <button type="submit">Submit</button>
                </form>

                <div style={{ marginTop: '20px', borderTop: '1px solid #ccc' }}>
                    <h3>Live Preview:</h3>
                    <p>Name: {this.state.name}</p>
                    <p>Email: {this.state.email}</p>
                    <p>Username: {this.state.username}</p>
                    <small>Max allowed entries: {this.props.userLimit}</small>
                </div>
            </div>
        );
    }
}

Form.propTypes = {
    title: PropTypes.string.isRequired, 
    userLimit: PropTypes.number,       
    onFormReset: PropTypes.func        
};

Form.defaultProps = {
    title: "Registration Form",
    userLimit: 100
};

export default Form;