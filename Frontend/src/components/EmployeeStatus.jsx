function EmployeeStatus() {
    return (
        <div className="employee-status grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 mx-8 mt-4 p-4 grow">
            <div className="flex flex-row items-center justify-between text-center w-full">
                <div className="flex flex-col items-start justify-center mb-4">
                    <h2 className="text-5xl font-bold text-left">Employees</h2>
                    <h3 className="text-lg font-semibold mt-2 text-left">Manage and view employee statuses</h3>
                </div>
                <div className="flex flex-row items-end justify-center mb-4 ml-4 gap-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-end">
                        Add Employee
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded items-end mt-2">
                        filter
                    </button>
                </div>
            </div>
            <div className="status-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
                <div className="status-card bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">Active Employees</h3>
                    <p className="text-2xl font-bold">120</p>
                </div>
                <div className="status-card bg-yellow-100 text-yellow-800 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">On Leave</h3>
                    <p className="text-2xl font-bold">15</p>
                </div>
                <div className="status-card bg-blue-100 text-blue-800 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">New Hires</h3>
                    <p className="text-2xl font-bold">5</p>
                </div>
                <div className="status-card bg-purple-100 text-purple-800 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">Departments</h3>
                    <p className="text-2xl font-bold">5</p>
                </div>
                <div className="status-card bg-red-100 text-red-800 p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">Total Salary</h3>
                    <p className="text-2xl font-bold">$1,200,000</p>
                </div>
            </div>
        </div>
    )
}

export default EmployeeStatus