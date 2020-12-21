
import './Body.css';
import HomeScreen from '../HomeScreen/HomeScreen';
import ActivityDetailScreen from '../ActivtityDetailsScreen/ActivityDetailScreen';

function Body(props) {
  return (
      <div>
            {props.page === 'HomeScreen' && <HomeScreen/> }
            {props.page === 'ActivityDetailScreen' && <ActivityDetailScreen/>}

      </div>  
    );
}

export default Body;
