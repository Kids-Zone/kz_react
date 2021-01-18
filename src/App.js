import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Classes } from "./Components/Classes/Classes";
import Mentoring from "./Components/Mentoring/Mentoring";
import Availability from "./Components/Availability/Availability";
import kidsavailability from "./Components/Availability/kids-availability";
import ActivityListScreen from "./Components/ActivityListScreen/ActivityListScreen";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import About from "./Components/About/About";
import Register from "./Components/Registration/Register";
import ActivityDetail from "./Components/SessionOverview/ActivityDetail";
import PostLogin from "./Components/PostLogin/PostLogin";
import { useAuth0 } from "@auth0/auth0-react";
import MembershipValidation from "./Components/Registration/MembershipValidation";
import Profile from "./Components/Profile/Profile";


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/mentoring" exact component={Mentoring} />
          <Route path="/register" exact component={Register} />
          <Route path="/classes" exact component={Classes} />
          <Route path="/availability" exact component={Availability} />
          <Route path="/kidsavailability" exact component={kidsavailability} />
          <Route path="/activities" exact component={ActivityListScreen} />
          <Route path="/activities/:id" component={ActivityDetail} />
          <Route exact path="/about" component={About} />
          <Route path="/membership-validation" exact component={MembershipValidation} />
          <Route path="/PostLogin" exact component={PostLogin} />
          {/* <Route path="/profile/:role" exact component={Profile} /> */}
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
