import'../../styles/Header.css'
import HeaderNavLeft from './HeaderNavLeft';
import HeaderNavRight from './HeaderNavRight';



const HeaderNav = (props) =>{

    return(
        <div className={`header-top container `}>

                <div className={"header-top__logo-pos"}>
                    <HeaderNavLeft />
                </div>
        
                <div className={"header-top__nav-pos"}>
                    <HeaderNavRight />   
                </div>
        </div>
        
    )
}

export default HeaderNav;