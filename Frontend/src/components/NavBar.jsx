function NavBar() {
    return (
        <nav className="bg-[#1a253a] text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Employee Management</h1>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">Home</a>
                <a href="#" className="hover:text-blue-300">About</a>
                <a href="#" className="hover:text-blue-300">Contact</a>
            </div>
            <div className="search-bar rounded-lg px-3 py-2 
                 bg-amber-50 flex items-center space-x-2 focus:outline-black
                 hover:bg-gray-200">
                <img src="https://www.svgrepo.com/download/532555/search.svg" width="20" height="20" alt="Search" />
                <input type="text" placeholder="Search..." className="bg-transparent text-black outline-none hover:bg-gray-200 focus:outline-none" />
            </div>
        </nav>
    )
}

export default NavBar