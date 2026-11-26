import {Menu,Bell} from 'lucide-react'

function Navbar({onMenuClick,notificationCount,title,isOpen}) {
  return (
            <header className={`fixed top-0 right-0 z-50 flex items-center justify-between p-4 bg-gray-100 border-b shadow-md transition-all duration-300
                ${isOpen ? "left-64" : "left-0"}`}>
                <button
                    onClick={onMenuClick}
                    className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
                >
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-semibold text-gray-900 mb-4">{title}</h1>
                <button className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <Bell size={24} className="text-gray-700" />
                    {notificationCount > 0 && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </button>
            </header>
  )
}

export default Navbar