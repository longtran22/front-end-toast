import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function LayoutDefault(){
  return(
    <>
      <Header />
        <Sidebar />
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  )
}

export default LayoutDefault;