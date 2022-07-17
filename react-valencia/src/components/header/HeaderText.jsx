import'../../styles/Header.css'


const HeaderMainText = () =>{
    return(
        <div className={"header-main-text"}>

            <div className={"header-main-text__headline"}>
                Что в мире творится?
            </div>
            <div className={"header-main-text__text"}>
                Введите в поиске любую тему и узнайте, насколько популярной<br/>она была в носотях за прошедшую неделю.
            </div>
            
        </div>
        
    )
}

export default HeaderMainText;