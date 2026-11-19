import { Pencil, Trash2 } from "lucide-react";
function EmployeeCard({employees}) {

    return (
        <div className="EmployeeCard flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
            <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr className="text-center ">
                        <th className="p-2 border-b font-Medium">ID</th>
                        <th className="p-2 border-b font-Medium">Employee</th>
                        <th className="p-2 border-b font-Medium">Department</th>
                        <th className="p-2 border-b font-Medium">Position</th>
                        <th className="p-2 border-b font-Medium">Joining Date</th>
                        <th className="p-2 border-b font-Medium">Status</th>
                        <th className="p-2 border-b font-Medium">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {employees.map(employee => (
                        <tr className="hover:bg-gray-100" key={employee.id}>
                            <td className="p-2 border-b font-Medium">{employee.id}</td>
                            <td className="p-2 border-b font-Medium">
                                <div className="flex flex-col  gap-2">
                                    <span>{employee.name}</span>
                                    <span>{employee.email}</span>
                                </div>
                            </td>
                            <td className="p-2 border-b font-Medium">{employee.department}</td>
                            <td className='p-2 border-b font-Medium'>{employee.position}</td>
                            <td className='p-2 border-b font-Medium'>{employee.joiningDate}</td>
                            <td className="p-2 border-b font-Medium">{employee.status}</td>
                            <td className="p-2 border-b font-Medium">
                                <button className="text-black hover:bg-gray-200 font-bold py-1 px-2 rounded">
                                    <Pencil size={16} />
                                </button>
                                <button className="text-red-500 hover:bg-gray-200 font-bold py-1 px-2 rounded ml-2">
                                    <Trash2 size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeCard