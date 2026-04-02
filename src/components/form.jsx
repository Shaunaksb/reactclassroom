import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: { name: "", email: "", username: "" },
            errors: {}
        };
    }

    // Helper to validate a single field against regex props
    validateField = (name, value) => {
        const rule = this.props.validationRules[name];
        if (rule && rule.pattern) {
            const isValid = rule.pattern.test(value);
            return isValid ? "" : rule.message || "Invalid format";
        }
        return "";
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        
        // Update field value and run validation immediately for UX
        const errorMessage = this.validateField(name, value);

        this.setState((prevState) => ({
            fields: { ...prevState.fields, [name]: value },
            errors: { ...prevState.errors, [name]: errorMessage }
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        // Final check before submission
        const newErrors = {};
        Object.keys(this.state.fields).forEach(key => {
            const msg = this.validateField(key, this.state.fields[key]);
            if (msg) newErrors[key] = msg;
        });

        if (Object.keys(newErrors).length > 0) {
            this.setState({ errors: newErrors });
            console.log("Validation Failed", newErrors);
        } else {
            console.log("Form Submitted Successfully:", this.state.fields);
        }
    };

    render() {
        const { fields, errors } = this.state;
        return (
            <div>
                <h1>{this.props.title}</h1> 
                <form onSubmit={this.handleSubmit}>
                    {['name', 'email', 'username'].map((field) => (
                        <div key={field} style={{ marginBottom: '10px' }}>
                            <label style={{ capitalize: 'true' }}>{field}: </label>
                            <input 
                                type="text" 
                                name={field}
                                value={fields[field]} 
                                onChange={this.handleChange} 
                            />
                            {errors[field] && (
                                <span style={{ color: 'red', fontSize: '12px', marginLeft: '10px' }}>
                                    {errors[field]}
                                </span>
                            )}
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

// Prop Validation
Form.propTypes = {
    title: PropTypes.string,
    // Shape validation ensures the object follows a specific structure
    validationRules: PropTypes.shape({
        name: PropTypes.shape({ pattern: PropTypes.instanceOf(RegExp), message: PropTypes.string }),
        email: PropTypes.shape({ pattern: PropTypes.instanceOf(RegExp), message: PropTypes.string }),
        username: PropTypes.shape({ pattern: PropTypes.instanceOf(RegExp), message: PropTypes.string })
    })
};

Form.defaultProps = {
    title: "Registration Form",
    validationRules: {
        email: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address."
        },
        username: {
            pattern: /^[a-zA-Z0-9_]{5,}$/,
            message: "Username must be at least 5 characters (alphanumeric)."
        }
    }
};

export default Form;