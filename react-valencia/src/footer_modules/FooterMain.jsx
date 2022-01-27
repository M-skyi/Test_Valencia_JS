import'./Footer.css'
import FooterCopyright from './FooterCopyright';
import FooterLinks from './FooterLinks';
import FooterNav from './FooterNav';

const FooterMain = () =>{

    return(
       <div className={"footer-main"}>

           <FooterCopyright/>
           <FooterNav/>
           <FooterLinks/>

       </div> 
    )
}

export default FooterMain;