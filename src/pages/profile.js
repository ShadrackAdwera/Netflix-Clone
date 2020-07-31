import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../svg/logo.svg'

const Profile = () => {
    const history = useHistory()
    return <ProfileContainer>
        <Logo src={logo} alt='logo' onClick={()=>history.push('/')}/>
        <div className='profile-content'>
            <div style={{textAlign:'center'}}>
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

const ProfileContainer = styled.div`

.profile-container {
    display: flex;
    flex-direction: row;
    margin-left: 15%
}

    .profile-content {
        color: white;
        position: relative;
        margin: auto;
        margin-top: 12%;
        z-index: 2
    }
    .profile {
        margin: 1.5rem 1.5rem 1.5rem 1.5rem;
    }
    .profile-name {
        font-size: 1.875rem;
        color: #999;
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
    }
    .title {
        font-size: 4.345rem;
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
    }
`;

const Logo = styled.img`
width: 7rem;
position: absolute;
top: 10%;
left: 10%;
transform: translate(-50%, -50%);
margin-left: 0;
`;

