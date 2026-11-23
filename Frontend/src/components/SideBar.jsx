import {
    LayoutDashboard,
    Users,
    CalendarCheck,
    BriefcaseBusiness,
    Bell,Settings, LogOut
} from "lucide-react";
import { NavLink  , useNavigate } from "react-router-dom";


function SideBar({ isOpen }) {
  const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };


  return (
    <aside  className={`
        h-screen bg-gray-900 text-white
        overflow-hidden shrink-0
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-100" : "w-0"}
      `}>
    <nav className="bg-gray-100 flex flex-col justify-between w-64 h-screen border-r shadow-md">
      <div>
      <div className="border-b h-19.5 flex items-center justify-center">
        <h1 className="text-xl font-semibold text-center text-gray-900 p-2">HRMS Portal</h1>
      </div>

      <ul className="flex flex-col gap-2 mt-4 w-full text-center items-start">

        <li  className = "over:border-blue-300 hover:bg-blue-50 flex flex-row">
          <NavLink to="/Dashboard" className="text-gray-700 px-4 py-2 rounded-md border 
          border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200 flex flex-row items-center gap-4">
          <LayoutDashboard size={16} className="text-rose-500"/>Dashboard</NavLink>
        </li>

        <li className = "over:border-blue-300 hover:bg-blue-50 flex flex-row">
          <NavLink to="/employees" className="text-gray-700 px-4 py-2 rounded-md border 
          border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200 flex flex-row items-center gap-4">  
          <Users size={16} className="text-green-500"/>Employees Management</NavLink>
        </li>

        <li className = "over:border-blue-300 hover:bg-blue-50 flex flex-row">
          <NavLink to="/" className="text-gray-700 px-4 py-2 rounded-md border 
          border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200 flex flex-row items-center gap-4">
          <CalendarCheck size={16} className="text-orange-500"/>Attendance & Leave</NavLink>
        </li>

        <li className = "over:border-blue-300 hover:bg-blue-50 flex flex-row">
          <NavLink to="/recruitment" className="text-gray-700 px-4 py-2 rounded-md border 
          border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200 flex flex-row items-center gap-4">
          <BriefcaseBusiness size={16} className="text-red-500"/>Recruitment</NavLink>
        </li>

        <li className = "over:border-blue-300 hover:bg-blue-50 flex flex-row">
          <NavLink to="/" className="text-gray-700 px-4 py-2 rounded-md border 
          border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200 flex flex-row items-center gap-4">
          <Bell size={16} className="text-purple-500"/>Notifications</NavLink>
        </li>

      </ul>
      </div>

      <div className="flex flex-row gap-2 items-center justify-center mb-8">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-200"><Settings/></button>
        <button onClick={handleLogout} className="bg-black text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all duration-200"><LogOut /></button>
      </div>
    </nav>
    </aside>
  )
}

export default SideBar