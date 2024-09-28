import { Link } from "react-router-dom";
import './Sidebar.css'
import { MdOutlineHome } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";
import { TbPackageImport } from "react-icons/tb";
import { TbPackageExport } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";

function Sidebar() {
  return(
    <>
      <ul className="sidebar">
        <li className="sidebar__home">
          <Link className="sidebar__link" to='/home'>
          <div className="sidebar__icon"><MdOutlineHome /></div> 
            Home
          </Link>
        </li>
        <li className="sidebar__product">
          <Link className="sidebar__link" to='/home/manage-product'>
          <div className="sidebar__icon">
          <LuClipboardCheck />
          </div>
          Quản lí đơn hàng</Link>
        </li>
        <li className="sidebar__import">
          <Link className="sidebar__link" to='/home/import'>
          <div className="sidebar__icon"><TbPackageImport /></div>
          Nhập kho
          </Link>
        </li>
        <li className="sidebar__export">
          <Link className="sidebar__link" to='/home/export'>
          <div className="sidebar__icon"><TbPackageExport /></div>
          Xuất hàng
          </Link>
        </li>
        <li className="sidebar__">
          <Link className="sidebar__link" to='/home'>
          <div className="sidebar__icon"><IoAddCircleOutline /></div>
          Thêm
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Sidebar;