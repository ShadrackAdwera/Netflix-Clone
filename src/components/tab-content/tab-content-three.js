import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'

const TabContentThree = () => {
   return <TabContainer>
    <div className='tab-content'>
        <div className='tab-top-content'>
        <span style={{fontSize:'1.5rem'}}>
            Chose one plan and watch everything on Netflix
        </span>
        <Button className='btn'>Try It Now</Button>
        </div>
    </div>
    </TabContainer>

}

export default TabContentThree

const TabContainer = styled.div`
    background: var(--main-deep-dark)

    .tab-content {
        margin: 0 15%;
        padding-bottom: 1%;
    }
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        padding: 3rem 0 0;  
    }

    span {
        grid-column: 3 / 6;
    }
    .btn {
        grid-column: 8 / 10;
        margin-left: 3rem;
        margin-right: 5.1rem
    }

`;