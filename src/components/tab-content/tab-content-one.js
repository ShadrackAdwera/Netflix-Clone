import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { generateMedia } from "styled-media-query";
import TabOneImage from '../../images/tab-1-pic.png'
import { Button } from '../Button'

const TabContentOne = props => {
    const history = useHistory()

return (
    <TabContentContainer>
        <div className='container'>
            <div className='tab-content'>
                <div>
                <span style={{marginBottom:'2rem'}} className='title'>
                    If you decide Netflix isn't for you - No problem, No commitment. Cancel online anytime. 
                </span>
                <br/>
                <Button style={{marginTop:'1rem'}} onClick={()=> history.push('/plan')}>Try it now</Button>
                </div>
                <img src = {TabOneImage} alt='Tab One'/>
            </div>

        </div>
    </TabContentContainer>
)
}

export default TabContentOne

//Media Queries
const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '960px',
})

//Main COntent

const TabContentContainer = styled.div`
    background: var(--main-deep-dark);
    img {
        width: 20.875rem
    }
    .container {
        margin: 0 10%;
    }
    .title {
        margin-top: 2rem;
        ${customMedia.lessThan('smDesktop')`
        font-size: 1.5rem;
        line-height: 1;
        `}
    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-size: 2rem;
        padding: 2.5rem;
        ${customMedia.lessThan('tablet')`
        grid-template-columns: 100%;
        text-align: center;
        padding-left: 0;
        paddig-right: 0;
        `}
    }
`;