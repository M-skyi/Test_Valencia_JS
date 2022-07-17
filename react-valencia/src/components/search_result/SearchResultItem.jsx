import'../../styles/SearchResult.css'
import { useState } from 'react'
import noImg from '../../project_img/noimage.png'





const SearchResultItem = (props) =>{



    const [author, setAuthor] = useState(props.author);
    const [image, setImage] = useState(props.img);

    const changeAuthorItem = () => {

        if (author === null || author === "" ) {

            setAuthor("Автор не указан")      
        }

        return author
    }
    
    
    const changeImageItem = () => {

        if (image === null) {

            setImage(noImg) 

        }else{
            const checkImgSrc = src => {
                const img = new Image();
                img.onerror = function () { 
                   if (img.onerror) {
                      setImage(noImg) 
                   }
                 }
                img.src = src;
              }

              checkImgSrc(image)
        }

        return image
    }


    return(
        <a className={`search-res-item `} href={props.url} target="_blank">
            
                <img className={"search-res-item__img"} src={changeImageItem()} alt="Img news"/>   

                <div className={"search-res-item__date"}>

                    {props.publishedAt}

                </div>

                <div className={"search-res-item__heading"}>
                     
                     {props.title}
                     
                </div>

                <div className={"search-res-item__content"}>

                  {props.description}

                 </div>

                 <div className={"search-res-item__source-content"}>

                     {changeAuthorItem ()}

                 </div>

        </a>   
    )
}

export default SearchResultItem;