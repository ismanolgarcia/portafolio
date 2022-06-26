import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Projects from './projects/Projects';
function TabsProjects() {
  return (
    <div>
      <Tabs isFitted variant="enclosed" mt="40px">
        <TabList mb="1em">
          <Tab>Frontend</Tab>
          <Tab>Backend</Tab>
        </TabList>
        <TabPanels>
          <TabPanel >
            <Projects />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default TabsProjects;
