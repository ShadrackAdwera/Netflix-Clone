import React from 'react'
import styled from 'styled-components'
import TabOneImage from '../../images/tab-1-pic.png'
import { Button } from '../Button'

const TabContentOne = props => {
return (
    <TabContentContainer>
        <div className='container'>
            <div className='tab-content'>
                <div>
                <span style={{marginBottom:'2rem'}}>
                    If you decide Netflix isn't for you - No problem, No commitment. Cancel online anytime. 
                </span>
                <br/>
                <Button style={{marginTop:'2rem'}}>Try it now</Button>
                </div>
                <img src = {TabOneImage} alt='Tab One'/>
            </div>

        </div>
    </TabContentContainer>
)
}

export default TabContentOne

//Main COntent

const TabContentContainer = styled.div`
    background: var(--main-deep-dark);
    img {
        width: 31.875rem
    }
    .container {
        margin: 0 10%;
    }
    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-size: 2rem;
        padding: 2.5rem;
    }
`;