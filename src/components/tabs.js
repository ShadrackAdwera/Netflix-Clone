import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ImageDoor from '../components/tabs-navigation/tab-door';
import DeviceImage from '../components/tabs-navigation/tab-devices';
import PriceImage from '../components/tabs-navigation/tab-price';
import TabContentOne from '../components/tab-content/tab-content-one'
import TabContentTwo from '../components/tab-content/tab-content-two'
import TabContentThree from '../components/tab-content/tab-content-three'
import '../styles/TabsNav.css';

const TabsComponent = (props) => {

    const [tabIndex, setTabIndex] = useState(0)


  return (
    <div>
      <Tabs className='tabs' selectedIndex={tabIndex} onSelect={tabIndex=>setTabIndex(tabIndex)}>
        <TabList className='tab-nav-container'>
          <Tab className={`${tabIndex === 0? 'tab-selected active': null}`}>
            <ImageDoor />{' '}
            <p className='lg-screen' style={{marginBottom:'1.875rem'}}><strong>No commitments <br/> cancel online at anytime</strong></p>
            <br/>
            <span className='md-screen' style={{marginTop:'0.4rem'}}>Cancel</span>
          </Tab>
          <Tab className={`${tabIndex === 1? 'tab-selected active': null}`}>
            <DeviceImage />
            <p className='lg-screen' style={{marginTop:"-5.3125rem"}}><strong>Watch anywhere</strong></p>
            <span className='md-screen' style={{marginTop:'-3.7125rem'}}>Devices</span>
          </Tab>
          <Tab className={`${tabIndex === 2? 'tab-selected active': null}`}>
            <PriceImage />
            <p className='lg-screen'><strong>Pick Your Price</strong></p>
            <br/>
            <span className='md-screen'>Price</span>
          </Tab>
        </TabList>
        <TabPanel>
            <TabContentOne/>
        </TabPanel>
        <TabPanel>
            <TabContentTwo/>
        </TabPanel>
        <TabPanel>
            <TabContentThree/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
