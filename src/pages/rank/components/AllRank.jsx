import { useState, useEffect, useCallback } from 'react';

import { Text } from '../styles';
import HighRank from './HighRank';
import UserRank from './UserRank';
import * as Styles from './styles';
import { getUserRanking } from '@/apis/rank/rank.api';
import UserDummy from '@/constants/Dummy.js';

const AllRank = () => {
  const [userRanks, setUserRanks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllRank = useCallback(async () => {
    try {
      const response = await getUserRanking(1, 10);
      const data = response.data;
      setUserRanks(data.data);
      setLoading(false);
      console.log('fetchAllRank data: ', data);
      // console.log(userRanks);
    } catch (error) {
      console.error('fetchAllRank error: ', error);
    }
  }, []);

  useEffect(() => {
    fetchAllRank();
  }, [fetchAllRank]);

  return (
    <>
      <Styles.AllRankLayout>
        <Text fs='1.25rem' fw='700' color='#457A82'>
          전체 순위
        </Text>
        <Styles.HighRankContainer>
          {userRanks.slice(0, 3).map((user, index) => (
            <HighRank key={index} grade={(index + 1).toString()} user={user} />
          ))}
        </Styles.HighRankContainer>
        <Styles.AllRankContainer>
          {userRanks.slice(3).map((user, index) => (
            <UserRank key={index} index={index} user={user} />
          ))}
        </Styles.AllRankContainer>
      </Styles.AllRankLayout>
    </>
  );
};

export default AllRank;
