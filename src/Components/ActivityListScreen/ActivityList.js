import Activity from "./Activity/Activity";

const ActivityList = (props) => {
    return props.activities.map((activity) => (
      <Activity
        id={activity.id}
        title={activity.title}
        schedule={activity.schedule}
        maxcount={activity.maxcount}
      />
    ));
  };

  export default ActivityList;