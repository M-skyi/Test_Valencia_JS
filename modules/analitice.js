
      import {createElemDay} from './analiticeCreateEl.js'
      import { getTopicNews,getCountNews,getCountTitleNews,getAnalyticsData,getDataLocalStor} from '../modules/analiciceGetsDatas.js';

      createElemDay();
      getTopicNews();
      getCountNews();
      getCountTitleNews();

      let arrCountDay = [];

      let arrProgBar = [];

      let arrAnaliticeDay = [];

      for (let i = 1; i < 8; i++) {

         function getDayItem() {
            
            let analiticeDayItem = document.getElementById(`day-${i}`);
            arrAnaliticeDay.push(analiticeDayItem);
        }
        getDayItem()

         function getCountProgressItem() {

            let progressBarItem = document.getElementById(`count-progress-item-${i}`);
            arrProgBar.push(progressBarItem);
         }
         getCountProgressItem()

         function getProgresBar() {

            let countDayItem = document.querySelector(`.progress-item-${i}`);
            arrCountDay.push(countDayItem);
         }
         getProgresBar()

      }

         let dates = [];

         let countHeadlines = [];
         
         let dateCurrent = new Date();

         for (let i = 0; i < 7; i++){

            function getDateAnalitics() {

               let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

               let tempDate = new Date();
               tempDate.setDate(dateCurrent.getDate()-i);
               
               let str = tempDate.getDate() + ", " + days[tempDate.getDay()]; 
               
               dates.push(str);

            }
            getDateAnalitics()

            function getDataAnalitics() {

               getAnalyticsData(getDataLocalStor()[i],arrProgBar[i],arrCountDay[i]);

               arrAnaliticeDay[i].textContent = dates[i];

               countHeadlines.push(arrProgBar[i].value)
               
            }
            getDataAnalitics()
            
         }

               let x = 0;

               let totalHeadlines = countHeadlines.map(i=>x+=i, x).reverse()[0]

               let counterHeadlinesNews = document.querySelector(".counter-week__headline__count");
   
               counterHeadlinesNews.textContent = totalHeadlines;



        
   
   














