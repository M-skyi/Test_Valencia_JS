
   import{changeDate} from "../app/main"
   
   
   let apiKey = "1bb2c66fe49f4cc8aae2c07724edd0bd";


    let topic = [];

    export const getInputValue = (newsTopic) => {
        topic.push(newsTopic);
    } 
      
    let arrDateItem = [];

    for (let i = 0; i < 7; i++) {
       
       let getDate = new Date(new Date().getTime() - (i * 24 * 60 * 60 * 1000)).toLocaleDateString('sv-SE');
       
       arrDateItem.push(getDate);
    }

   
    let gettingNews = async (e) => {

      let topicItem = topic.pop()

     const url = `https://nomoreparties.co/news/v2/everything?q=${topicItem }&from=${arrDateItem[6]}&to=${arrDateItem[0]}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

     
     let arrUrlItem = [];

     for (let i = 0; i < 7; i++) {
        
        let urlDay = `https://nomoreparties.co/news/v2/everything?q=${topicItem}&from=${arrDateItem[i]}&to=${arrDateItem[i]}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;
        
        arrUrlItem.push(urlDay)
  
     }

     arrUrlItem.reverse()

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

     let newsData = data.articles;

     let newsItem = {
      arrTitle: [],
      arrDescription: [],
      arrImg: [],
      arrUrl: [],
      arrPublishedAt: [],
      arrAuthor: [],
      arrPublishedDate: []
   }

      newsData.forEach(el=> {
         newsItem.arrTitle.push(el.title);
         newsItem.arrDescription.push(el.description);
         newsItem.arrImg.push(el.urlToImage);
         newsItem.arrUrl.push(el.url);
         newsItem.arrPublishedAt.push(el.publishedAt);
         newsItem.arrAuthor.push(el.author);
     });  

     changeDate(newsItem.arrPublishedAt,newsItem.arrPublishedDate)


     let dataObj = JSON.stringify(newsItem)
     localStorage.setItem('newsItem', dataObj)

     let newsRes = JSON.stringify(newsData)
     localStorage.setItem('newsData', newsRes)

     let dataTopic = JSON.stringify(topic.pop())
     localStorage.setItem('topic',dataTopic)

     let totalRes = JSON.stringify(data)
     localStorage.setItem('totalResults',totalRes)

     return newsData
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

      changeDate(commitsItem.arrDate,commitsItem.arrChangesDate)

          let dataCommits = JSON.stringify(commitsItem)
          localStorage.setItem('commitsItem', dataCommits)   
          
      
 }   
           
    const gettingCommits =  gettingCommit();


export {
   gettingNews,
   gettingCommits
};