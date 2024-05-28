import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../../../components/tab/tabs";
import Page2 from "./page2";
import Page1 from "./page1";

const TabsContainer = styled.div`
  display: flex;
  align-self: center;
  width: 90vw;
  padding: 2px;
  border-radius: 20px;
  background-color: var(--color-green-06);
`;

const TabPanelContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const ChallengeDetailPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Tab 1" value={0}></Tab>
          <Tab label="Tab 2" value={1}></Tab>
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