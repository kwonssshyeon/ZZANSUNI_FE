import Category from './components/Category';
import MainTitle from './components/MainTitle';
import Review from './components/Review';
import Strick from './components/Strick';
import Teer from './components/Teer';
import { MainPageLayout } from './style';

const MainPage = () => {
  return (
    <MainPageLayout>
      <MainTitle />
      <Category />
      <Teer />
      <Strick />
      <Review />
    </MainPageLayout>
  );
};

export default MainPage;
