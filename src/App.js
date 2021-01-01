import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Classes } from "./Components/Classes/Classes";
import Availability from "./Components/Availability/Availability";
import SessionOverviewDance from "./Components/SessionOverview/SessionOverviewDance";
import SessionOverviewDrum from "./Components/SessionOverview/SessionOverviewDrum";
import ActivityListScreen from "./Components/ActivityListScreen/ActivityListScreen";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import SessionOverview from "./Components/SessionOverview/SessionOverview";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/classes" exact component={Classes} />
          <Route path="/availability" exact component={Availability} />
          <Route path="/activities" exact component={ActivityListScreen} />
          <Route exact path="/activities/cooking" component={SessionOverview} />         
          <Route exact path="/activities/dance" component={SessionOverviewDance} />
          <Route exact path="/activities/drumming" component={SessionOverviewDrum} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
