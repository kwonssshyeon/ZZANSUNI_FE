import { useState, useEffect } from 'react';

import { Tabs, Tab, TabPanel } from '../../components/tab/slide-Tab';
import TopBar from '../../components/top-bar/top-Bar';
import Description from './description/Description';
import Ranking from './ranking/Ranking';
import { getChallengeDetail } from '../../apis/detail-challenge/detail.challenge.api';

import {
  TabsContainer,
  TabPanelContainer,
  Image,
  ImageMask,
  Wrapper,
} from './styles';
import DefaultImage from '@/assets/Default-Image.svg';

const ChallengeDetailPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };


  useEffect(() => {
    getChallengeDetail(1).then((res) => {
      setData(res);
      console.log(res);

    })}, []);


  return (
    <Wrapper>
      <TopBar title={"챌린지 상세정보"}/>
      <ImageMask>
      {data ? <Image  src={data.imageUrls[0]} /> : <div><Image  src={DefaultImage} /> </div>}
        
      </ImageMask>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label='챌린지' value={0}></Tab>
          <Tab label='랭킹' value={1}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          {data ? <Description data={data} /> : <div></div>}
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <Ranking title={data.title} category = {data.category}/>
        </TabPanel>
      </TabPanelContainer>
    </Wrapper>
  );
};

export default ChallengeDetailPage;
