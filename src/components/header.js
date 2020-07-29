import React from 'react'
import Logo from '../svg/logo.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = props => {
return (
    <HeaderComponent className='header-container'>
        <div className='header-top'>
            <img src ={Logo} alt='Logo'/>
            <NavLink className='signIn-btn' to='/'>Sign In</NavLink>
        </div>

    </HeaderComponent>
)
}

export default Header

const HeaderComponent = styled.div`
.signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.3s ease-in;
    &:hover {
        background: var(--main-dark)
    }
}
`
