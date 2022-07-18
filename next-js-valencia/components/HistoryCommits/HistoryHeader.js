
import styles from "../../styles/HistoryCommits.module.css"
import Link from "next/link";
import { useState,useEffect } from "react";



const HistoryHeader = () => {

  return(
   <div className={`${styles.header} container`}>
        <div className={styles.leftPart}>
          <h1 className={styles.headline}>История коммитов из GitHub</h1>
        </div>
        <div className={styles.rightPart}>
            <Link href="https://github.com/M-skyi"><a className={styles.link}>Открыть в  Github</a></Link>
        </div>
   </div>
  )

}


export default HistoryHeader;