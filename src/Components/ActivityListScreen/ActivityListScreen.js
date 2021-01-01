import './ActivityListScreen.css';
import { useState } from 'react';
import SearchActivity from './SearchActivity/SearchActivity';
import Activity from './Activity/Activity';
import { useLocation } from "react-router-dom";

function ActivityListScreen() {
    const [params ,setCategory] = useState("all")
    const [activityArray ,setActivity] = useState([
        {title :'Dance' ,schedule :'Monday to Friday', maxcount :10, category :'online' ,id :'1'},
        {title :'Craft' ,schedule :'Monday to Friday', maxcount :10 ,category :'online',id :'2'},
        {title :'Drumming' ,schedule :'Monday & Wednesday', maxcount :4 ,category :'premise',id :'3'},
        {title :'Cooking' ,schedule :'Tuesday & Thursday', maxcount :6 ,category :'premise',id :'4'},
        {title :'Writing' ,schedule :'Monday to Friday', maxcount :10 ,category :'online',id :'5'},
        {title :'Reading' ,schedule :'Monday to Friday', maxcount :10,category :'online',id :'6'},
    ])
      const OnlineActivities = activityArray.filter(activity => activity.category === 'online' );
      const PremiseActivities = activityArray.filter(activity => activity.category === 'premise' );
      const location = useLocation();
      const myparam = "all";
    return (
    <main className="container">
        <SearchActivity/>
        <div className="row">
        {
          myparam === 'online' ?
          OnlineActivities.map(activity => <Activity key={activity.id} title={activity.title}
          schedule={activity.schedule} maxcount ={activity.maxcount}/>) :

          myparam === 'premise' ?
          PremiseActivities.map(activity => <Activity key={activity.id} title={activity.title}
          schedule={activity.schedule} maxcount ={activity.maxcount}/>) :

          activityArray.map(activity => <Activity key={activity.id} title={activity.title}
          schedule={activity.schedule} maxcount ={activity.maxcount}/>)
       

        }
        </div>
    </main>
  );
}

export default ActivityListScreen;