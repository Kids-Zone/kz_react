import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Body from "./Components/Body/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Classes } from "./Components/Classes/Classes";
import Availability from "./Components/Availability/Availability";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Body {...props} page="HomeScreen" />}
          />
          <Route path="/classes" exact component={Classes} />
          <Route path="/availability" exact component={Availability} />
          {/* <Body page='ActivityListScreen'/>  */}
          {/* <Body page='ActivityScreen'/>  */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
