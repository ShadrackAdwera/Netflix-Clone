import React from 'react'
import styled from 'styled-components'
import logo from '../svg/logo.svg'
import { Link, NavLink } from 'react-router-dom'

const Plan = () => {
return (
<MainContainer>
    <div className='header-top'>
    <Link to='/'>
        <img src={logo} alt='logo'/>
    </Link>
    <NavLink to ='/plan' className='btn btn-signIn'> Sign In </NavLink>
    </div>
</MainContainer>    
)
}

export default Plan

const MainContainer = styled.div`
background: #fff;

    .header-top {
        background: #fff;
        height: 6rem;
        border-bottom: 1px solid #6e6e6e
    }
`;