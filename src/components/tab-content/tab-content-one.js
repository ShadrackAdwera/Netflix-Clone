import React from 'react'
import TabOneImage from '../../images/tab-1-pic.png'

const TabContentOne = props => {
return (
    <div>
        <div className='container'>
            <div className='tab-content'>
                <span>
                    If you decide Netflix isn't for you - No problem, No commitment. Cancel online anytime. 
                </span>
                <button>Try it now</button>
                <img src = {TabOneImage} alt='Tab One'/>
            </div>

        </div>
    </div>
)
}

export default TabContentOne