/* eslint-disable no-useless-escape */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { generateMedia } from 'styled-media-query';
import FbLogin from '../../images/fb-logo.png'

const LoginForm = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')
    // const [emailError, setEmailError] = useState('')
    // const [isValidEmail, setIsValidEmail] = useState(false)
    // const [passwordError, setPasswordError] = useState('')
    // const [isValidPw, setIsValidPw] = useState(false)
    const [isChecked, setIsChecked] = useState(true)

    // const validateEmail = () => {
    //     const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     setIsValidEmail(true)
    //     if (email && !emailRegex.test(email.toLowerCase())) {
    //         setIsValidEmail(false)
    //         setEmailError(<span style={{color:'red'}}>
    //             Please input a valid email address
    //         </span>)
    //       }
    //       return isValidEmail
    // }

    // const validatePassword = () => {
    //     setIsValidPw(true)
    //     if(password.length<=5) {
    //         setIsValidPw(false)
    //         setPasswordError(<span>
    //             Check Password Length
    //         </span>)
    //     }
    //     return isValidPw
    // }

    

return <FormContainer> 
<div className='form-container'>
    <form>
        <h1>Sign In</h1>
        <div className='input-container'>
            <input className='input-empty' type='email' name='email' id='email' required value={email} onChange={e=>setEmail(e.target.value)}/>
            <label>Email or Phone Number *</label>
        </div>
        <div className='input-container'>
            <input className='input-empty' type='password' name='current-password' id='current-password' required value={password} onChange={e=>setPassword(e.target.value)}/>
            <label>Password *</label>
        </div>
        <div className='input-container'>
            <Button type='submit' onClick={()=>email.length>5 && password.length>5 && alert(`It is just but a clone ${email.split('@')[0]}, dont expect to Netflix and Chill here ;-)`)}>Sign In</Button>
        </div>
        <label className='checkbox-container'>
            Remember me
            <input type='checkbox' defaultChecked={isChecked} onChange={e=>setIsChecked(e.target.checked)} />
            <span className='checkmark'></span>
        </label>
        <Link to='/' className='need-help'>Need Help?</Link>
        <div className='bottom-form'>
            <img src={FbLogin} alt='fb'/>
            <Link to='/' className='fb-login-text'>Login With Facebook</Link>
            <br />
            <br />
            <span style={{color:'#999'}}>New to Netflix?</span> &nbsp;
            <Link to='/sign-up' className='sign-up-text'>Sign Up Now</Link>
        </div>
    </form>
</div>
</FormContainer>
}

export default LoginForm

//Media Queries
const customMedia = generateMedia({
    tablet: '640px',
  });



//Form COntainer
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;
    ${customMedia.lessThan('tablet')`
    border-bottom: 0.9px solid #000;

        `}

    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;
        ${customMedia.lessThan('tablet')`
        padding: 4.785rem;
        height: 35rem;
        margin-left: 5%;
        margin-right: 5%;
        width: 90%;
        `}

    }
    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1.2rem;
    }
    .input-empty {
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }
    form div label {
        position: absolute;
        top: 0.625rem;
        left: 0.25rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div {
        position: relative
    }

    input:focus ~ label {
        top: 0.43375rem;
        font-size: 0.7rem;
    } 
    input:focus {
        outline: none;
    }

    .checkbox-container {
        margin-left: 0.75rem;
        padding-left: 1.875rem;
        position: relative;
        font-size: 0.9rem;
        color: #999;
        cursor: pointer;
    }
    .checkbox-container input {
        display: none;
    }
    .checkbox-container .checkmark {
        display: inline-block;
        background: #454545;
        width: 1.1rem;
        height: 1.1rem;
        left: 0;
        top: 0;
        border-radius: 0.1rem;
        position: absolute;
    }
    .checkbox-container input:checked + .checkmark:after {
        content: '';
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg)
    }
    .need-help {
        text-decoration: none;
        color: #828282;
        margin-left: 6.6rem;
        font-size: 0.9rem;
        ${customMedia.lessThan('tablet')`
        margin-left: 13rem
        `}
    }
    .bottom-form img {
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0; 
    }
    .fb-login-text {
        color: #828282;
        font-size: 0.9rem;
    }
    .bottom-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 4rem;
    }
    .sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        &:hover {
            text-decoration: underline
        }
    }

`;

const Button = styled.button`
    color: #fff;
    background: rgba(229,9,0);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: opacity .2s ease-in;
    cursor: pointer;
    text-decoration: none;
    margin: 1rem 0;

`;