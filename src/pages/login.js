import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query';
import logo from '../svg/logo.svg'
import LoginForm from '../components/login/login-form'
import LoginFooter from '../components/login/login-footer'

const Login = () => {
    const history = useHistory()
    return <div className='main-login-container'>
        <div className='header-top'>
        <Logo src={logo} alt='logo' className='logo' onClick={()=>history.push('/')}/>
        </div>
        <LoginForm />
        <LoginFooter />
    </div>
}

export default Login 

const customMedia = generateMedia({
    tablet: '640px',
    lgTablet: '740px'
})

const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 25%;
    left: 11%;
    transform: translate(-50%, -50%);
    margin-left: 0;
    ${customMedia.lessThan('tablet')`
    top: 45%;
    left: 28%
        `}


`;