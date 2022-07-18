import styles from "../../styles/Analytics.module.css"
import Link from "next/link";
import { useState,useEffect } from "react";





const AnalyticsHeader = ({topic,totalCount,totalRes}) => {


  const [totalChanges, setTotalChanges] = useState("")

  let totalLength = totalRes.toString().length;

  useEffect(() => {

    if (totalLength > 4) {
 
     let stringCount = totalRes.toString().slice(0, 2) + " " + totalRes.toString().slice(2, 5);
 
     setTotalChanges(stringCount)
 
     } else if(totalLength == 4) {
 
     let stringCount = totalRes.toString().slice(0, 1) + " " + totalRes.toString().slice(1, 5);
 
     setTotalChanges(stringCount)
 
     } else {
      setTotalChanges(totalRes)
     }
   

  },[totalRes])

  
  return(
    <div className = {`${styles.header} container`} >
        <div className = {styles.breadCrumbs}>
                <Link href="/"><a className={styles.link} >Главная</a></Link>
                    <span className={styles.currentPage} > / Аналитика</span>
        </div>
        <div className = {styles.requestNews}>
              <p className = {styles.requestTopic}>
                  Вы спросили: 
                <span className = {styles.requestTopic}>«{topic}»</span>
              </p>
              <div className = {styles.dataWrapper}>
                <p className = {styles.requestData}>
                    Новостей за неделю: 
                    <span className = {styles.requestDataItem}> {totalChanges}</span>
                  </p>
                  <p className = {styles.requestData}>
                    Упоминаний в загаловках:
                    <span className = {styles.requestDataItem}> {totalCount}</span>
                  </p>
              </div>   
        </div>
    </div>
  )

}


export default AnalyticsHeader;