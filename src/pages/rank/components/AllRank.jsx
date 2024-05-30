import { Text } from '../styles';
import HighRank from './HighRank';
import UserRank from './UserRank';
import * as Styles from './styles';

const AllRank = () => {
  return (
    <>
      <Styles.AllRankLayout>
        <Text fs='1.25rem' fw='700' color='#457A82'>
          전체 순위
        </Text>
        <Styles.HighRankContainer>
          <HighRank grade='1' />
          <HighRank grade='2' />
          <HighRank grade='3' />
        </Styles.HighRankContainer>
        <Styles.AllRankContainer>
          <UserRank />
          <UserRank />
          <UserRank />
          <UserRank />
          <UserRank />
          <UserRank />
        </Styles.AllRankContainer>
      </Styles.AllRankLayout>
    </>
  );
};

export default AllRank;
