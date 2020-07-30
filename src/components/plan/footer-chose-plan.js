import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query";

const Footer = () => {
return (
    <FootedContainer>
        <span style={{marginLeft:'10%'}}>Questions? <Link to='/'>Call +254-7130-65-110</Link></span>
        <div className='footer-columns'>
        <ul>
            <li>
                <Link to='/'>Gift Card Terms</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/'>Terms Of Use</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/'>Privacy Statement</Link>
            </li>
        </ul>
        </div>
        <span style={{marginLeft:'10%', fontSize:'0.9rem', marginTop:'2rem'}}>Netflix Mbogi Genje</span>
    </FootedContainer>
)
}

export default Footer

//Media Queries
const customMedia = generateMedia({
    tablet: '740px'
})

const FootedContainer = styled.footer`
    background: var(--main-dark);
    padding-top: 3rem;
    padding-bottom: 5rem;
    justify-content: center;
    margin-top: 6rem;

    .footer-columns {
        width: 80%;
        margin: 1rem auto 0;
        color: #999,
        font-size: 0.9rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        ${customMedia.lessThan('tablet')`
        grid-template-columns: repeat(2, 1fr);
        `} 
    }
    ul li{
        list-style: none;
        line-height: 2.5;
    }
    a {
        color: #999;
        font-size: 0.9rem
    }
    p {
        text-decoration: underline;
        cursor: pointer;
    }
    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    .language-btn {
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 8rem;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        margin-left: 10%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        cursor: pointer;
        
    }
    .language-toggle {
        margin-left: 10%;
        position: absolute;
    }
    .language-toggle ul {
        background: var(--main-deep-dark);
        width: 8.125rem;
        border: 1px solid #333;
        text-align: center;
        &:hover {
            background: #0085ff;
            color: white;
        }
    }
`;