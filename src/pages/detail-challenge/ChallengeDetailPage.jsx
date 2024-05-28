import { useState } from "react";
import { Tabs, Tab, TabPanel } from "../../components/tab/slide-Tab";
import Page2 from "./page2";
import Page1 from "./page1";

import {
  TabsContainer,
  TabPanelContainer,
} from "./styles";


const ChallengeDetailPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="챌린지" value={0}></Tab>
          <Tab label="랭킹" value={1}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <Page1 />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <Page2 />
        </TabPanel>
      </TabPanelContainer>
    </div>
  );
}


export default ChallengeDetailPage;