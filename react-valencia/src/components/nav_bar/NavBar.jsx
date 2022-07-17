import Header from "../header/Header";
import {Route,Routes,useLocation } from "react-router-dom";
import { useState,useCallback,useEffect } from 'react';
import Preloader from './../preloader/Preloader';
import NoNewsFound from './../no_news_found/no_news_found';
import SearchResultMain from './../search_result/SearchResultMain';




const NavBar = () => {

  let location = useLocation();
  const [preloader, setPreloader] = useState(false);
  const [noNewsFound, setNoNewsFound] = useState(false);
  const [searchResult, setSearchResult] = useState(false)

  const showPreloader = useCallback(
    () => {
      setPreloader(true);
    }, [preloader],

  );

  const hidePreloader = useCallback(
    () => {
      setPreloader(false);
    }, [preloader],

  );

  const showNoNewsFound = useCallback(
    () => {
      setNoNewsFound(true);
    }, [noNewsFound],

  );

  const hideNoNewsFound = useCallback(
    () => {
      setNoNewsFound(false);
    }, [noNewsFound],

  );

  const showSearchResult = useCallback(
    () => {
      setSearchResult(true);
    }, [searchResult],

  );

  const hideSearchResult = useCallback(
    () => {
      setSearchResult(false);
    }, [searchResult],

  );


    
  useEffect(() => {

      setSearchResult(false)    
     
  }, [location.pathname]);



    return(
        <div>
             <Header 
             showLoader = {showPreloader}
             hideLoader = {hidePreloader}
             showNoNewsFound = {showNoNewsFound}
             hideNoNewsFound = {hideNoNewsFound}
             showSearchResult = {showSearchResult}
             hideSearchResult = {hideSearchResult}
             />  

             {preloader && <Preloader/> }
             {noNewsFound && <NoNewsFound/>}
             {searchResult && <SearchResultMain/>}                
        </div>   
    )

}

export default NavBar;