import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function LayoutDefault(){
  return(
    <>
      <Header />
      <div className="insert_space">

      </div>
      <main>
        <Sidebar />
        <Outlet className="main__content"/>
      </main>
      {/* <footer>Footer</footer> */}
    </>
  )
}

export default LayoutDefault;