import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Classes } from "./Components/Classes/Classes";
import Availability from "./Components/Availability/Availability";
import ActivityListScreen from "./Components/ActivityListScreen/ActivityListScreen";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import ActivityScreen from "./Components/ActivityScreen/ActivityScreen";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          {/* <Route
            path="/"
            exact
            render={(props) => <Body {...props} page="HomeScreen" />}
          /> */}
          <Route path="/" exact component={HomeScreen} />
          <Route path="/classes" exact component={Classes} />
          <Route path="/availability" exact component={Availability} />
          {/* <Route
          path="/activityList"
          exact
          render={(props) => <Body {...props} page="ActivityListScreen" />}
          />
          <Route
          path="/activityChosen"
          exact
          render={(props) => <Body {...props} page="ActivityScreen" />}
          /> */}
          <Route path="/activityList" exact component={ActivityListScreen} />
          <Route path="/activityChosen" exact component={ActivityScreen} />
          <Route path="/about" exact component={About} />
          
         
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
