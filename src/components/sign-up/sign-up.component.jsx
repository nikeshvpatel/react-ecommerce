import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-up.styles.scss';
import {connect} from "react-redux";
import {SignInContainer, SignInTitle} from "../sign-in/sign-in.styles";
import {signUpStart} from "../../redux/user/user.actions";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {signUpStart} = this.props;
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert('Password did not match');
        }
        try {
            signUpStart(displayName, email, password);
        } catch (e) {
            console.log(e.message);
        }
    }
    handleChange = e => {
        let {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <SignInContainer>
                <SignInTitle>I do not have an account</SignInTitle>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required/>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({displayName, email, password}))
})

export default connect(null, mapDispatchToProps)(SignUp);