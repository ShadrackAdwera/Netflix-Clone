import React from 'react'
import styled from 'styled-components'

const LoginForm = () => {
return <FormContainer> 
<div className='form-container'>
    <form>
        <h1>Sign In</h1>
        <div className='input-container'>
            <input className='input-empty' type='email' name='email' id='email' required/>
            <label>Email or Phone Number</label>
        </div>
        <div className='input-container'>
            <input className='input-empty' type='password' name='current-password' id='current-password' required/>
            <label>Password</label>
        </div>
        <div className='input-container'>
            <a type='submit' href='/'>Sign In</a>
        </div>
    </form>
</div>
</FormContainer>
}

export default LoginForm

//Form COntainer
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 5;

    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 41.25rem;
        padding: 4rem;

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

`;