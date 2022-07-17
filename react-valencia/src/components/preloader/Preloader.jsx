import'../../styles/Preloader.css'

const Preloader = () =>{

    return(
       <div className={"preloader"}>

          <div className={"preloader-loader__img"}></div>

            <div className={"preloader-loader-text"}>Идет поиск новостей...</div>

       </div> 
    )
}

export default Preloader;