
import {commitsDate,commitsAvatar,commitsAuthorName,commitsAuthorEmail,commitsMessage,commitsUrl} from '../main.js';

function createSlideEl() {

    $(function createSliderBlocks() {
    
 for (let i = 0; i < 20; i++) {

   $('.multiple-items').slick('slickAdd','<a class="history__slider-item"></a>');

}

let nodeSlider = document.getElementsByClassName("history__slider-item");

for (let i = 0; i < nodeSlider.length; i++) {

 nodeSlider[i].setAttribute("href", commitsUrl[i]);

   let sliderItemDate = document.createElement("div");
   sliderItemDate.className = "history__date";
   sliderItemDate.textContent = commitsDate[i]
   nodeSlider[i].prepend(sliderItemDate);

   let sliderAuthorInfo = document.createElement("div");
   sliderAuthorInfo.className = "history__author-info";
   sliderItemDate.after(sliderAuthorInfo);

   let sliderItemAvatar = document.createElement("img");
   sliderItemAvatar.className = "history__author-foto" ; 
   sliderItemAvatar.setAttribute("src",commitsAvatar[i]);
   sliderAuthorInfo.prepend(sliderItemAvatar);

   let wrapName = document.createElement("div");
   wrapName.className = "history__name-email";
   sliderItemAvatar.after(wrapName);

   let sliderItemName = document.createElement("div");
   sliderItemName.className = "history__author-name";
   sliderItemName.textContent = commitsAuthorName[i];
   wrapName.prepend(sliderItemName);

   let sliderItemEmail = document.createElement("div");
   sliderItemEmail.className = "history__author-email";
   sliderItemEmail.textContent = commitsAuthorEmail[i];
   wrapName.firstChild.after(sliderItemEmail);

   let sliderItemCommits = document.createElement("div");
   sliderItemCommits.className = "history__author-text";
   sliderItemCommits.textContent = commitsMessage[i];
   sliderAuthorInfo.after(sliderItemCommits)
 
}

});
 
}

export{createSlideEl,};