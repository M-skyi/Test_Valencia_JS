
import '../../styles/Analytics.css';
import { Link } from 'react-router-dom';



function totalCountNews () {

  let weekCounterNews = JSON.parse(localStorage.getItem("totalResults"));

  let totalResults = weekCounterNews.totalResults;

  let countNumber = totalResults.toString().length;

  let resultString = []

   if (countNumber > 4) {

    let stringCount = totalResults.toString().slice(0, 2) + " " + totalResults.toString().slice(2, 5);

    resultString.push(stringCount );

    } else if(countNumber == 4) {

    let stringCount = totalResults.toString().slice(0, 1) + " " + totalResults.toString().slice(1, 5);

    resultString.push(stringCount);

    } else {
      resultString.push(totalResults);
    }

    return resultString

  
}




const AnalyticsHeader = ({count}) => {

  let x = 0;

  let totalHeadlines = count.map(i=>x+=i, x).reverse()[0]

  let topicRequest = JSON.parse(localStorage.getItem("topic"));


  return (


    <div className={"analytics-top container"}>

        <ul className={"bread-crumbs"}>
                <li><Link className={"bread-crumbs__link"} to='/'>Главная</Link></li>
                <li className={"bread-crumbs__current-page"}> / Аналитика</li>
        </ul>

        <div className={"topic-request"}>
            Вы спросили: <span className={"topic-request__text"}>«{topicRequest}»</span>
        </div>

        <div className="count">
            <div className="count__news">
               Новостей за неделю: <span className="count__news-item count-font--weight">{totalCountNews()}</span>
             </div>
            <div className="count__headline">
               Упоминаний в загаловках: <span className="count__headline-item count-font--weight">{totalHeadlines}</span>
            </div>
        </div>
    </div>
    
  );
  
} 

export default AnalyticsHeader;