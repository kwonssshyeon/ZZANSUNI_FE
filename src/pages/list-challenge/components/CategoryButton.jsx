import { useState } from 'react';

import { Tab, Tabs } from '../../../components/tab/slide-Tab';
import { Text } from '../../rank/styles';
import { TabsContainer } from '../../record-challenge/styles';
import * as Styles from '../styles';

const CategoryButton = ({ onCategoryChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    // <Styles.ButtonContainer>
    //   <Styles.ButtonChoose onClick={() => onCategoryChange('ECHO')}>
    //     <Text color='#fff'>에코</Text>
    //   </Styles.ButtonChoose>
    //   <Text color='#B8B8B8' onClick={() => onCategoryChange('SHARE')}>
    //     나눔
    //   </Text>
    //   <Text color='#B8B8B8' onClick={() => onCategoryChange('VOLUNTEER')}>
    //     봉사
    //   </Text>
    //   <Text color='#B8B8B8' onClick={() => onCategoryChange('HEALTH')}>
    //     건강
    //   </Text>
    // </Styles.ButtonContainer>
    <>
      <TabsContainer position='static'>
        <Tabs
          selectedTab={activeTab}
          position='relative'
          onChange={handleChange}
        >
          <Tab
            label='에코'
            value={0}
            onClick={() => onCategoryChange('ECHO')}
          ></Tab>
          <Tab
            label='나눔'
            value={1}
            onClick={() => onCategoryChange('SHARE')}
          ></Tab>
          <Tab
            label='봉사'
            value={2}
            onClick={() => onCategoryChange('VOLUNTEER')}
          ></Tab>
          <Tab
            label='건강'
            value={3}
            onClick={() => onCategoryChange('HEALTH')}
          ></Tab>
        </Tabs>
      </TabsContainer>
    </>
  );
};

export default CategoryButton;
