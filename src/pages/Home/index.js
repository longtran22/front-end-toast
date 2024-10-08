import React from "react";
import { useAuth } from "../../components/introduce/useAuth";
function Home(){
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Không có người dùng nào đăng nhập.</div>;
  }

  return (
    <div>
      <h1>Chào mừng, {user.name}!</h1>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
  }
  
  export default Home;