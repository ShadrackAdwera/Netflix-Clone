import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ImageDoor from '../components/tabs-navigation/tab-door';
import DeviceImage from '../components/tabs-navigation/tab-devices';
import PriceImage from '../components/tabs-navigation/tab-price';
import TabContentOne from '../components/tab-content/tab-content-one'
import TabContentTwo from '../components/tab-content/tab-content-two'
import '../styles/TabsNav.css';

const TabsComponent = (props) => {

    const [tabIndex, setTabIndex] = useState(0)


  return (
    <div>
      <Tabs className='tabs' selectedIndex={tabIndex} onSelect={tabIndex=>setTabIndex(tabIndex)}>
        <TabList className='tab-nav-container'>
          <Tab className={`${tabIndex === 0? 'tab-selected active': null}`}>
            <ImageDoor />{' '}
            <p style={{marginBottom:'1.875rem'}}><strong>No commitments <br/> cancel online at anytime</strong></p>
          </Tab>
          <Tab className={`${tabIndex === 1? 'tab-selected active': null}`}>
            <DeviceImage />
            <p style={{marginTop:"-5.3125rem"}}><strong>Watch anywhere</strong></p>
          </Tab>
          <Tab className={`${tabIndex === 2? 'tab-selected active': null}`}>
            <PriceImage />
            <p><strong>Pick Your Price</strong></p>
          </Tab>
        </TabList>
        <TabPanel>
            <TabContentOne/>
        </TabPanel>
        <TabPanel>
            <TabContentTwo/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
