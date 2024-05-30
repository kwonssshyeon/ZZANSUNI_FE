import AllRank from './components/AllRank';
import MyRank from './components/MyRank';
import * as Styles from './styles';
import Header from '@/components/header/Header';

const RankPage = () => {
  return (
    <>
      <Header title='랭킹' />
      <Styles.RankLayout>
        <Styles.PageLayout>
          <MyRank />
        </Styles.PageLayout>
        <Styles.PageLayout>
          <AllRank />
        </Styles.PageLayout>
      </Styles.RankLayout>
    </>
  );
};

export default RankPage;
