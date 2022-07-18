import styles from "../../styles/NewsResult.module.css"
import Link from "next/link";
import { useState } from 'react'
import facebookIcon from "../../public/img/iconFacebook.png"


const ResultContentItem = ({title,description,author,publishedAt,img,url}) => {
    
    const [authorItem, setAuthor] = useState(author);
    const [imageItem, setImage] = useState(img);


    const changeAuthorItem = () => {

        if (authorItem === null || authorItem === "" ) {

            setAuthor("Автор не указан")      
        }

        return authorItem
    }
    
    
    const changeImageItem = () => {

        if (imageItem === null) {

            setImage("https://personabrd.com.ua/img/master/6e97727a-f2dd-4b33-9590-0b6d3bbff22d.png") 

        }else{
            const checkImgSrc = src => {
                const img = new Image();
                img.onerror = function () { 
                   if (img.onerror) {
                      setImage("https://personabrd.com.ua/img/master/6e97727a-f2dd-4b33-9590-0b6d3bbff22d.png") 
                   }
                 }
                img.src = src;
              }

              checkImgSrc(imageItem)
        }

        return imageItem
    }

   

   return(

    <div className={styles.resultContentItem}> 
        <Link href={url} >
             <a  className={styles.item} href={url}>

                <div className={styles.wrapperImg}>
                   <img className={styles.img} src={changeImageItem()} alt="News images" />
                </div>

                 <div className={styles.wrapperText}>

                    <span className={styles.date}>{publishedAt}</span>

                    <h1 className={styles.headline}>{title}</h1>

                    <p className={styles.text}>{description}</p>
    
                    <span className={styles.source}>{changeAuthorItem()}</span>
                
                 </div>

             </a>
        </Link>
    </div>
   )

    

   }




export default ResultContentItem;