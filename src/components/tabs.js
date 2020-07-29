import React, { useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import ImageDoor from '../components/tabs-navigation/tab-door';
import DeviceImage from '../components/tabs-navigation/tab-devices';
import PriceImage from '../components/tabs-navigation/tab-price';
import '../styles/TabsNav.css';

const TabsComponent = (props) => {

    const [tabIndex, setTabIndex] = useState(0)


  return (
    <div>
      <Tabs className='tabs' selectedIndex={tabIndex} onSelect={tabIndex=>setTabIndex(tabIndex)}>
        <TabList className='tab-nav-container'>
          <Tab className={`${tabIndex === 0? 'active': null}`}>
            <ImageDoor />{' '}
            <p><strong>No commitments <br/> cancel online at anytime</strong></p>
          </Tab>
          <Tab className={`${tabIndex === 1? 'active': null}`}>
            <DeviceImage />
            <p style={{marginTop:"-5.3125rem"}}><strong>Watch anywhere</strong></p>
          </Tab>
          <Tab className={`${tabIndex === 2? 'active': null}`}>
            <PriceImage />
            <p><strong>Pick Your Price</strong></p>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
