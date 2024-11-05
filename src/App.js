import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayoutDefault from './layouts/LayoutDefault';
import Home from './pages/Home';
import ManageProduct from './pages/ManageProduct';
import Page404 from './pages/Page404';
import Import from './pages/Import';
import Export from './pages/Export';
import Main from './components/introduce/Main_intro.js';
import Profile from './pages/Profile/index.js';

import ProtectedRoute from "../src/components/introduce/protect.js";
import { Loading } from './components/introduce/Loading.js';



import Notification from './components/Notification/notification.js'; // Import component Notification


function App() {
  return (
    <>
      <Loading />
      <Notification /> {/* Thêm component Notification ở đây */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/home' element={
          <ProtectedRoute><LayoutDefault /></ProtectedRoute>
        }>
          <Route path='/home' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='manage-product' element={<ManageProduct />} />
          <Route path='import' element={<Import />} />
          <Route path='export' element={<Export />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
