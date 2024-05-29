import Strick from '../main/components/Strick';
import { TeerCurrent, TeerTotal } from '../main/components/styles';
import Record from './components/Record';
import UserInfo from './components/UserInfo';
import * as Styles from './styles';
import Header from '@/components/header/Header';

const Dashboard = () => {
  return (
    <>
      <Header title='대시보드' />
      <Styles.DashBoardLayout>
        <UserInfo />
        <Record />
        <Strick />
      </Styles.DashBoardLayout>
    </>
  );
};

export default Dashboard;
