import { useState } from "react";
import { Tabs, Tab, TabPanel } from "../../components/tab/slide-Tab";
import TopBar from "../../components/top-bar/top-Bar"
import DefaultImage from '@/assets/Default-Image.svg';
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
          인증페이지
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          기록페이지
        </TabPanel>
      </TabPanelContainer>
    </Wrapper>
  );
}


export default ChallengeRecordPage;