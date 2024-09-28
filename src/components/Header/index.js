import { RiSettings4Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import '../Header/Header.css'

function Header() {
  return(
    <div className="header">
      <div className="header__logo">Logo</div>
      <div className="header__right">
        <div className="header__setting"><RiSettings4Line /></div>
        <div className="header__notify"><FaRegBell /></div>
        <div className="header__user"><FaRegUser /></div>
      </div>
    </div>
  )
}

export default Header;