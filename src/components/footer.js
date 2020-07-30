import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down'
import {ic_language} from 'react-icons-kit/md/ic_language'
import { generateMedia } from "styled-media-query";

const Footer = () => {
    const [langContent, setLangContent] = useState(false)

    const handleClick = e => {
        e.preventDefault()
        setLangContent(!langContent)
    }
return (
    <FootedContainer>
        <span style={{marginLeft:'17%', fontSize:'1.125rem'}}>Questions? <Link to='/'>Call +254-7130-65-110</Link></span>
        <div className='footer-columns'>
        <ul>
            <li>
                <Link to='/'>FAQ</Link>
            </li>
            <li>
                <Link to='/'>Investor Relations</Link>
            </li>
            <li>
                <Link to='/'>Ways to watch</Link>
            </li>
            <li>
                <Link to='/'>Corporate Information</Link>
            </li>
            <li>
                <Link to='/'>Netflix Originals</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/'>Help Center</Link>
            </li>
            <li>
                <Link to='/'>Jobs</Link>
            </li>
            <li>
                <Link to='/'>Terms Of Use</Link>
            </li>
            <li>
                <Link to='/'>Contact Us</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/'>Account</Link>
            </li>
            <li>
                <Link to='/'>Redeem Gift Cards</Link>
            </li>
            <li>
                <Link to='/'>Privacy</Link>
            </li>
            <li>
                <Link to='/'>Speed Test</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/'>Media Center</Link>
            </li>
            <li>
                <Link to='/'>Buy Gift Cards</Link>
            </li>
            <li>
                <Link to='/'>Cookie Preferences</Link>
            </li>
            <li>
                <Link to='/'>Legal Notices</Link>
            </li>
        </ul>
        <div className='language-btn' onClick={handleClick}>
        <Icon icon={ic_language} size={20}/>
        &nbsp;&nbsp;English&nbsp;&nbsp;
        <Icon icon={ic_arrow_drop_down} />
        </div>
        </div>
        {langContent && <div className='language-toggle'>
        <ul>
            <li>English</li>
        </ul>
        <ul>
            <li>Sheng'</li>
        </ul>
        </div>}
        <span style={{marginLeft:'17%', fontSize:'0.9rem'}}>Netflix Mbogi Genje</span>
    </FootedContainer>
)
}

export default Footer

//Media Queries
const customMedia = generateMedia({
    tablet: '740px'
})

const FootedContainer = styled.footer`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;

    .footer-columns {
        width: 70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
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
        margin-left: 17%;
        position: absolute;
        margin-top: -2rem;
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