function createElemDay() {

    let parentElemDate = document.querySelector(".analitics-days__date");
    let parentElemProg = document.querySelector(".progress-bar");
 
    let idNum = 0;
 
    for (let i = 0; i < 7; i++) {
 
      idNum ++
 
       let li = document.createElement("li");
 
       li.classList.add("analitics-days__date-item", "font_family");
 
       li.setAttribute("id", `day-${idNum}`);
 
       parentElemDate.prepend(li);
 
       let progItem = document.createElement("div");
 
       progItem.classList.add(`progress-item-${idNum}`,`progress-item`);
 
       parentElemProg.prepend(progItem);
 
       let progList = document.createElement("li");
 
       progList.classList.add("progress-bar__list-item");
 
       progItem.after(progList);
 
       let progLine = document.createElement("progress");
 
       progLine.setAttribute("id",`count-progress-item-${idNum}`);
       
       progLine.setAttribute("max",100);
 
       progLine.classList.add("progress-bar__item");
 
       progList.prepend(progLine);
 
    }
    
 }
 
  export {createElemDay};