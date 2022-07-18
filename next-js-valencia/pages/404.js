
import styles from "../styles/ErrorPage.module.css"



const Error = () => (

    <div className="container">
        <div className={styles.text} >
            <h1 className={styles.firstText}> 404 </h1>
            <h2 className={styles.secondText}>Такой страницы не существует.</h2>
        </div>
        
    </div>
    
    )
     
    
    
    export default Error;