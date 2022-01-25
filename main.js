
import {getApiNews,getApiGitHub} from './modules/getApi.js';
import sliderOptions from './modules/sliderOptions.js';
import {createPreloaderNews,blockNotFoudNews,createNewsBlocks} from './modules/newsCreateEl.js';
import {getPublishedAt,getUrlImg,getUrl,getTitle,getDescription,getSourse} from './modules/getDatasApi.js';
import {createSlideEl,} from './modules/commitsCreateEl.js';


   sliderOptions()

   let formSearch = document.querySelector(".form-search");

   let formSearchInput = document.querySelector(".form-search__input-text");

   formSearch.addEventListener('submit', retrieve);

      function retrieve(e) {
         
      e.preventDefault();

      let searchItem = document.querySelectorAll(".search__item");
   
      if (searchItem.length > 0) {
         return
      }
   
      let topic = formSearchInput.value;
      if (topic === '') {
         alert("«Нужно ввести ключевое слово».")
         return
      }
        
      createPreloaderNews()
      blockNotFoudNews()
   
      let search = document.querySelector(".search");
      let preloader = document.querySelector(".container-preloader")

      let notFoundNews = document.querySelector(".not-found-news")

      formSearchInput.onchange = function () {
         let searchItem = document.querySelectorAll(".search__item");
         for (let i = 0; i < searchItem.length; i++) {
            if (searchItem[i].classList.contains("search__item")) {
               searchItem[i].remove()
            }
         }
         if (search.classList.contains("search__active")) {
            search.classList.remove("search__active")
          }

         if (notFoundNews.classList.contains("not-found-news--active")) {
            notFoundNews.classList.add("not-found-news--disabled");
         }

      }

         itemNews.length = 0
         urlNews.length = 0
         imgNews.length = 0
         titleNews.length = 0
         descriptionNews.length = 0
         sourseNameNews.length = 0
         publishedAt.length = 0


         getApiNews().then(function (news) {
            
            news.forEach(el => {
            itemNews.push(el)
            urlNews.push(el.url);
            imgNews.push(el.urlToImage);
            titleNews.push(el.title);
            descriptionNews.push(el.description);
            sourseNameNews.push(el.source.name);
            publishedAt.push(el.publishedAt)

         })
         
         createNewsBlocks()

         if (search.classList.contains("search")) {
            search.classList.add("search__active")
         }
       
         if (news.length === 0) {
            search.classList.remove("search__active");
            preloader.classList.add("container-preloader--dasabled");
            notFoundNews.classList.add("not-found-news--active");
         }
   
         getPublishedAt()
         getUrlImg()
         getUrl()
         getTitle()
         getDescription()
         getSourse()
   
         
         if (search.classList.contains("search__active")) {
            preloader.classList.add("container-preloader--dasabled")
         }
   

         })
         .catch((error) => {
            alert("«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»")
            preloader.classList.add("container-preloader--dasabled")
         })
   
   }

      let itemNews = []
      let urlNews = [];
      let imgNews = [];
      let titleNews = [];
      let descriptionNews = [];
      let sourseNameNews = [];
      let publishedAt = [];

      getPublishedAt()

      function validUrl(string) {
         try {
         new URL(string);
         } catch (_) {
         return false;  
         }
      
         return true;
      }

   let btnMoreNews = document.querySelector(".search__button");
   btnMoreNews.addEventListener("click", function () {

      createNewsBlocks() 

      getPublishedAt()
    
      getUrlImg()
     
      getUrl()

      getTitle()

      getDescription()

      getSourse()

      let searchItem = document.querySelectorAll(".search__item");
         if (searchItem.length >= itemNews.length) {
         btnMoreNews.classList.add("disabled--btn")
      }
   
})

//    GITHUB COMMITS

   let commitsDate = [];
   let commitsAvatar = [];
   let commitsAuthorName = [];
   let commitsAuthorEmail = [];
   let commitsMessage = [];
   let commitsUrl = []

   getApiGitHub().then(function (commits) {
            
   for (let i = 0; i < 20; i++) {

      commitsDate.push(commits[i].commit.author.date);
      commitsAvatar.push(commits[i].author.avatar_url);
      commitsAuthorName.push(commits[i].commit.author.name);
      commitsAuthorEmail.push(commits[i].commit.author.email);
      commitsMessage.push(commits[i].commit.message);
      commitsUrl.push(commits[i].html_url);

   }

   createSlideEl()

   let historyDate = document.querySelectorAll(".history__date");

   for (let i = 0; i < historyDate.length; i++) {

      let dateCommits = commitsDate[i];

      let changesDate = new Date(dateCommits).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'}).slice(0, -3);

      let strDateMonth = changesDate.split(" ");

      let сurrentDate = changesDate.replace(strDateMonth[1], strDateMonth[1] + ",");

      historyDate[i].textContent = сurrentDate

   }
   
   }).catch((error) => {
      console.log(error)
   })

   
   export{
      itemNews,
      urlNews,
      imgNews,
      titleNews,
      descriptionNews,
      sourseNameNews,
      publishedAt,
      validUrl,
      commitsDate,
      commitsAvatar,
      commitsAuthorName,
      commitsAuthorEmail,
      commitsMessage,
      commitsUrl
   }
