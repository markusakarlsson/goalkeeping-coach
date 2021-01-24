import React, {useState, useEffect} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../../assets/RWK-Logo.png";
import "./style.scss";

const Header = ({
    logo,
    // menuItems
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // useEffect(() => {
    // isMenuOpen
    // ? document.body.classList.add("no-scroll")
    // : document.body.classList.remove("no-scroll")
    // }, [isMenuOpen]);

    return (
        <>
              {/* <div
        className={classNames("header-container", {
          hide: !forceVisible && scrollDirection === "down" && !isMenuOpen,
        })}
      > */}
        <header className="header">
            <div className="content-container">
              <div className="menu-container">
                
            <MenuIcon className="menu-icon"></MenuIcon>
              </div>
              <div className="logo-container">

            <Logo {...logo} onClick={() => setIsMenuOpen(false)} />
              </div>
            </div>
              {/* <div className="trigger-container">
                <Trigger
                  isMenuOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div> */}
            {/* )) */}
        
        </header>

        {/* {children} */}
      {/* </div> */}
        </>
    )
}

const Logo = ({ src, alt, title, onClick }) => (
    // <Link 
    // to={PATHS.HOMEPAGE} 
    // onClick={onClick}>
      <img src={logo} alt={alt} className="logo" title={title} />
    // </Link>
  );

  export default Header