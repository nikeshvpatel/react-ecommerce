import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import {ButtonsBarContainer, SignInContainer, SignInTitle} from "./sign-in.styles";

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
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch (e) {
            console.log(e.message);
        }

    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
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
                        <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>Sign in with google</CustomButton>
                        </ButtonsBarContainer>
                    </div>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;