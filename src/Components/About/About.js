
import './About.css';
import { useHistory } from 'react-router-dom';


function About() {
  const history = useHistory();
 
 return (
  <div className ="container-fluid">
        <div className ="banner">
            <h3>Who we are</h3>
        </div>
        <div className ="content">
           
         <p>KidsZone is a platform where you can learn something new everyday in a safe 
            environment. It is a educational and engaging club for children that fall in age group of 8-15 yrs. It is a place
            where you can find a mentor or become one. </p>
          </div>
          <div className ="banner">
          <h4>As we are currently in tier 4 all classes where possible are now offered online.</h4>
          <p>Please view this space for updates and see what's available, sign up facility will be provided shortly. </p>   
        </div>
        <div className ="banner">
            <h3>What we offer</h3>
        </div>
        <div className ="content">
          <p> We've a great space for you to enjoy you can drop in and have chat with friends, listen to some music in the communal area.
              There's also table tennis and pool tables with no booking required.
              We've lots of classes to join, if you can't make it to the club there's also range of activities available online.
              Please drop in and see what we have to offer!</p>
               
        </div>

        <div className="row activity_section">
       
            <div className="col-md6 img-text online-dance-img">
            <button className="button btn btn-info" onClick={() => history.push('/activities')}>Read More..</button>
            </div>
      
            <div className="col-md6 img-text premise-drummer-img">
            <button className="button btn btn-info" onClick={() => history.push('/activities')}>Read More..</button>
            </div>
      
        </div>
        <div className ="banner">
            <h3>Want to Mentor</h3>
        </div>
        <div className ="content">
           
            <p>If you wish to be a mentor then we can offer many opportunities. Either online teaching or mentoring at the club. Some classes as you know
                work better in person! All our teachers are CRB/DBS checked and fully qualified in their field. </p>
            <p>
            All classes have a maximum occupancy limit based on category and available resources. 
            You can plan the activities based on your schedule and publish availability.</p>
               
        </div>

        <div className="row activity_section">
       
              <div className="col-12 img-text mentor-img">
              <button className="button btn btn-info" onClick={() => history.push('/classes')}>Read More..</button>
              </div>
 
        </div>

       </div>
);
 }
export default About;