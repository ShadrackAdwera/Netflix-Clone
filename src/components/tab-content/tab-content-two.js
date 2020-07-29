import React from 'react'
import { Button } from '../Button'
import styled from 'styled-components'
import TvImage from '../../images/tab-tv.png'
import TabletImage from '../../images/tab-tablet.png'
import MacbookImage from '../../images/tab-macbook.png'

const TabContentTwo = () => {
return (
    <TabContainer>
        <div className='tab-content'>
            <div className='tab-top-content'>
                <span style={{fontSize:'1.5rem'}}> Watch TV Shows and Movies anytime, anywhere - personalized for you</span>
                <Button className='btn'>Try it Now</Button>
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
        padding: 2.5rem 0
    }

    span {
        grid-column: 1 / 8;

    }

    .btn {
        margin: 0 1.25rem 1.25rem;
        grid-column: 10 / 12;
    }

    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
    }

    p {
        color: var(--main-grey)
    }
    h3 {
        margin: 0.5rem 0;
    }

`;