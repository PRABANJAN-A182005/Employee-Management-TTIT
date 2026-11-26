import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  BriefcaseBusiness,
  Bell, Settings, LogOut
} from "lucide-react";
import logo from '../assets/hrm.jpg';
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import { toast } from "sonner";

function SideBar({ isOpen }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate('/');
  };


  return (
    <aside className={`
        h-screen bg-gray-900 text-white
        overflow-hidden shrink-0
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-100" : "w-0"}
      `}>
      <nav className="bg-gray-100 flex flex-col justify-between w-64 h-screen border-r shadow-md">
        <div>
          <div className="border-b h-19.5 flex items-center justify-center">
            <img src={logo} className="w-12 h-12 rounded-3xl object-contain" alt="LOGO" />
            <h1 className="text-xl font-semibold text-center text-gray-900 p-2">HRMS Portal</h1>
          </div>

          <ul className="flex flex-col gap-2 mt-4 w-full text-center items-start">

            <li className="over:border-blue-300 hover:bg-blue-50 flex flex-row w-full">
              <NavLink to="/dashboard" className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all w-full 
                                ${isActive
                  ? "bg-blue-100 text-blue-700 font-bold"
                  : "text-gray-600 hover:bg-gray-100"
                }`
              }>
                <LayoutDashboard size={16} className="text-rose-600" />Dashboard</NavLink>
            </li>

            <li className="over:border-blue-300 hover:bg-blue-50 flex flex-row w-full">
              <NavLink to="/employees" className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all w-full 
                                ${isActive
                  ? "bg-blue-100 text-blue-700 font-bold"
                  : "text-gray-600 hover:bg-gray-100"
                }`
              }>
                <Users size={16} className="text-green-600" />Employees Management</NavLink>
            </li>

            <li className="over:border-blue-300 hover:bg-blue-50 flex flex-row w-full">
              <NavLink to="/" className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all w-full 
                                ${isActive
                  ? "bg-blue-100 text-blue-700 font-bold"
                  : "text-gray-600 hover:bg-gray-100"
                }`
              }>
                <CalendarCheck size={16} className="text-orange-600" />Attendance & Leave</NavLink>
            </li>

            <li className="over:border-blue-300 hover:bg-blue-50 flex flex-row w-full">
              <NavLink to="/recruitment" className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all w-full 
                                ${isActive
                  ? "bg-blue-100 text-blue-700 font-bold"
                  : "text-gray-600 hover:bg-gray-100"
                }`
              }>
                <BriefcaseBusiness size={16} className="text-red-600" />Recruitment</NavLink>
            </li>

            <li className="over:border-blue-300 hover:bg-blue-50 flex flex-row w-full">
              <NavLink to="/" className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-all w-full 
                                ${isActive
                  ? "bg-blue-100 text-blue-700 font-bold"
                  : "text-gray-600 hover:bg-gray-100"
                }`
              }>
                <Bell size={16} className="text-purple-600" />Notifications</NavLink>
            </li>

          </ul>
        </div>

        <div className="flex flex-row gap-2 items-center justify-center mb-8">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-200"><Settings /></button>
          <button onClick={handleLogout} className="bg-black text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all duration-200"><LogOut /></button>
        </div>
      </nav>
    </aside>
  )
}

export default SideBar