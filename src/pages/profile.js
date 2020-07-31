import React from 'react'
import { useHistory } from 'react-router-dom'
import { generateMedia } from 'styled-media-query'
import styled from 'styled-components'
import logo from '../svg/logo.svg'

const Profile = () => {
    const history = useHistory()
    return <ProfileContainer>
        <Logo src={logo} alt='logo' onClick={()=>history.push('/')}/>
        <div className='profile-content'>
            <div style={{textAlign:'center'}} className='sm-title'>
        <span className='title'>
            Who's Watching?
        </span>
            </div>
        <div className='profile-container'>
        <div className='profile'>
        <img src='https://images.unsplash.com/photo-1595543848721-7b5dd3e03168?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='im'/>
        <br/>
        <br/>
        <span className='profile-name'>Gift</span>
        </div>
        <div className='profile'>
        <img src='https://images.unsplash.com/photo-1595291143359-4e1dcc272a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='im'/>
        <br/>
        <br/>
        <span className='profile-name'>BLM</span>
        </div>
        <div className='profile'>
        <img src='https://images.unsplash.com/photo-1595875285616-69779829ae07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' alt='im'/>
        <br/>
        <br/>
        <span className='profile-name'>BTC</span>
        </div>
        <div className='profile'>
        <img src='https://images.unsplash.com/photo-1531525727990-67532cd332c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' alt='im'/>
        <br/>
        <br/>
        <span className='profile-name'>Game Boy</span>
        </div>
        <div className='profile'>
        <img src='https://images.unsplash.com/photo-1529154691717-3306083d869e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt='im'/>
        <br/>
        <br/>
        <span className='profile-name'>PS</span>
        </div>
        </div>
        <div className='manage-profiles'>
        <span>MANAGE PROFILES</span>
        </div>
        </div>
    </ProfileContainer>

}

export default Profile;

const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop:'1150px',
    tablet: '960px',
    smTablet: '740px'
})

const ProfileContainer = styled.div`

.profile-container {
    display: grid;
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
        margin-left: 20%;
        grid-template-columns: repeat(12, 1fr);
        ${customMedia.lessThan('lgDesktop')`
        grid-template-columns: repeat(2, 1fr);
        margin-top: 2rem;
        `}
        ${customMedia.lessThan('smTablet')`
        grid-template-columns: repeat(2, 1fr);
        margin-top: 2rem;
        `}
        ${customMedia.lessThan('tablet')`
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        margin-left: 2%;
        margin-right: 2%
        `}
}

    .profile-content {
        color: white;
        position: relative;
        margin: auto;
        margin-top: 12%;
        z-index: 2;
        ${customMedia.lessThan('tablet')`
        font-size: 1.0rem;
        margin-top: 50%;
        `}
    }
    
    .profile-name {
        font-size: 1.875rem;
        color: #999;
        ${customMedia.lessThan('tablet')`
        font-size: 1.0rem;
        `}
        
    }
    img {
        width: 12.875rem;
        height: 12.875rem;
        transition: transform .8s;
        margin: 0 auto;
        border: 1px solid #000;
        &:hover {
            cursor: pointer;
            transform: scale(1.2);
        }
        ${customMedia.lessThan('tablet')`
        width: 5.875rem;
        height: 5.875rem;
        `}

    }
    .title {
        font-size: 4.345rem;
        ${customMedia.lessThan('tablet')`
        font-size: 1.845rem;
        margin-top: 5%;
        `}
    }
    .manage-profiles {
    margin: 16px auto;
    margin-top: 5%;
    border: 1px solid #999;
    width: 16%;
    color: #999;
    font-size: 1.675rem;
    padding: 10px;
    text-align: center;
    &:hover {
        color: white;
        cursor: pointer;
    }
    ${customMedia.lessThan('tablet')`
        width: 80%;
        font-size: 1.0rem;
        `}
    }
`;

const Logo = styled.img`
width: 7rem;
position: absolute;
top: 10%;
left: 10%;
transform: translate(-50%, -50%);
margin-left: 0;
${customMedia.lessThan('tablet')`
top: 5%;
left: 15%;
width: 7rem;
`}
${customMedia.lessThan('mdDesktop')`
top: 5%;
left: 15%;
width: 7rem;
`}
`;

