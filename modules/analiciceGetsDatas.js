
    function getTopicNews() {
    
        let topicValueLocal = localStorage.getItem('topicNews');

        let topicValue = document.querySelector(".topic-request__item");

        topicValue.textContent = `Вы спросили: «${topicValueLocal}»`;

        return topicValueLocal
    
    }

    function getCountNews() {

         let weekCounterNews = localStorage.getItem('url');

        weekCounterNews = JSON.parse(weekCounterNews);

        let totalResults = weekCounterNews.totalResults;

        let totalResultsString = document.querySelector(".counter-week__count");

        let countNumber = totalResults.toString().length

        if (countNumber > 4) {
            let stringConter = totalResults.toString().slice(0, 2) + " " + totalResults.toString().slice(2, 5);
            totalResultsString.textContent = stringConter
        } else if(countNumber == 4) {
        let stringConter = totalResults.toString().slice(0, 1) + " " + totalResults.toString().slice(1, 5);
            totalResultsString.textContent = stringConter
        } else {
        totalResultsString.textContent = totalResults
        }

        return weekCounterNews
    
    }

    function getCountTitleNews() {
    
        let titleNews = getCountNews().articles;

        let arr = [];

        titleNews.forEach(el => {
            arr.push(el.title)  
        });

        let headlineText = arr.join("")

        let count = 0;

        let  pos = headlineText.toLowerCase().indexOf(`${getTopicNews()}`.toLowerCase());

        while ( pos != -1 ) {
        count++;
        pos = headlineText.toLowerCase().indexOf(`${getTopicNews()}`.toLowerCase(),pos+1);
        }

        let date = new Date()

        date.getMonth()

        let currentDateMonth = new Date(date).toLocaleDateString('ru', {month: 'long',});

        let currentMonth = document.querySelector(".analitics__month");

        currentMonth.textContent = `(${currentDateMonth})`;


    }

    function getAnalyticsData(arr,proBar,countDay) {
 
       let arrData = [];
 
       arr.forEach(el =>{
          arrData.push(el.title);
       })
 
       let arrDataText = arrData.join("");
 
       let count = 0;
       let pos = arrDataText.toLowerCase().indexOf(`${getTopicNews()}`.toLowerCase());
       while ( pos != -1 ) {
       count++;
       pos = arrDataText.toLowerCase().indexOf(`${getTopicNews()}`.toLowerCase(),pos+1);
       }
 
       proBar.value = count;
       
       countDay.textContent = count;

    }

    function getDataLocalStor() {

        let analiticeDay = localStorage.getItem('AnaliticeDay');

        analiticeDay = JSON.parse(analiticeDay);
       
        let analiticeDayArr = [];
     
        for (let i = 0; i < analiticeDay.length; i++) {
           
           analiticeDayArr.push(analiticeDay[i])
           
        };
     
        return analiticeDayArr 
        
    }

export {
    getTopicNews,
    getCountNews,
    getCountTitleNews,
    getAnalyticsData,
    getDataLocalStor
};