 import'../../styles/Header.css'
 import { Link,useLocation } from 'react-router-dom';
 import { useMemo} from 'react'
 import classNames from "classnames"

const HeaderNavRight = (props) =>{


    let location = useLocation();

    const active = (local) => classNames({
        
        'header-analytic analytics--active': local === "/analytics",
        'header-top-left__logo-link item-link--active': local === "/"
      });

      const activeLink = useMemo(() => active(location.pathname), [location.pathname]);

    return(
        <div className={`header-top-right`}>

                <nav className={`header-top-right__nav`}>
                    <li className={"header-top-right__item"}>
                        <Link className={`${activeLink}`} to='/'>Главная</Link >
                    </li>
                    <li className={"header-top-right__item"}>
                        <Link className={`header-top-right__item-link `} to="#">О проекте</Link>
                    </li>
                </nav>
        
        </div>
        
    )
}

export default HeaderNavRight;