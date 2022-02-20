import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {ButtonsBarContainer, SignInContainer, SignInTitle} from "./sign-in.styles";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {googleSignInStart} = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                    <div className='buttons'>
                        <ButtonsBarContainer>
                            <CustomButton type="submit" value='Submit Form'>Sign In</CustomButton>
                            <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>Sign in with google</CustomButton>
                        </ButtonsBarContainer>
                    </div>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);