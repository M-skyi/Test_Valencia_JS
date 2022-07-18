import {changeDate} from "../../app/main"

let apiKey = "2213f1e36fb8400bb4eef4e632efffe3";

  let topic = [];

    export const getInputValue = (newsTopic) => {
        topic.push(newsTopic);
    } 

    let arrDateItem = [];

    for (let i = 0; i < 7; i++) {
       
       let getDate = new Date(new Date().getTime() - (i * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
       
       arrDateItem.push(getDate);
    }


  const gettingNews = async (e) => {

  let topicItem = topic.pop()

  const url = `https://nomoreparties.co/news/v2/everything?q=${topicItem}&from=${arrDateItem[6]}&to=${arrDateItem[0]}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

  let arrUrlItem = [];

     for (let i = 6; i >= 0; i--) {
        
        let urlDay = `https://nomoreparties.co/news/v2/everything?q=${topicItem}&from=${arrDateItem[i]}&to=${arrDateItem[i]}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;
        
        arrUrlItem.push(urlDay)
  
     }

     let arrDaysItem = [];

     let requests = arrUrlItem.map(url => fetch(url));
    
     Promise.all(requests)
     .then((responses) => {
        
       const dataResults = responses.map((response) => response.json());
 
       return Promise.all(dataResults);   
 
     })
     .then((data) => {
        data.forEach(el => {
    
          let dataNewsDay = el.articles
 
          arrDaysItem.push(dataNewsDay);
 
          localStorage.setItem(`analyticsDayArr`, JSON.stringify(arrDaysItem));
   
        })
     })


  const response = await fetch(url);
    const data = await response.json();
    const articles = data.articles

    let newsItem = {
      arrTitle: [],
      arrDescription: [],
      arrImg: [],
      arrUrl: [],
      arrPublishedAt: [],
      arrAuthor: [],
      arrPublishedDate: [],
      arrChangesDate: []
   }

      articles.forEach(el=> {
         newsItem.arrTitle.push(el.title);
         newsItem.arrDescription.push(el.description);
         newsItem.arrImg.push(el.urlToImage);
         newsItem.arrUrl.push(el.url);
         newsItem.arrPublishedAt.push(el.publishedAt);
         newsItem.arrAuthor.push(el.source.name);
     }); 

       changeDate(newsItem.arrPublishedAt,newsItem.arrChangesDate);
     
     let dataObj = JSON.stringify(newsItem)
     localStorage.setItem('newsItem', dataObj)

     let newsRes = JSON.stringify(articles)
     localStorage.setItem('newsData', newsRes)

     let dataTopic = JSON.stringify(topicItem)
     localStorage.setItem('topic',dataTopic)

     let totalRes = JSON.stringify(data)
     localStorage.setItem('totalResults',totalRes)

     console.log(articles);

     return articles
}



const gettingCommit = async (e) => { 

  let reposUrl = `https://api.github.com/repos/M-skyi/Test_Valencia_JS/commits?&&per_page=20`;

  const response = await fetch(reposUrl)
  
  const data = await response.json()

  let commitsItem = {
     arrDate: [],
     arrImgUrl: [],
     arrName: [],
     arrEmail: [],
     arrMessage: [],
     arrItemUrl: [],
     arrChangesDate: []
  }

  data.forEach( el => {

     commitsItem.arrDate.push(el.commit.author.date);
     commitsItem.arrImgUrl.push(el.author.avatar_url);
     commitsItem.arrName.push(el.commit.author.name);
     commitsItem.arrEmail.push(el.commit.author.email);
     commitsItem.arrMessage.push(el.commit.message);
     commitsItem.arrItemUrl.push(el.html_url);

  })

  changeDate(commitsItem.arrDate,commitsItem.arrChangesDate);

        
      if (typeof window !== 'undefined') {
         let dataCommits = JSON.stringify(commitsItem);
         localStorage.setItem('commitsItem', dataCommits); 
       }
       
   }   
   
   const gettingCommits =  gettingCommit();

export{
  gettingCommits,
  gettingNews 
}