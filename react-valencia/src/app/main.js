


const changeDate = (arrayDate,newDateArr) => {

    for (let i = 0; i < arrayDate.length; i++) {

       let dateNews = arrayDate[i];
       let changeDate = new Date(dateNews).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'}).slice(0, -3);
       let strDateMonth = changeDate.split(" ");
       let currentDate = changeDate.replace(strDateMonth[1], strDateMonth[1] + ",");
       newDateArr.push(currentDate)
    }
   
}

export{
    changeDate
}