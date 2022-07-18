

const changeDate = (arrayDate,newDateArr) => {

    for (let i = 0; i < arrayDate.length; i++) {

       let dateNews = arrayDate[i];
       let changeDate = new Date(dateNews).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'}).slice(0, -3);
       let strDateMonth = changeDate.split(" ");
       let currentDate = changeDate.replace(strDateMonth[1], strDateMonth[1] + ",");
       newDateArr.push(currentDate)
    }
   
}

const currentMonth = () => {

    let date = new Date()
    date.getMonth()
    let currentDateMonth = new Date(date).toLocaleDateString('ru', {month: 'long',});
  
    return currentDateMonth
  
  }

  const getDaysWeek = () => {

    let item = []
  
    let dateCurrent = new Date();
  
  
    for (let i = 6; i >= 0; i--) {
  
         let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
         let tempDate = new Date();
         tempDate.setDate(dateCurrent.getDate()-i);
               
         let str = tempDate.getDate() + ", " + days[tempDate.getDay()]; 
               
         item.push(str);
        
    }
  
    return item

  }

export{
    changeDate,
    currentMonth,
    getDaysWeek,
}



