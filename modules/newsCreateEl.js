

function createPreloaderNews() {

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

 }

 function blockNotFoudNews() {
    let header = document.querySelector(".header");
    
    let notFoundNews = document.createElement("div");
    notFoundNews.classList.add("not-found-news");
    header.after(notFoundNews);

    let notFoundNewsImg = document.createElement("img");
    notFoundNewsImg.className = "not-found-news__img";
    notFoundNews.append(notFoundNewsImg);
    notFoundNewsImg.setAttribute("src", "img/not-found-img.png");

    let notFoundNewsHeadline = document.createElement("h3");
    notFoundNewsHeadline.textContent = "Ничего не найдено";
    notFoundNewsHeadline.className = "not-found-news__headline";
    notFoundNewsImg.after(notFoundNewsHeadline);

    let notFoundNewsText = document.createElement("p");
    notFoundNewsText.className = "not-found-news__text";
    notFoundNewsText.textContent = `К сожалению по вашему запросу ничего не найдено.`;
    notFoundNewsHeadline.after(notFoundNewsText);

 }

 function createNewsBlocks() {

    let searchItems = document.querySelector(".search-items");
    for (let i = 0; i <= 2; i++) {

       let moreNewsItem = document.createElement("a");
       moreNewsItem.className = "search__item";
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
 }

}


export {
    createPreloaderNews,
    blockNotFoudNews,
    createNewsBlocks
};