import './App.css';
import Footer from './components/footer/FooterMain';
import NavBar from './components/nav_bar/NavBar';
import Routs from './components/routes/Routes';




const App = (props) => {

  return (
    <div className={"App"}>
       <NavBar/>
       <Routs/>
       <Footer/>
    </div>
    
  );
}

export default App;
