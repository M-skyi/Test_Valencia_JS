import'../../styles/Footer.css'
import { Link } from 'react-router-dom';
const FooterNav = () =>{

    return(
       <div className={"footer-nav"}>
           
               <Link className={"footer-nav__item"} to="/">Главная</Link>
               <Link className={"footer-nav__item"} to="#">О проекте</Link>
               <Link className={"footer-nav__item"} to="#">Valencia.JS</Link>
       </div> 
    )
}

export default FooterNav;