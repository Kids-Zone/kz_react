import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';

function App(screenName) {
  return (
    <div className="App">
      <Header/>
     <Body page='HomeScreen'/>
       {/* <Body page='ActivityDetailScreen'/>  */}
       {/* <Body page='kidsZoneScreen'/>  */}
      <Footer/>
    </div>
  );
}

export default App;
