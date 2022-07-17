import'../../styles/NoNewsFound.css'


const NoNewsFound = () =>{

    return(
       <div className={"no-news-found"}>

            <div className={"no-news-found__img"}></div>

            <div className={"no-news-found__title"}>Ничего не найдено</div>

            <div className={"no-news-found__text"}>К сожалению по вашему запросу <br/> ничего не найдено.</div>

       </div> 
    )
}

export default NoNewsFound;