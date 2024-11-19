
import React from "react";
import { RiSettings4Line } from "react-icons/ri";
import Modal from "../Modal/index.js";
import Notification from './Notification.js';  // Import component Notification
import '../Header/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">Logo</div>
      <div className="header__right">
        <div className="header__setting">
          <RiSettings4Line />
        </div>
        <div className="header__notifys">
             {/* Thay thế phần thông báo ở đây */}
        <Notification />  {/* Component Notification đã xử lý biểu tượng quả chuông */}
   
        </div>
     
        <div className="header__user">
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default Header;
