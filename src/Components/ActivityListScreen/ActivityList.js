import Activity from "./Activity/Activity";

const ActivityList = (props) => {
    return props.activities.map((a) => (
      <Activity
        id={a.activity_id}
        title={a.activity_name}
        schedule={a.activity_schedule}
        maxcount={a.max_occupancy}
        category={a.category}
      />
      
    ));
  };

  export default ActivityList;