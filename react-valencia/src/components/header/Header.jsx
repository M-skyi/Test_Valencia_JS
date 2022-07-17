import HeaderContent from "./HeaderContent";
import HeaderNav from "./HeaderNav";
import'../../styles/Header.css'
import classNames from "classnames"
import { Link, useLocation} from 'react-router-dom';
import { useMemo} from 'react'

const Header = ({
    showLoader,
    hideLoader,
    showNoNewsFound,
    hideNoNewsFound,
    showSearchResult,
    hideSearchResult,
    loader}) =>{

    let location = useLocation();
    let headerContent = true;


    if (location.pathname === "/analytics") {
        headerContent = false   
    }


    const header = (local) => classNames({
        
        'header-analytic': local === "/analytics",
        'header': local === "/"
      });

      const headerClass = useMemo(() => header(location.pathname), [location.pathname]);

    return(
        <div className = {headerClass}>
                <hr className={"header-line"} />
                <HeaderNav/>
                { headerContent &&  (<HeaderContent  showLoader = {showLoader}
                 hideLoader = {hideLoader}
                 showNoNewsFound = {showNoNewsFound}
                 hideNoNewsFound = {hideNoNewsFound}
                 showSearchResult = {showSearchResult}
                 hideSearchResult = {hideSearchResult}
                 loaderChange = {loader}
                 /> ) }                         
        </div>   
    )

}

export default Header;


// className={`${classHeader.headerMain} ${classHeader.headerAnalytic}`}