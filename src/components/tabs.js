import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import ImageDoor from '../components/tabs-navigation/tab-door'
import '../styles/TabsNav.css'

const TabsComponent = (props) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab><ImageDoor/></Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
