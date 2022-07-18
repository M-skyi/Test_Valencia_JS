import Author from "../components/author/Author";
import HistoryCommits from "../components/historyCommits/HistoryCommits";
import Loader from "../components/loader/Loader";
import Result from "../components/newsResult/Result";
import NoFoundNews from './../components/noFoundNews/NoFoundNews';


const Home = ({loader,noFound,result}) => {

       return(
        <div> 
                {loader && <Loader/>}
                {noFound && <NoFoundNews/>}
                {result && <Result/>} 
                <Author/>
                <HistoryCommits/>
        </div> 
        
       )
        

}
 


export default Home;