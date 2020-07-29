import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import ImageDoor from '../components/tabs-navigation/tab-door'
import DeviceImage from '../components/tabs-navigation/tab-devices'
import PriceImage from '../components/tabs-navigation/tab-price'
import '../styles/TabsNav.css'

const TabsComponent = (props) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab><ImageDoor/></Tab>
          <Tab><DeviceImage/></Tab>
          <Tab><PriceImage/></Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
