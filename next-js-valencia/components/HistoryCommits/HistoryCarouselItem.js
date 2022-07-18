import styles from "../../styles/HistoryCommits.module.css"
import Link from "next/link";
import Image from "next/image";

const HistoryCarouselItem = ({date,name,email,message,itemUrl,imgUrl}) => {

  return(
   <div className={styles.Wrapper}>
    <Link href={itemUrl} >
          <a className={styles.item}>
              <div className={styles.date}>{date}</div>

              <div className={styles.userProfile}>
              
               <div className={styles.imgWrapper}>
                    <Image className={styles.img} layout="fill" src={imgUrl} alt="commit author"/>
               </div>

                <div className={styles.nameEmail}>
                  <div className={styles.name}>{name}</div>
                  <div className={styles.email}>{email}</div>
                </div>
              </div>
              
                <div className={styles.text}>
                  {message}
                </div>
          </a>
   </Link>

   </div>
  )

}


export default HistoryCarouselItem;