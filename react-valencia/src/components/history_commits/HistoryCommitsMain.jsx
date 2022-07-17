import'../../styles/HistoryCommits.css'
import HistoryCommitsHeader from './HistoryCommitsHeader';
import HistoryCommitsSlider from './HistoryCommitsSlider';

const HistoryCommitsMain = () =>{

    return(
       <div className="history-commits-main">

           <div className={"container"}>
                <HistoryCommitsHeader/>
           </div>
                <HistoryCommitsSlider/>
             </div> 
    )
}

export default HistoryCommitsMain;