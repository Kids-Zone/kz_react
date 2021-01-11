import "./ActivityListScreen.css";
import { useState } from "react";
import SearchActivity from "./SearchActivity/SearchActivity";
import { useLocation } from "react-router-dom";
import Activity from "./Activity/Activity";
import ActivityAPI from "../../services/activity-api";

const ActivityListScreen = (props) => {
  const activities = ActivityAPI.getAll();

  let location = useLocation()
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

  const activityList = filteredActivities.map((activity) => (
    <Activity
      id={activity.id}
      title={activity.title}
      schedule={activity.schedule}
      maxcount={activity.maxcount}
    />
  ));

  const updateSearch = (newCategory) => {
    const queryParams = new URLSearchParams(location.search)
    queryParams.set("category", newCategory)
    props.history.push({
      pathname: location.pathname,
      search: queryParams.toString()
})
  }

  return (
    <main className="container">
      <div className="row">
        <section class="Search_section">
          <label className="category">Category</label>
          <select
            onChange={(e) => {
              updateSearch(e.target.value);
              // setCategory(e.target.value);
            }}
            defaultValue={category}
          >
            <option value="">All</option>
            <option value="online">Online</option>
            <option value="premise">Premise</option>
          </select>
          <input
            className="search_activities"
            id="search_activities"
            type="text"
          ></input>
          <div className="row">
            <div className="col">
              <h3 className="text-center">Welcome to Activity Area</h3>
            </div>
          </div>
        </section>
      </div>
      <div className="row">{activityList}</div>
    </main>
  );
};

export default ActivityListScreen;
