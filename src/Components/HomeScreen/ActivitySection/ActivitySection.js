
import './ActivitySection.css';

function ActivitySection(props) {
  return (
          <section>
               {props.category === 'online' && props.type === 'activity' && <div className="img activity-online-img"></div>}
               {props.category === 'premise' && props.type === 'activity' && <div className="img activity-premise-img"></div>}
               {props.category === 'online' && props.type === 'mentoring' && <div className="img mentor-online-img"></div>}
               {props.category === 'premise' && props.type === 'mentoring' && <div className="img mentor-premise-img"></div>}
            <div className="activity-text">

               {props.category === 'online' && props.type === 'activity' && <h4>Online Activities</h4> }
               {props.category === 'premise' && props.type === 'activity' && <h4>Premise Activities</h4>}
               {props.category === 'online' && props.type === 'mentoring' && <h4>Online Mentoring</h4>}
               {props.category === 'premise' && props.type === 'mentoring' && <h4>Premise Mentoring</h4>}
            <button className="button btn btn-info">View</button>
            </div>
        </section> 
  );
}

export default ActivitySection;
