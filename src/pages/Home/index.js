// import React from "react";
// import { useAuth } from "../../components/introduce/useAuth";


// function Home(){
//   const { user, logout } = useAuth();

//   if (!user) {
//     return <div>Không có người dùng nào đăng nhập.</div>;
//   }

//   return (
//     <div>
//       <h1>Chào mừng, {user.name}!</h1>
//       <button onClick={logout}>Đăng xuất</button>
//     </div>
//   );
//   }
  
//   export default Home;

import React from "react";
import { useAuth } from "../../components/introduce/useAuth";
import { notify } from '../../components/Notification/notification';

function Home() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    notify(1, "Đăng xuất thành công!", "Thông báo"); // Thông báo khi đăng xuất
    logout();
  };

  if (!user) {
    return <div>Không có người dùng nào đăng nhập.</div>;
  }

  return (
    <div>
      <h1>Chào mừng, {user.name}!</h1>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
}

export default Home;
