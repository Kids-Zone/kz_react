import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Classes } from "./Components/Classes/Classes";
import Mentoring from "./Components/Teaching/Teaching";
import Availability from "./Components/Availability/Availability";
import ActivityListScreen from "./Components/ActivityListScreen/ActivityListScreen";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import About from "./Components/About/About";
import Register from "./Components/Registration/Register";
import ActivityDetail from "./Components/SessionOverview/ActivityDetail";
import Login from "./Components/Registration/Login";
import SignUp from "./Components/Registration/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/mentoring" exact component={Mentoring} />
          <Route path="/register" exact component={Register} />
          <Route path="/classes" exact component={Classes} />
          <Route path="/availability" exact component={Availability} />
          <Route path="/activities" exact component={ActivityListScreen} />
          <Route path="/activities/:id" component={ActivityDetail} />
          <Route exact path="/about" component={About} />
          <Route path="/sign-in" exact component={Login} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
