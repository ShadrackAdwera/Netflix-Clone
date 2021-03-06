import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query";
import TvImage from '../../images/tab-tv.png'
import TabletImage from '../../images/tab-tablet.png'
import MacbookImage from '../../images/tab-macbook.png'
import { Button } from '../Button'

const TabContentTwo = () => {

    const history = useHistory()
return (
    <TabContainer>
        <div className='tab-content'>
            <div className='tab-top-content'>
                <span style={{fontSize:'1.5rem'}}> Watch TV Shows and Movies anytime, anywhere - personalized for you</span>
                <Button className='btn' onClick={()=> history.push('/plan')}>Try it Now</Button>
                </div>
                <div className='tab-bottom-content'>
                    <div>
                <img src={TvImage} alt='Tv' style={{width:'18.75rem'}}/>
                <h3>Watch on TV</h3>
                <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div>
                <img src={TabletImage} alt='Tv' style={{width:'18.75rem', paddingTop:'0.625rem', paddingBottom:'0.625rem'}}/>
                <h3>Watch instantly or download for later</h3>
                <p>Available on phone and tablet wherever you go.</p>
                    </div>
                    <div>
                <img src={MacbookImage} alt='Tv' style={{width:'18.75rem', paddingTop:'0.625rem', paddingBottom:'0.625rem'}}/>
                <h3>Use any computer</h3>
                <p>Watch right on Netflix.com</p>
                    </div>
                </div>

        </div>
    </TabContainer>
)
}

export default TabContentTwo

//Media Queries
const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '900px',
})

const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
    }

    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        ${customMedia.lessThan('smDesktop')`
        grid-template-columns: repeat(2, 1fr);
        `}
        ${customMedia.lessThan('tablet')`
        grid-template-columns: 1fr;
        text-align: center;
        row-gap: 1.5rem;
        `}
    }

    span {
        grid-column: 1 / 8;
        ${customMedia.lessThan('tablet')`
        grid-column: 1 / -1;
        font-size: 1.5rem;
        `}
    }

    .btn {
        margin: 0 1.25rem 1.25rem;
        grid-column: 10 / 12;
        ${customMedia.lessThan('tablet')`
        grid-column: 1 / -1;
        margin-left: 30%;
        margin-right: 30%
        `}
    }

    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
        ${customMedia.lessThan('tablet')`
        grid-template-columns: 1fr
        `}
    }

    p {
        color: var(--main-grey)
    }
    h3 {
        margin: 0.5rem 0;
    }

`;