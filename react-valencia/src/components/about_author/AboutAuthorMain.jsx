import'../../styles/AboutAuthor.css'
import AboutAuthorImg from './AboutAuthorImg';
import AboutAuthorText from './AboutAuthorText';

const AboutAuthorMain = () =>{

    return(
        <div className={"about-author-main container"}>
            <AboutAuthorImg/>
            <AboutAuthorText/>
        </div>   
    )
}

export default AboutAuthorMain;