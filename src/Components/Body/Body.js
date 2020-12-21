
import './Body.css';
import HomeScreen from '../HomeScreen/HomeScreen';
import ActivityListScreen from '../ActivityListScreen/ActivityListScreen';
import ActivityScreen from '../ActivityScreen/ActivityScreen'

function Body(props) {
  return (
      <div>
             {props.page === 'HomeScreen' && <HomeScreen/> }
            {props.page === 'ActivityListScreen' && <ActivityListScreen/>} 
            {props.page === 'ActivityScreen' && <ActivityScreen/>}

      </div>  
    );
}

export default Body;
