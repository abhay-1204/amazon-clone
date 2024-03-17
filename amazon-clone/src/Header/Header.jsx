import { FaSearch } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import './Header.css';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const AmazonHeader = () => {
  const [pop, setPop] = useState(false)
  return (
    <>
    <div className="amazon-header">

      <div className="company-logo">
        <img 
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt="Amazon Logo" />
      </div>
      <div className="company-logo">
        <a href="delivery">Deliver to India</a>
        <MdOutlineLocationOn className="location-icon"/>
      </div>
      <div className="search-box">
        <input className="search-bar"
        type="text" 
        placeholder="Search products..." />

        <FaSearch  
        className="search-icon"/>
      </div>
      <div className="user-actions">
        <div className="header-signin">
          <Link to='/login'>
              Hello,sign in
          </Link>          
        </div>

        <div className="header-right">
          <a href="#">Your Orders</a>
        </div>

        <div className="header-right">
         <a href="#">Cart</a>
        </div>

      </div>
    </div>
    <div className="Navbar-bottom">
    
      <div className="navbar-bottom-left">    
    
        <div className="navbar-bottom-all">
        <GiHamburgerMenu onClick={() => setPop(!pop)} />
        </div>
        <div className="navbar-bottom-options-1">
        <a href="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav">Amazon miniTV</a>
        </div>
        <div className="navbar-bottom-options">
        <a href="">Sell</a>
        </div>
        <div className="navbar-bottom-options">
        <a href="">Best Seller's</a>
        </div>
        <div className="navbar-bottom-options">
        <a href="">Mobiles</a>
        </div>
        <div className="navbar-bottom-options">
        <a href="">Today's</a>
        </div>
        <div className="navbar-bottom-options">
        <a href="">Electronics</a>
        </div>
        <div className="navbar-bottom-options">
        <a href="">Customer Service</a>
        </div>
     
      </div>
          <div className="navbar-bottom-right">
             <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CaptainMiller-Hindi/400x39-SWM_NP._CB580232872_.jpg"/>
          </div>

    </div>
    
    <div className={pop ? "navbar-left-hover" :"navbar-left-hide"}>
      <h4 onClick={() => setPop(false)}>X</h4>
    </div>
    </>
  );
}

export default AmazonHeader;
