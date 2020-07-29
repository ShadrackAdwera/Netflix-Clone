import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import ImageDoor from '../components/tabs-navigation/tab-door';
import DeviceImage from '../components/tabs-navigation/tab-devices';
import PriceImage from '../components/tabs-navigation/tab-price';
import '../styles/TabsNav.css';

const TabsComponent = (props) => {
  return (
    <div>
      <Tabs className='tabs'>
        <TabList className='tab-nav-container'>
          <Tab>
            <ImageDoor />{' '}
            <p><strong>No commitments <br/> cancel online at anytime</strong></p>
          </Tab>
          <Tab>
            <DeviceImage />
            <p style={{marginTop:"-5.3125rem"}}><strong>Watch anywhere</strong></p>
          </Tab>
          <Tab>
            <PriceImage />
            <p><strong>Pick Your Price</strong></p>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
