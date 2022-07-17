import HeaderMainText from './HeaderText';
import {HeaderSearch }from "./HeaderSearch";
import'../../styles/Header.css'





const HeaderContent = (props) => {

   
    return(

        <div className={"header-main container header-main--pos "}>

            <div className={"header-main--pos"}>
                <HeaderMainText/>
                <HeaderSearch showLoader = {props.showLoader}
                 hideLoader = {props.hideLoader}
                 showNoNewsFound = {props.showNoNewsFound}
                 hideNoNewsFound = {props.hideNoNewsFound}
                 showSearchResult = {props.showSearchResult}
                 hideSearchResult = {props.hideSearchResult}
                 loaderChange = {props.loader}
                 />
            </div>
             
        </div>
        )



    
}


export default HeaderContent;