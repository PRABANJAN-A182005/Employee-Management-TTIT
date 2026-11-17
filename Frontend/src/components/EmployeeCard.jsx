import employees from '../data/employees.js'

function EmployeeCard() {
    return (
        <div className="employee-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 grow">
            {employees.map(employee => (
                <div key={employee.id} className="employee-card employee-card w-full min-h-60 mx-auto bg-white rounded-xl shadow-md border p-4">
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <img className="rounded-full w-24 h-24 object-cover" src={employee.img} alt={employee.name} />
                        <div className="">
                            <h2 className="text-xl font-bold text-gray-900">{employee.name}</h2>
                            <p className="text-sm text-gray-500">{employee.position}</p>
                        </div>
                    </div>
                    <p className="bg-indigo-300 text-indigo-700 text-bold rounded-full px-3 py-1 inline">{employee.department}</p>
                    <p className="text-gray-600 mt-2">Email: {employee.email}</p>
                    <div className="flex items-center justify-between gap-3 mt-auto pt-4">
                        <p className="text-gray-600 ">Salary:<b>${employee.salary.toLocaleString()}</b></p>
                        <div className="flex space-x-2 ">
                            <button className="bg-blue-400 hover:bg-blue-500 font-bold py-2 px-4 rounded">
                                <img src="https://www.svgrepo.com/show/458430/view.svg" alt="View" className="w-5 h-5 invert" />
                            </button>
                            <button className="bg-red-400 hover:bg-red-500 font-bold py-2 px-4 rounded">
                                <img src="https://www.svgrepo.com/show/502614/delete.svg" alt="Delete" className="w-5 h-5 invert" />
                            </button>
                            <button className="bg-green-400 hover:bg-green-500 font-bold py-2 px-4 rounded">
                                <img src="https://www.svgrepo.com/show/509911/edit.svg" alt="Edit" className="w-5 h-5 invert" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EmployeeCard