import React, { useEffect, useState } from 'react';

import { getChallengeList } from '../../apis/list-challenge/list.challenge.api';
import { Text } from '../rank/styles';
import CategoryButton from './components/CategoryButton';
import Contents from './components/Contents';
import * as Styles from './styles';
import Header from '@/components/header/Header';

const ChallengeList = () => {
  const [listChallenges, setListChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const challenges = await getChallengeList(0, 10); // Example: fetch the first page with 10 items
        setListChallenges(challenges.data.data);
        console.log(listChallenges);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchChallenges();
  }, []);

  return (
    <>
      <Header title='챌린지 목록' BackgroundColor='#fff' />
      <Styles.ChallengeListLayout>
        <CategoryButton />
        {listChallenges.length > 0 ? (
          listChallenges.map((challenge) => (
            <Contents key={challenge.id} challenge={challenge} />
          ))
        ) : (
          <Text>챌린지를 불러올 수 없습니다.</Text> // Display a message if no listChallenges are available
        )}
      </Styles.ChallengeListLayout>
    </>
  );
};

export default ChallengeList;
