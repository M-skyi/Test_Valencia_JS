import AboutAuthorMain from './about_author_modules/AboutAuthorMain';
import './App.css';
import FooterMain from './footer_modules/FooterMain';
import {Router,Route,Link, Routes} from "react-router-dom"
import Analytics from './analytics_main_modules/Analytics';
import NewsMain from './news_main_modules/NewsMain';
import HeaderTop from './header_modules/HeaderTop';
import Header from './header_modules/Header';


const App = () => {
  return (
    <div className={"App"}>
      {/* <Header/> */}
        <Routes>
            <Route path="/" element={<NewsMain/>}/> 
            <Route path="/analytics" element={<Analytics/>}/> 
        </Routes>
      <FooterMain/>  
    </div>
    
  );
}

export default App;
