
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Body page='HomeScreen'/>  */}
      <Body page='ActivityListScreen'/> 
       {/* <Body page='ActivityScreen'/>  */}
      <Footer/>
    </div>
  );
}

export default App;
