import styles from "../../styles/NoFoundNews.module.css"


const NoFoundNews = () => {

  return(
    <div className = {styles.wrapper} >

      <div className = {styles.img}></div>
      <div className = {styles.headline}>Ничего не найдено</div>
      <div className = {styles.text}>
          К сожалению по вашему запросу 
          ничего не найдено.
      </div>
       
    </div>
  )

}


export default NoFoundNews;