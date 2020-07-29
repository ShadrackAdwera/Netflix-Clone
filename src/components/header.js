import React from 'react'
import logo from '../svg/logo.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = props => {
return (
    <HeaderComponent className='header-container'>
        <div className='header-top'>
            <Logo src ={logo} alt='Logo'/>
            <NavLink className='signIn-btn' to='/'>Sign In</NavLink>
        </div>

    </HeaderComponent>
)
}

export default Header

//logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);

`;

//header 
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
//headertop
    .header-top {
        position: relative;
        height: 10rem;
        z-index: 1;
    }
`
