import'../../styles/Footer.css'
import FooterCopyright from './FooterCopyright';
import FooterLinks from './FooterLinks';
import FooterNav from './FooterNav';

const Footer = () =>{

    return(
       <div className={"footer-main container"}>

           <FooterCopyright/>
           <FooterNav/>
           <FooterLinks/>

       </div> 
    )
}

export default Footer;