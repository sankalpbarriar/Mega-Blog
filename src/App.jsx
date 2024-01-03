import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import conf from "./conf/conf";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);   //to show loading indicator for conditionl rendering
  const dispatch = useDispatch()

  //pucho us service se aap loged in ho ya nahi
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))    //dispatch it to authSlice login
        } else {
          dispatch(logout()) //agar login nahi h to
        }
      })
      .finally(() => setLoading(false))    //loading ka kaam ho chuka hai isliye false
  }, [])


  //CONDITIONAL RENDERING
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO:<Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
