import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../svg/logo.svg'
import checkLogo from '../images/Checkmark.png'
import { Button } from '../components/Button'


const Plan = () => {
return (
<MainContainer>
    <div className='header-top'>
    <Link to='/'>
        <Logo src={logo} alt='logo'/>
    </Link>
    <NavLink to ='/plan' className='btn btn-signIn'> Sign In </NavLink>
    </div>
    <div className='header-content'>
    <img className='check-mark-logo' src={checkLogo} alt='check'/>
    <p> Step <strong>1</strong> of <strong>3</strong> </p>
    <h2>Chose your plan</h2>
    <div className='checked-list'>
    <div className='bullet'>No commitments. Cancel Anytime</div>
    <div className='bullet'>Everything on Netflix for one low price</div>
    <div className='bullet'>Unlimited viewing on all your devices</div>
    </div>
    <Button>See the Plans</Button>
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
    .header-content {
        display: grid;
        justify-content: center;
        background: #fff;
        color: var(--main-dark);
        margin-bottom: 6rem;
        width: 65%;
        position: relative;
        margin: auto;
        margin-top: 4.5rem;
        text-align: center;
        align-content: center;
        flex-direction: column;
        z-index: 2
    }
    .check-mark-logo {
        width: 3rem;
        margin-top: 3.125rem;
        margin-bottom: 2rem; 
    }
    .header-content img{
        margin: 6.25rem auto 1.875rem;
    }
    .checked-list {
        text-align: left;
        margin: 1rem auto 3rem;
        padding-left: 1.5625rem;
        width: 75%;
        font-size: 17px;
        padding: auto 
    }
    .bullets {
        margin-top: 1rem;
        margin-left: 1rem;
        text-indent: -1em;
        line-height: 1.2rem
    }

`;

const Logo = styled.img`
    width: 10.5rem;
    height: 3.5rem;
    position: absolute;
    top: 49%;
    left: 8%;
    transform: translate(-50% , -50%);
    margin-left: 0
`;