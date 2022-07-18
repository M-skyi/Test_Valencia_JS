import Footer from "../footer/Footer";
import Header from "../header/Header";


const Layout = ({
    children,
    showPreloader,
    hidePreloader,
    showNoNewsFound,
    hideNoNewsFound,
    showSearchResult,
    hideSearchResult
    }) => {

    return(
        <div>
            <Header 
            showPreloader = {showPreloader}
            hidePreloader = {hidePreloader}
            showNoNewsFound = {showNoNewsFound}
            hideNoNewsFound = {hideNoNewsFound}
            showSearchResult = {showSearchResult}
            hideSearchResult = {hideSearchResult}
            />
                {children}
            <Footer/>
        </div>
    )
}
    
   
    




export default Layout;