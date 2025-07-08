import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  UserCog,
  Binoculars,
  MapPinned,
  CircleUser,
  ShieldUser,
  LogOut,
} from "lucide-react";
import "./Navigationbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Secure X</div>

      {/* Main navigation links */}
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">
            <LayoutDashboard />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/usermanage">
            <UserCog />
            User Management
          </Link>
        </li>
        <li>
          <Link to="/lockermonitoring">
            <Binoculars />
            Locker Monitoring
          </Link>
        </li>
        <li>
          <Link to="/map">
            <MapPinned />
            Map
          </Link>
        </li>
        <li>
          <Link to="/adminmanage">
            <ShieldUser />
            Admin Management
          </Link>
        </li>
      </ul>

      {/* User section at bottom */}
      <ul className="user-section">
        <li>
          <Link to="/usercontrol">
            <CircleUser />
            User Profile
          </Link>
        </li>
        <li>
          <Link to="/home" className="logout-link">
            <LogOut />
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
