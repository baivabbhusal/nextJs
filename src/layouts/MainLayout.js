"use client"
import Footer from '@/components/footer ';
import Header from '@/components/header';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({children}) => {
  const {theme}=useSelector((state)=>state.userPreferences);
  return (
    <div className={theme}>
{children}
      
    </div>
  )
}

export default MainLayout
