import styles from "../../styles/Author.module.css"
import Image from "next/image"
import authorImg from "../../public/img/authorImg.jpg"

const Author = () => (
    
       
    <div className={`${styles.content} container`}> 

        <div className={styles.leftPart}>
            <div className={styles.img}></div>
        </div>
        <div className={styles.rightPart}>
            <h1 className={styles.headline}>
                 Об авторе
            </h1>
            <p className={styles.text}>
                <span className={`${styles.textFirst} ${styles.text}`}>Меня зовут Алексей Михайлецкий, я начинающий Front-End разработчик . Я обладаю базовыми навыками современного фронтенда .</span>
                <span className={`${styles.textSecond} ${styles.text}`} >Основной стек техноглигий с которым я работаю это JavaScript, HTML, Css, React, Next.js, Sass, Git, WordPress, БЭМ .</span>
            </p>
        </div>
       
    </div>

)




export default Author;