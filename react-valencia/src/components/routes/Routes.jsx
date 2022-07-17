
import {Route,Routes} from "react-router-dom";
import NewsMain from './../news_main/NewsMain';
import Analytics from './../analytics_main/Analytics';



const Routs = (props) => {

    return (
      <div className={"App"}>
          <Routes>
              <Route path="/" element={ <NewsMain/>}/> 
              <Route path="/analytics" element={<Analytics/>}/> 
          </Routes>
      </div>
      
    );
  }
  
  export default Routs;