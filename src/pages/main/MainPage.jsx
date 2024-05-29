import Category from './components/Category';
import MainTitle from './components/MainTitle';
import Teer from './components/Teer';
import { MainPageLayout } from './style';

const MainPage = () => {
  return (
    <MainPageLayout>
      <MainTitle />
      <Category />
      <Teer />
    </MainPageLayout>
  );
};

export default MainPage;
