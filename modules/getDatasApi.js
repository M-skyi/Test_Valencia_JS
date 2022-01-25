
import{itemNews,urlNews,imgNews,titleNews,descriptionNews,sourseNameNews,publishedAt,validUrl} from '../main.js'

validUrl()

function getPublishedAt() {

    let publishedAtItem = document.querySelectorAll('.search__date-added');
    for (let i = 0; i < publishedAtItem.length; i++) {
 
       let DateNews = publishedAt[i]
 
       let changesDate = new Date(DateNews).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric'}).slice(0, -3);
 
       let strDateMonth = changesDate.split(" ");
 
       let сurrentDate = changesDate.replace(strDateMonth[1], strDateMonth[1] + ",")
 
       publishedAtItem[i].textContent = сurrentDate
 
    }
 }

 function getUrlImg() {

    let newsImg = document.querySelectorAll('.search__img');
    for (let i = 0; i < newsImg.length; i++) {
       newsImg[i].setAttribute("src", imgNews[i]);
 
       let imgNotLoad = "https://sevastopol.triproom.ru/photo/big/noimage.png";
 
       if (validUrl(imgNews[i]) === false  ) {
 
          newsImg[i].setAttribute("src",imgNotLoad);
 
       }else {
 
          const checkImgSrc = src => {
             const img = new Image();
             img.onerror = function () { 
                if (img.onerror) {
                   newsImg[i].setAttribute("src",imgNotLoad);
                }
              }
             img.src = src;
           }
          
           checkImgSrc(imgNews[i])
       }      
    }
 }

 function getUrl() {
    let btnMoreNews = document.querySelector(".search__button");
    let searchItem = document.querySelectorAll(".search__item");
    for (let i = 0; i < searchItem.length; i++) {
       searchItem[i].setAttribute("href", urlNews[i])
       searchItem[i].setAttribute("target", "_blank")
    }
    if (searchItem.length >= itemNews.length) {
       btnMoreNews.classList.add("disabled--btn")
    } else {
       btnMoreNews.classList.remove("disabled--btn")
    }
 
    for (let i = 0; i < searchItem.length; i++) {
 
     let atribute = searchItem[i].getAttribute("href");
     if (atribute === "undefined") {
       searchItem[i].remove();
     }
       
    }
    
 }


 function getTitle() {

    let searchTitle = document.querySelectorAll('.search__heading');
    for (let i = 0; i < searchTitle.length; i++) {
       searchTitle[i].textContent = titleNews[i];
    }
 
 }

 function getDescription() {

    let searchDiscription = document.querySelectorAll('.search__discription');
    for (let i = 0; i < searchDiscription.length; i++) {
       searchDiscription[i].textContent = descriptionNews[i];
    }
 
 }

 function getSourse() {

    let searchSource = document.querySelectorAll('.search__source-of-text');
    for (let i = 0; i < searchSource.length; i++) {
       searchSource[i].textContent = sourseNameNews[i];
    }
 
 }

export {
    getPublishedAt,
    getUrlImg,
    getUrl,
    getTitle,
    getDescription,
    getSourse,
};