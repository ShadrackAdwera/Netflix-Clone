import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'

const TabContentThree = () => {
   return <TabContainer>
    <div className='tab-content'>
        <div className='tab-top-content'>
        <span>
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

`;