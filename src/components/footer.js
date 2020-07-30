import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
return (
    <div>
        <span>Questions? <Link to='/'>Call +254-7130-65-110</Link></span>
        <div className='footer-columns'>
        <ul>
            <li>
                <Link>FAQ</Link>
            </li>
            <li>
                <Link>Investor Relations</Link>
            </li>
            <li>
                <Link>Ways to watch</Link>
            </li>
            <li>
                <Link>Corporate Information</Link>
            </li>
            <li>
                <Link>Netflix Originals</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link>Help Center</Link>
            </li>
            <li>
                <Link>Jobs</Link>
            </li>
            <li>
                <Link>Terms Of Use</Link>
            </li>
            <li>
                <Link>Contact Us</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link>Account</Link>
            </li>
            <li>
                <Link>Redeem Gift Cards</Link>
            </li>
            <li>
                <Link>Privacy</Link>
            </li>
            <li>
                <Link>Speed Test</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link>Media Center</Link>
            </li>
            <li>
                <Link>Buy Gift Cards</Link>
            </li>
            <li>
                <Link>Cookie Preferences</Link>
            </li>
            <li>
                <Link>Legal Notices</Link>
            </li>
        </ul>
        </div>
    </div>
)
}

export default Footer