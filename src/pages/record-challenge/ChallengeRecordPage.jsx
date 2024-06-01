import { useState } from "react";
import { Tabs, Tab, TabPanel } from "../../components/tab/slide-Tab";
import Verification from "./verification/Verification";
import StampBoard from "./stampboard/StampBoard";
import TopBar from "../../components/top-bar/top-Bar"
import {
  TabsContainer,
  TabPanelContainer,
  Wrapper,
} from "./styles";


const ChallengeRecordPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <Wrapper>
      <TopBar title={"챌린지 기록"}/>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="인증하기" value={0}></Tab>
          <Tab label="기록보기" value={1}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <Verification />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <StampBoard />
        </TabPanel>
      </TabPanelContainer>
    </Wrapper>
  );
}


export default ChallengeRecordPage;