
let formSearchInput = document.querySelector(".form-search__input-text");

let arrDateItem = [];

for (let i = 0; i < 7; i++) {
   
   let getDate = new Date(new Date().getTime() - (i * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
   
   arrDateItem.push(getDate);
}

   let apiKey = "53dda3d904814c45bfe91ca26f3c68ff";

 export async function getApiNews() {


  let topic = formSearchInput.value;

  localStorage.setItem('topicNews', topic);

   let url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${arrDateItem[6]}&to=${arrDateItem[0]}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   let arrUrlAnaliticeDay = [];

   for (let i = 0; i < 7; i++) {
      
      let urlDay = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${arrDateItem[i]}&to=${arrDateItem[i]}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;
      
      arrUrlAnaliticeDay.push(urlDay)

   }

   let arrAnaliticeDays = [];


    let requests = arrUrlAnaliticeDay.map(url => fetch(url));
    
    Promise.all(requests)
    .then((responses) => {
       
      const dataResults = responses.map((response) => response.json());

      return Promise.all(dataResults);   

    })
    .then((data) => {
       data.forEach(el => {
   
         let dataNewsDay = el.articles

         arrAnaliticeDays.push(dataNewsDay);

         localStorage.setItem(`AnaliticeDay`, JSON.stringify(arrAnaliticeDays));
  
       })
    })

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
