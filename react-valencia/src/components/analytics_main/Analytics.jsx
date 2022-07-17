
import '../../styles/Analytics.css';
import AnalyticsContent from './AnalyticsContent';
import AnalyticsHeader from './AnalyticsHeader';
 



function getDataLocalStor() {

  let analyticsDay = localStorage.getItem('analyticsDayArr');

  analyticsDay = JSON.parse(analyticsDay);

  let analyticsDayArr = [];

  for (let i = 0; i < analyticsDay.length; i++) {
    
      analyticsDayArr.push(analyticsDay[i])
    
  };

  return analyticsDayArr 
  
}

const Analytics = (props) => {

  let topicRequest = JSON.parse(localStorage.getItem("topic"));

    let itemCountArr = [];

    function getAnalyticsData(arr) {

        let arrData = [];

        arr.forEach(el =>{
          arrData.push(el.title);
        })

        let arrDataText = arrData.join("");

        let count = 0;
        let pos = arrDataText.toLowerCase().indexOf(`${topicRequest}`.toLowerCase());
        while ( pos != -1 ) {
        count++;
        pos = arrDataText.toLowerCase().indexOf(`${topicRequest}`.toLowerCase(),pos+1);
        }

        itemCountArr.push(count);

    }


  getDataLocalStor().map (item => {
    getAnalyticsData(item)
  })


  return (
    <div className={"analytics"}>
      <hr className={"header-line"} />
      <div className={" bg-style container header-top "}> </div>
      <AnalyticsHeader count = {itemCountArr}/>
      <AnalyticsContent count = {itemCountArr}/>
    </div>
    
  );
  
}

export default Analytics;