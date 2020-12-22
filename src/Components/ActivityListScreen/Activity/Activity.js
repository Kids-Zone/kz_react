import './Activity.css';

function Activity(props) {
     
  return (
    
            <div className="col-sm-3 img-text ">
                <h3>{props.title} </h3>
                <h5>Days :{props.schedule}</h5>
                <h5>Max Occupants :{props.maxcount}</h5>
                <button className="button btn btn-info">Read More..</button>
            </div>
  )};

  export default Activity;