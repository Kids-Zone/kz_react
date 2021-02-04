import "./ActivityListScreen.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ActivityList from "./ActivityList";
import ActivityAPI from "../../services/activity-api";

const ActivityListScreen = (props) => {

  const[activities, setActivities] = useState([])
  const [loaded, isLoaded] = useState(true)

  useEffect(() => {
    ActivityAPI.getAll().then((data)=>setActivities(data));
    isLoaded(true)
  },[loaded]);

  let location = useLocation();
  let categoryQuery = new URLSearchParams(useLocation().search).get("category");

  const [category, setCategory] = useState("");

  if (categoryQuery != null && category !== categoryQuery) {
    setCategory(categoryQuery);
  }

  const filteredActivities = activities.filter((activity) => {
    return (
      category === "" ||
      activity.category.toUpperCase() === category.toUpperCase()
    );
  });

  const updateSearch = (newCategory) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("category", newCategory);
    props.history.push({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  };

  return (
    <main className="container">
      <div className="row">
        <section class="Search_section">
          <div className="row">
            <div className="col">
              <h3 className="text-center">Welcome to Activity Area</h3>
            </div>
          </div>
               <b>Category </b>
          <select
            onChange={(e) => {
              updateSearch(e.target.value);
            }}
            defaultValue={category}
          >
            <option value="">All</option>
            <option value="online">Online</option>
            <option value="premise">Premise</option>
          </select>
        </section>
      </div>
      <div className="row"><ActivityList activities={filteredActivities}/></div>
    </main>
  );
};



export default ActivityListScreen;
