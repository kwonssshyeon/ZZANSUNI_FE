import { useState } from "react";
import { Tabs, Tab, TabPanel } from "../../components/tab/slide-Tab";
import Ranking from "./ranking/Ranking";
import Description from "./description/Description";
import TopBar from "../../components/top-bar/top-Bar"
import DefaultImage from '@/assets/Default-Image.svg';
import {
  TabsContainer,
  TabPanelContainer,
  Image,
  ImageMask,
  Wrapper,
} from "./styles";


const ChallengeDetailPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <Wrapper>
      <TopBar title={"챌린지 상세"}/>
      <ImageMask><Image  src={DefaultImage} /></ImageMask>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="챌린지" value={0}></Tab>
          <Tab label="랭킹" value={1}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <Description />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <Ranking />
        </TabPanel>
      </TabPanelContainer>
    </Wrapper>
  );
}


export default ChallengeDetailPage;