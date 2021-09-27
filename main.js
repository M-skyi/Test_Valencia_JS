$(document).ready(function () {
   $('.multiple-items').slick({
      variableWidth: true,
      arrows: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      mobileFirst: false,
      waitForAnimate: false,
      infinite: false,
      responsive: [{
            breakpoint: 1024,
            settings: {
               arrows: false,
               centerPadding: '20px',
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: false,
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: false,
            }
         },
         {
            breakpoint: 425,
            settings: {
               arrows: false,
               centerPadding: '0px',
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: false,
            }
         }

      ]

   });
});

let formSearch = document.querySelector(".form-search");

let formSearchInput = document.querySelector(".form-search__input-text");

let buttonSearch = document.querySelector(".form-search__input-btn")



const todaysDate = new Date();
const fromDate = new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000));


formSearch.addEventListener('submit', retrieve);



function retrieve(e) {

   e.preventDefault()

   // add block preloader 

   let header = document.querySelector(".header");

   let containerPreloader = document.createElement("div");

   containerPreloader.className = "container-preloader";

   header.after(containerPreloader);

   let loadImg = document.createElement('img');

   loadImg.src = "img/load-img.png";

   loadImg.className = "container-preloader_loader";


   containerPreloader.prepend(loadImg);

   let loadText = document.createElement("p");

   loadText.className = "container-preloader_load-text";

   loadText.textContent = "Идет поиск новостей...";

   containerPreloader.append(loadText);

   let apiKey = "1bb2c66fe49f4cc8aae2c07724edd0bd";

   let topic = formSearchInput.value;

   let url = `https://nomoreparties.co/news/v2/everything?q=${topic}&from=${fromDate}&to=${todaysDate}&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

   fetch(url).then((res) => {
      return res.json()
   }).then((data) => {

      localStorage.setItem('url', JSON.stringify(data));

      let search = document.querySelector(".search");

      if (search.classList.contains("search")) {
         search.classList.add("search__active")
      }

      let news = data.articles;

      let urlNews = [];
      let imgNews = [];
      let titleNews = [];
      let descriptionNews = [];
      let sourseNameNews = [];
      let publishedAt = [];

      news.forEach(el => {
         urlNews.push(el.url);
         imgNews.push(el.urlToImage);
         titleNews.push(el.title);
         descriptionNews.push(el.description);
         sourseNameNews.push(el.source.name);
         publishedAt.push(el.publishedAt)
      })

      

   //add block not found news

   let notFoundNews = document.querySelector(".not-found-news");
   if (news.length === 0) {
      notFoundNews.classList.add("not-found-news--active");
      header.after(notFoundNews);
       search.classList.remove("search__active");
       containerPreloader.classList.add("container-preloader--dasabled");
   }


      // adding a published At News API
      function getPublishedAt() {

         let publishedAtItem = document.querySelectorAll('.search__date-added');
         for (let i = 0; i < publishedAtItem.length; i++) {

            let DateNews = publishedAt[i]

            let options = {
               year: 'numeric',
               month: 'long',
               day: 'numeric'
            };

            let changesDate = new Date(DateNews).toLocaleDateString('ru', options).slice(0, -3);

            let strDateMonth = changesDate.split(" ");

            let сurrentDate = changesDate.replace(strDateMonth[1], strDateMonth[1] + ",")

            publishedAtItem[i].textContent = сurrentDate

         }
      }

      getPublishedAt()


      // adding a photo News API
      function getUrlImg() {

         let newsImg = document.querySelectorAll('.search__img');
         for (let i = 0; i < newsImg.length; i++) {
            newsImg[i].setAttribute("src", imgNews[i])
         }

      }
      getUrlImg()


      // adding a url News API
      function getUrl() {

         let searchItem = document.querySelectorAll(".search__item");
         for (let i = 0; i < searchItem.length; i++) {
            searchItem[i].setAttribute("href", urlNews[i])
            searchItem[i].setAttribute("target", "_blank")
         }

      }

      getUrl()


      // adding a title News API

      function getTitle() {

         let searchTitle = document.querySelectorAll('.search__heading');
         for (let i = 0; i < searchTitle.length; i++) {
            searchTitle[i].textContent = titleNews[i];
         }

      }

      getTitle()

      // adding a description News API

      function getDescription() {

         let searchDiscription = document.querySelectorAll('.search__discription');
         for (let i = 0; i < searchDiscription.length; i++) {
            searchDiscription[i].textContent = descriptionNews[i];
         }

      }
      getDescription()

      // adding a source name News API
      function getSourse() {

         let searchSource = document.querySelectorAll('.search__source-of-text');
         for (let i = 0; i < searchSource.length; i++) {
            searchSource[i].textContent = sourseNameNews[i];
         }

      }

      getSourse()


      if (search.classList.contains("search__active")) {
         containerPreloader.classList.add("container-preloader--dasabled")
      }

      formSearchInput.onchange = function () {
         notFoundNews.classList.remove("not-found-news--active");
         if (search.classList.contains("search__active")) {
            search.classList.remove("search__active")
            
         }

      }
      
      


      // show more News

      let btnMoreNews = document.querySelector(".search__button");
      btnMoreNews.addEventListener("click", function () {

         
         let searchItems = document.querySelector(".search-items");
         for (let i = 0; i <= 2; i++) {

            let moreNewsItem = document.createElement("a");
            moreNewsItem.className = "search__item";
            moreNewsItem.classList.add("more-news")
            searchItems.append(moreNewsItem)
         }


         let searchItem = document.querySelectorAll(".search__item");

         for (let i = 0; i < searchItem.length; i++) {

            let imgMoreNews = document.createElement('img')

            imgMoreNews.className = "search__img"

            if (searchItem[i].firstChild === null) {

               searchItem[i].prepend(imgMoreNews)

            }

            let publishedAtMoreNews = document.createElement("div");

            publishedAtMoreNews.className = "search__date-added";

            if (searchItem[i].firstChild.nextSibling === null) {

               searchItem[i].append(publishedAtMoreNews)
            }

            let titleMoreNews = document.createElement("h2");

            titleMoreNews.className = "search__heading";

            if (searchItem[i].firstChild.nextSibling.nextSibling === null) {

               searchItem[i].append(titleMoreNews)

            }

            let descriptionMoreNews = document.createElement("p");

            descriptionMoreNews.className = "search__discription";

            if (searchItem[i].firstChild.nextSibling.nextSibling.nextSibling === null) {

               searchItem[i].append(descriptionMoreNews)

            }

            let sourceMoreNews = document.createElement("div");

            sourceMoreNews.className = "search__source-of-text";

            if (searchItem[i].firstChild.nextSibling.nextSibling.nextSibling.nextSibling === null) {

               searchItem[i].append(sourceMoreNews)

            }

            if (searchItem.length >= news.length) {
               btnMoreNews.classList.add("disabled--btn")
            }

            getUrl()
            getUrlImg()
            getTitle()
            getDescription()
            getSourse()
            getPublishedAt()
          
         }


      })


   }).catch((error) => {
      console.log(error)
   })



}



