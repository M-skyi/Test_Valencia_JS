import styles from "../../styles/Footer.module.css"
import Link from "next/link";
import Image from "next/image"
import gitIcon from "../../public/img/iconGit.png"
import facebookIcon from "../../public/img/iconFacebook.png"


 const footerNav = [
    {id:1, title:"Главная", path:"/"},
    {id:2, title:"О проекте", path:"/about-project"},
    {id:3, title:"Valencia.JS", path:"/"}
 ]

 const socialNav = [
    {id:1, path:"https://github.com/M-skyi", src:gitIcon},
    {id:2, path:"https://www.facebook.com/profile.php?id=100006967621155", src:facebookIcon},
 ]

const Footer = () => {
    
    return(
        
        <div className = {`${styles.footer} container`}>

            <div className = {styles.copyright}>
                © 2022  Supersite
            </div>

            <nav className = {styles.nav}>
                {footerNav.map(({id,title,path}) => (
                    <Link href={path} key={id}><a className = {styles.navItem}>{title}</a></Link>
                ))}
            </nav>

            <div className = {styles.social}>
                    {socialNav.map(({id,src,path}) => (
                        <Link key = {id} href={path}><a className = {styles.socialItem}><Image src = {src}/></a></Link>
                    ))}
            </div>

        </div>
    )
}
    


export default Footer;