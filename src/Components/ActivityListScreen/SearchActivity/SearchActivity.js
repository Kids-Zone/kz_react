import './SearchActivity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchActivity(props) {

  return (
  <div className="row">
            <section class="Search_section">
                <label className="category">Category</label>
                <select>
                    <option>-Select-</option>
                    <option>Online</option>
                    <option>Premise</option>
                </select>
                <input className="search_activities" id="search_activities" type="text"></input><FontAwesomeIcon className="search-icon" icon={faSearch}/>
            </section>
        </div>
  )};

  export default SearchActivity;