
let formSearchInput = document.querySelector(".form-search__input-text");

//  function getDate(item) {

//   let getDate = new Date(new Date().getTime() - (item)).toLocaleDateString('sv-SE');

//   return getDate 
//  }

 // const secondDayDate = getDate(1 * 24 * 60 * 60 * 1000);
// const thirdDayDate = getDate(2 * 24 * 60 * 60 * 1000);
// const fourthDayDate = getDate(3 * 24 * 60 * 60 * 1000);
// const fifthDayDate = getDate(4 * 24 * 60 * 60 * 1000);
// const sixthDayDate = getDate(5 * 24 * 60 * 60 * 1000);
// const fromDate = getDate(6 * 24 * 60 * 60 * 1000);

let arrDateItem = [];

for (let i = 0; i < 7; i++) {
   
   let getDate = new Date(new Date().getTime() - (i * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
   
   arrDateItem.push(getDate);
}





   let apiKey = "398b8b05cfd74c32a83a9f12f6118f07";

 export async function getApiNews() {


  let topic = formSearchInput.value;

  localStorage.setItem('topicNews', topic);

   let url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${arrDateItem[6]}&to=${arrDateItem[0]}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   function urlDayNews(data) {

      let urlDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${data}&to=${data}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

      return urlDay
   }

   let seventhDay = urlDayNews(arrDateItem[6]);
   let sixthDay = urlDayNews(arrDateItem[5]);
   let fifthDay = urlDayNews(arrDateItem[4]);
   let fourthDay = urlDayNews(arrDateItem[3]);
   let thirdDay = urlDayNews(arrDateItem[2]);
   let secondDay = urlDayNews(arrDateItem[1]);
   let firstDay = urlDayNews(arrDateItem[0]);

   let dayArr = ['firstDay','secondDay','thirdDay','fourthDay','fifthDay','sixthDay','seventhDay'];


   function savedlocalStorage(dayItem) {

      fetch(dayItem).then((res) => {
         return res.json()
      }).then((item) => {
         let data = item.articles;

         for (let i = 0; i < dayArr.length; i++) {
            if (dayItem === firstDay) {
               localStorage.setItem(`${dayArr[0]}`, JSON.stringify(data)); 
            }else if (dayItem === secondDay) {
               localStorage.setItem(`${dayArr[1]}`, JSON.stringify(data));
            }else if (dayItem === thirdDay) {
               localStorage.setItem(`${dayArr[2]}`, JSON.stringify(data));
            }else if (dayItem === fourthDay) {
               localStorage.setItem(`${dayArr[3]}`, JSON.stringify(data));
            }else if (dayItem === fifthDay) {
               localStorage.setItem(`${dayArr[4]}`, JSON.stringify(data));
            }else if (dayItem === sixthDay) {
               localStorage.setItem(`${dayArr[5]}`, JSON.stringify(data));
            }else if (dayItem === seventhDay) {
               localStorage.setItem(`${dayArr[6]}`, JSON.stringify(data));
            }
         }
       })

       }
 
      savedlocalStorage(firstDay)
       savedlocalStorage(secondDay)
       savedlocalStorage(thirdDay)
       savedlocalStorage(fourthDay)
       savedlocalStorage(fifthDay)
       savedlocalStorage(sixthDay)
       savedlocalStorage(seventhDay)

      const response = await fetch(url)
      
      const data = await response.json()

      localStorage.setItem('url', JSON.stringify(data));

      return data.articles

 }

//   GET GITHUB COMMITS

 let reposUrl = `https://api.github.com/repos/M-skyi/Test_Valencia_JS/commits`;

 export async function getApiGitHub() {

   const response = await fetch(reposUrl)
      
   const data = await response.json()
   
   return data

 }
