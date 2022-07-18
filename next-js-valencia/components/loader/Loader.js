import styles from "../../styles/Loader.module.css"


const Loader = () => {

  
  return(
    <div className = {styles.loader} >
        <div className = {styles.circle}></div>
       <div className = {styles.text}>
             Идет поиск новостей...
       </div>
    </div>
  )

}


export default Loader ;