import styles from "../../styles/Analytics.module.css"
import ProgressBarItem from "./ProgressBarItem";
import { getDaysWeek } from "../../app/main";





const ProgressBar = ({itemNum}) => {

    return(

      <div className={styles.progressBar}>
        <span className={`${styles.percent} ${styles.percentPos}`}>0</span>
        <span className={styles.percent}>25</span>
        <span className={styles.percent}>50</span>
        <span className={styles.percent}>75</span>
        <span className={styles.percent}>100</span> 

          {getDaysWeek().map((item,i) =>(
              <ProgressBarItem key={i} dateItem={item} itemNum = {itemNum[i]} />   
          ))} 

        <span className={`${styles.percent} ${styles.percentPos}`}>0</span>
        <span className={styles.percent}>25</span>
        <span className={styles.percent}>50</span>
        <span className={styles.percent}>75</span>
        <span className={styles.percent}>100</span>
      </div >
      
    )
  
  }

  export default ProgressBar;