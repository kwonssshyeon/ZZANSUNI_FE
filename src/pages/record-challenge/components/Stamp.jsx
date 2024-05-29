import * as Styles from './styles';
import StampActive from '../../../assets/StampActive.svg';
import StampInActive from '../../../assets/StampInactive.svg';


const Stamp = ({data}) => {
    return (
        <Styles.Stamp src ={StampActive}/>
    );
}


export default Stamp;