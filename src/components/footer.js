import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
return (
    <FootedContainer>
        <span style={{marginLeft:'17%', fontSize:'1.125rem'}}>Questions? <Link>Call +254-7130-65-110</Link></span>
        <div className='footer-columns'>
        <ul>
            <li>
                <Link>FAQ</Link>
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
        </div>
    </FootedContainer>
)
}

export default Footer

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
`;