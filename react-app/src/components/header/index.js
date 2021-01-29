import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import logo from "../../assets/RWK-Logo.png";
import "./style.scss";

const Header = ({
    logo,
}) => {

    return (
        <>
        <header className="header">
            <div className="content-container">
              <div className="menu-container">
                
            <MenuIcon className="menu-icon"></MenuIcon>
            
              </div>
            <Logo {...logo}/>
              <div className="logo-container">

            <InfoOutlinedIcon></InfoOutlinedIcon>
              </div>
            </div>
        
        </header>

        </>
    )
}

const Logo = ({ alt, title }) => (
      <img src={logo} alt="RWK-Goaltending" className="logo" title={title} />
  );

  export default Header