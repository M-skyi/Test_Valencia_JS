
import AboutAuthorMain from '../about_author/AboutAuthorMain';
import HistoryCommitsMain from '../history_commits/HistoryCommitsMain';



const NewsMain = (props) => {

  return (
    <div className={"NewsMain"}>
       <AboutAuthorMain/>
       <HistoryCommitsMain/>
    </div>
  );
}

export default NewsMain;