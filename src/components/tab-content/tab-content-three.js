import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {ic_done} from 'react-icons-kit/md/ic_done'
import {ic_clear} from 'react-icons-kit/md/ic_clear'
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
        <div className='tab-bottom-content'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Basic</th>
                        <th>Standard</th>
                        <th>Premium</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monthly Price</td>
                        <td>Ksh.400</td>
                        <td>Ksh.600</td>
                        <td>Ksh.800</td>
                    </tr>
                    <tr>
                        <td>HD Available</td>
                        <td><Icon icon={ic_clear} size={16}/></td>
                        <td><Icon icon={ic_done} size={16}/></td>
                        <td><Icon icon={ic_done} size={16}/></td>
                    </tr>
                    <tr>
                        <td>Ultra HD Available</td>
                        <td><Icon icon={ic_clear} size={16}/></td>
                        <td><Icon icon={ic_clear} size={16}/></td>
                        <td><Icon icon={ic_done} size={16}/></td>
                    </tr>
                    <tr>
                        <td>Screens you can watch on at the same time</td>
                        <td>1</td>
                        <td>2</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Watch on your laptop, TV, Phone and Tablet</td>
                        <td><Icon icon={ic_done} size={16}/></td>
                        <td><Icon icon={ic_done} size={16}/></td>
                        <td><Icon icon={ic_done} size={16}/></td>
                    </tr>
                    <tr>
                        <td>Unlimited Movies and TV Shows</td>
                        <td><Icon icon={ic_done} size={16}/></td>
                        <td><Icon icon={ic_done} size={16}/></td>
                        <td><Icon icon={ic_done} size={16}/></td>
                    </tr>
                    <tr>
                        <td>Cancel Anytime</td>
                        <td><Icon icon={ic_done} size={16}/></td>
                        <td><Icon icon={ic_done} size={16}/></td>
                        <td><Icon icon={ic_done} size={16}/></td>
                    </tr>
                </tbody>
            </table>
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
        grid-column: 3 / 9;
    }
    .btn {
        grid-column: 9 / 12;
        margin-left: 3rem;
        margin-right: 5.1rem
    }
    .tab-bottom-content {
        margin: 2rem;
    }
    table {
        width: 80%;
        margin: 2rem 15% 2rem 15%;
        border-collapse: collapse;
    }
    table thead {
        text-transform: uppercase;
        padding: 0.8rem;
    }
    table tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    table tbody tr td {
        color: #999;
        padding: 0.8rem 1.2rem;
        text-align: center;
    }
    table tbody tr td:first-child {
        text-align: left;
    }
    table tbody tr:nth-child(even) {
        background: #222;
    }

`;