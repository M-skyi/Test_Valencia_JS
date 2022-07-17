import'../../styles/SearchResult.css'
import SearchResContent from './SearchResultContent';
import SearchResultHeader from './SearchResultHeader';
import { useState} from 'react';
// import {useItem} from './SearchResultContent'



   const SearchResultMain = (props) =>{  

    return(
        <div className={"main-result"} >
            <SearchResultHeader/>
            <SearchResContent/> 
        </div>   
    )
}

export default SearchResultMain;