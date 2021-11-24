import imgLogo from "../assets/logo.svg"
import imgMoon from "../assets/icon-moon.svg"
import imgSun from "../assets/icon-sun.svg"
import imgProfile from "../assets/image-avatar.jpg"
import {useState} from "react"

const Header = (props) =>{
    const [theme,setTheme] = useState(false);

    function changeTheme(){
        if(theme === false){
            setTheme(true);
        }else{
            setTheme(false);
        }
    }
    return(
        <div className="header">
            <div className="top-part">
            <div className="dark-part"></div>
                <img src={imgLogo} alt="logo" className="imgLogo" />
                <div className="light-part"></div>
            </div>
            <div className="bottom-part">
            <div className="icon-dark-light" onClick={() =>{props.darkMode();changeTheme()}} >
                {!theme ? <img src={imgMoon} alt="icon-dark-light" className="imgMoon"/> : <img src={imgSun} alt="icon-dark-light" className="imgMoon"/>}
            </div>
            <div className="profil-image" >
                <img src={imgProfile} alt="" className="imgProfile"/>
            </div>
            </div>
        </div>
    )
}

export default Header;