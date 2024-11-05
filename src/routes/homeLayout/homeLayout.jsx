import { useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { UserContext } from "../../lib/UserContext";
import "./homeLayout.scss"


function HomeLayout() {
  const { user } = useContext(UserContext); // Get user from context

  return (
    <div className="homeLayout">
      <div className="navbar">
        <Navbar user={user} />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
