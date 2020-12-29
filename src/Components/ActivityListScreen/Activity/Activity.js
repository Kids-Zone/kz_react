import './Activity.css';
import { useHistory } from 'react-router-dom';

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
                <button className="button btn btn-info" onClick={() => history.push('/activityChosen')}>Read More..</button>
            </div>
            </div>
  )};

  export default Activity;