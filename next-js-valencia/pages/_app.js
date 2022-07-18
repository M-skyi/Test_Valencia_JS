import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { useState,useCallback } from "react";

function MyApp({ Component, pageProps }) {

        const [preloader, setPreloader] = useState(false);
        const [noFound, setNoFound] = useState(false);
        const [result, setResult] = useState(false);

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
                    setNoFound(true);
                }, [noFound],
            
              );
              const hideNoNewsFound = useCallback(
                () => {
                    setNoFound(false);
                }, [noFound],
            
              );
              const showSearchResult = useCallback(
                () => {
                    setResult(true);
                }, [result],
            
              );
              const hideSearchResult = useCallback(
                () => {
                    setResult(false);
                }, [result],
            
              );     

 return <Layout 
            showPreloader = {showPreloader}
            hidePreloader = {hidePreloader}
            showNoNewsFound = {showNoNewsFound}
            hideNoNewsFound = {hideNoNewsFound}
            showSearchResult = {showSearchResult}
            hideSearchResult = {hideSearchResult}
        >
                 <Component 
                 {...pageProps} 
                 loader={preloader} 
                 noFound={noFound} 
                 result={result}
                 />
        </Layout>
       
  
}

export default MyApp
