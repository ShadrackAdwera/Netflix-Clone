import React from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';

const TabsComponent = (props) => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
