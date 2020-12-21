import './ActivityListScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ActivityListScreen(props) {

  return (
    <main>
        <div>
            <section class="Search_section">
                <label>Category</label>
                <select>
                    <option>Online</option>
                    <option>Premise</option>
                </select>
                <input className="search_activities" id="search_activities" type="text"></input><FontAwesomeIcon className="search-icon" icon={faSearch}/>
            </section>
        </div>
        <div class="activity_section ">
            <section class = "all-activity-image online-dance-img">
                <div class="img-text">
                <h3>Dance </h3>
                <h5>Days :Monday to Friday</h5>
                <h5>Max Occupants : 10</h5>
                <button class="button btn btn-info">Read More..</button>
                </div>
            </section>
            <section class = "all-activity-image online-art-img">
                <div class="img-text">
                <h3>Craft </h3>
                <h5>Days :Monday to Friday</h5>
                <h5>Max Occupants : 10</h5>
                <button class="button btn btn-info">Read More..</button>
                </div>
            </section> 
            <section class = "all-activity-image premise-drummer-img">
                <div class="img-text">
                <h3>Drumming</h3>
                <h5>Days:Monday - Wednesday</h5>
                <h5>Max Occupants : 4</h5>
                <button class="button btn btn-info">Read More..</button>
            </div>
            </section>
            <section  class = "all-activity-image premise-cooking-img">
                <div class="img-text">
                <h3>Cooking</h3>
                <h5>Days:Tuesday - Thursday</h5>
                <h5>Max Occupants : 6</h5>
                <button class="button btn btn-info">Read More..</button>
                </div>
            </section> 
        </div>
    </main>
  );
}

export default ActivityListScreen;