function SideBar() {
  return (
    <nav className="bg-gray-100 flex flex-col justify-between p-4 w-64 h-screen border-r shadow-md">

      <h1 className="text-2xl font-bold text-center text-gray-900 border p-2">HRMS Portal</h1>

      <ul className="flex flex-col gap-2 mt-4">

        <li><a href="#" className="text-gray-700 px-4 py-2 rounded-md border 
        border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200">Dashboard</a></li>

        <li><a href="#" className="text-gray-700 px-4 py-2 rounded-md border 
        border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200">Employees Management</a></li>

        <li><a href="#" className="text-gray-700 px-4 py-2 rounded-md border 
        border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200">Attendance & Leave</a></li>

        <li><a href="#" className="text-gray-700 px-4 py-2 rounded-md border 
        border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200">Recruitment</a></li>

        <li><a href="#" className="text-gray-700 px-4 py-2 rounded-md border 
        border-transparent hover:border-blue-300 hover:bg-blue-50 
        hover:text-blue-600 transition-all duration-200">Notifications</a></li>

      </ul>

      <div className="flex flex-col gap-2 mt-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all duration-200">Settings</button>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all duration-200">Logout</button>
      </div>
    </nav>
  )
}

export default SideBar