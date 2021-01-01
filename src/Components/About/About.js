
import './About.css';
import { useHistory } from 'react-router-dom';


function About() {
  const history = useHistory();
 
 return (
  <div className ="container">
        <div className ="banner">
            <h3>Who we are</h3>
        </div>
        <div className ="content">
           
         <p>KidsZone is a platform where you can learn something new everyday in a safe 
            environment. It is a educational and engaging website for children that fall in age group of 8-15 yrs.It is a place
            where you can find a mentor or become one. </p>
          </div>
        <div className ="banner">
            <h3>What we offer</h3>
        </div>
        <div className ="content">
          <p>We offer engagement in two categories.One is online while there are few that can be availed on premise.
            All these engagement has a maximum occupancy limit based on its category and available resources. </p>
               
        </div>
       
        <div className="row activity_section">
       
            <div className="col-12 col-md-4 col-xl-3  img-text online-dance-img">
            <button className="button btn btn-info" onClick={() => history.push('/activityList')}>Read More..</button>
            </div>
      
            <div className="col-12 col-md-4 col-xl-3 img-text premise-drummer-img">
            <button className="button btn btn-info" onClick={() => history.push('/activityList')}>Read More..</button>
            </div>
      
        </div>
        <div className ="banner">
            <h3>Want to Mentor</h3>
        </div>
        <div className ="content">
           
            <p>If you wish to be a mentor than we offer engagement in two categories.One is online while there are few where you can mentor on premise.
            All these engagement has a maximum occupancy limit based on its category and available resources.You can plan the activities based on your schedule and publish same.
            Also you can have a look at the bookings for your planner.</p>
               
        </div>

        <div className="row activity_section">
       
              <div className="col-12 col-md-4 col-xl-3 mentor-img">
              <button className="button btn btn-info" onClick={() => history.push('/classes')}>Read More..</button>
              </div>
 
        </div>

       </div>
);
 }
export default About;