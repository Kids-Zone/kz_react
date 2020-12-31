import "./ActivityListScreen.css";
import { useState } from "react";
import SearchActivity from "./SearchActivity/SearchActivity";
import Activity from "./Activity/Activity";

function ActivityListScreen() {
  const [activityArray, setActivity] = useState([
    {
      title: "Dance",
      schedule: "Monday to Friday",
      maxcount: 10,
      category: "online",
      id: "1",
    },
    {
      title: "Craft",
      schedule: "Monday to Friday",
      maxcount: 10,
      category: "online",
      id: "2",
    },
    {
      title: "Drumming",
      schedule: "Monday & Wednesday",
      maxcount: 4,
      category: "premise",
      id: "3",
    },
    {
      title: "Cooking",
      schedule: "Tuesday & Thursday",
      maxcount: 6,
      category: "premise",
      id: "4",
    },
    {
      title: "Writing",
      schedule: "Monday to Friday",
      maxcount: 10,
      category: "online",
      id: "5",
    },
    {
      title: "Reading",
      schedule: "Monday to Friday",
      maxcount: 10,
      category: "online",
      id: "6",
    },
  ]);
  const OnlineActivities = activityArray.filter(
    (activity) => activity.category === "online"
  );
  const PremiseActivities = activityArray.filter(
    (activity) => activity.category === "premise"
  );

  return (
    <main className="container">
      <SearchActivity />
      <div className="row">
        {activityArray.map((activity) => (
          <Activity
            key={activity.id}
            title={activity.title}
            schedule={activity.schedule}
            maxcount={activity.maxcount}
          />
        ))}
      </div>
    </main>
  );
}

export default ActivityListScreen;
