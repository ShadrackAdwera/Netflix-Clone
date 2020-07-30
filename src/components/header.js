import React from 'react'
import logo from '../svg/logo.svg'
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {ic_chevron_right} from 'react-icons-kit/md/ic_chevron_right'
import { generateMedia } from "styled-media-query";
import { Button } from './Button'


const Header = props => {
    const history  = useHistory()
return (
    <HeaderComponent className='header-container'>
        <div className='header-top'>
            <Logo src ={logo} alt='Logo'/>
            <NavLink className='signIn-btn' to='/sign-in'>Sign In</NavLink>
        </div>
        <div className='header-content'>
            <Title>See what's next</Title>
            <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME</Subtitle>
            <Button style={{marginBottom:'10%'}} className='main-offer-btn' primary onClick={()=> history.push('/plan')}>TRY IT NOW <Icon className='Icon' icon={ic_chevron_right} size={40}/> </Button>
        </div>

    </HeaderComponent>
)
}

export default Header

const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop:'1150px',
    tablet: '960px',
    smTablet: '740px'
}) 

//logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${customMedia.lessThan('tablet')`
    left: 25%;
    `}
`;

//header 
const HeaderComponent = styled.div`

.Icon svg {
    vertical-align: bottom;
    margin-left: 1.5rem;
    ${customMedia.lessThan('smTablet')`
    display: none !important;
    `}
}

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
    ${customMedia.lessThan('smTablet')`
    margin-top: 1.25rem;
    right: 5%
    `}
}
//headertop
    .header-top {
        position: relative;
        height: 10rem;
        z-index: 1;
    }

//header content
    .header-content {
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
        ${customMedia.lessThan('smTablet')`
        display: grid;
        grid-template-rows: repeat(3, 60px);
        margin-top: 8rem; 
        `}
    }

    .main-offer-btn {
        ${customMedia.lessThan('lgDesktop')`
        margin: 0 33%;
        font-size: 1.5rem;
        `}
        ${customMedia.lessThan('mdDesktop')`
        margin: 0 25%;
        font-size: 1.5rem;
        `}
        ${customMedia.lessThan('tablet')`
        margin: 0 20%;
        font-size: 0.9rem;
        `}
    }
`


//Main Title

const Title = styled.h2`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1em;
    ${customMedia.lessThan('tablet')`
        font-size: 2.0rem;
        `}
`;

//Subtitle
const Subtitle = styled.h3`
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 1.25em;
    margin: 0 0 1.875rem;
    text-transform: uppercase;
    ${customMedia.lessThan('smTablet')`
        font-size: 1.4rem;
        margin: 0;
        `}
`;
