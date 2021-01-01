
import './Offering.css';
import { Link,useHistory } from 'react-router-dom';

function Offering(props) {
   const history = useHistory();
   const category =props.category ;
   const type =props.type ;
  return (
          <section>
               {category === 'online' && type === 'activity' && <div className="img activity-online-img"></div>}
               {category === 'premise' && type === 'activity' && <div className="img activity-premise-img"></div>}
               {category === 'online' && type === 'mentoring' && <div className="img mentor-online-img"></div>}
               {category === 'premise' && type === 'mentoring' && <div className="img mentor-premise-img"></div>}
            <div className="activity-text">

               {category === 'online' && type === 'activity' && <h4>Online Activities</h4> }
               {category === 'premise' && type === 'activity' && <h4>Premise Activities</h4>}
               {category === 'online' && type === 'mentoring' && <h4>Online Mentoring</h4>}
               {category === 'premise' && type === 'mentoring' && <h4>Premise Mentoring</h4>}
           { type === 'activity' && 
            <Link to={`/activities`}>
           <button className="button btn btn-info" >View</button>
           </Link>
           }
           { type === 'mentoring' && 
            <Link to={`/classes`}>
           <button className="button btn btn-info" >View</button>
           </Link>
           }
            </div>
        </section> 
  );
}

export default Offering;
