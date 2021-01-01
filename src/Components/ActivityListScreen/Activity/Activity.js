import './Activity.css';
import { Link, useHistory } from 'react-router-dom';

function Activity(props) {
  const history = useHistory();
  return (
    
            <div className="col-12 col-md-4 col-xl-3 img-text">
              <div className="card-body" style={{ width: "200px" }}>
                <h5>{props.title} </h5>
                <ul className="list-unstyled">
                  <li>Days :{props.schedule}</li>
                  <li>Max Occupants :{props.maxcount}</li>
                </ul>
                <Link to={`/activities/${props.title}`}>
                <button className="button btn btn-info">Read More about {props.title}</button>
                </Link>
                
                
                <Link to="/activityList"/>
            </div>
            </div>
  )};

  export default Activity;