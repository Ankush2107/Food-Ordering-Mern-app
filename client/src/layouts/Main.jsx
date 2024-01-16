import '../App.css';

import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthProvider";

const Main = () => {

  const { loading } = useContext(AuthContext);

  return (
    <div className="bg-primaryBG">
        {
          loading ? <Loading/> : <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
          </div>
        }
    </div>
  )
}

export default Main;
