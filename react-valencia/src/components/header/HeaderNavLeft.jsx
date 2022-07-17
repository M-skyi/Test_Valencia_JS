import'../../styles/Header.css'
import { Link,useLocation } from 'react-router-dom';
import classNames from "classnames"
import { useMemo} from 'react'

const HeaderNavLeft = (props) =>{

    let location = useLocation();

    const logoClass = (local) => classNames({
        
        'header-analytic': local === "/analytics",
        'header-top-left__logo-link': local === "/"
      });

      const headerLogoClass = useMemo(() => logoClass(location.pathname), [location.pathname]);

    return(
        <div className={`header-top-left`}>

            <div className={"header-top-left__logo "}>
                <Link className={headerLogoClass} to="/">NewsAnalyzer </Link>
            </div>

        </div>
        
    )
}

export default HeaderNavLeft;