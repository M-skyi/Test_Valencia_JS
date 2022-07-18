
import styles from "../../styles/Header.module.css"
import NavBar from "./NavBar";
import Search from "./Search";
import{useRouter} from "next/router"
import { useState,useEffect } from "react";

const Header = ({
  showPreloader,
  hidePreloader,
  showNoNewsFound,
  hideNoNewsFound,
  showSearchResult,
  hideSearchResult
}) => {

 
  const [search, setSearch] = useState(true);
 

  const pathName = useRouter().asPath;

    useEffect(()=>{

      if (pathName === "/") {
        setSearch(true)
      }else{
        setSearch(false)
      }
    })

  return(

        <div className={pathName == "/" ? styles.headerWrapper : styles.headerAnalytic}>
          <NavBar/>
          <hr className={styles.line} />
          {search && (
          <Search 
            showPreloader = {showPreloader}
            hidePreloader = {hidePreloader}
            showNoNewsFound = {showNoNewsFound}
            hideNoNewsFound = {hideNoNewsFound}
            showSearchResult = {showSearchResult}
            hideSearchResult = {hideSearchResult}
          />
          )}
        </div>   
    
  )

}


export default Header;