import { Pencil, Trash2, Eye} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation.jsx";

function EmployeeTable({employees , onDelete}) {

    const navigate = useNavigate();
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setDeleting(true);
            await onDelete(selectedEmployee.id);
            setSelectedEmployee(null);

        } catch (error) {
            alert(error.message);
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="EmployeeTable max-h-125 overflow-auto rounded-md m-4 p-4 bg-white shadow-md">
            <table className="w-full border-collapse">
                <thead className="sticky top-0 z-10 bg-white shadow-sm">
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
                            <td className='p-2 border-b font-Medium'>{new Date(employee.joiningDate).toLocaleDateString("en-IN")}</td>
                            <td className="p-2 border-b font-Medium">{employee.status}</td>
                            <td className="p-2 border-b font-Medium">
                                <button onClick={() => navigate(`/employees/edit/${employee.id}`)} 
                                className="text-black hover:bg-gray-200 font-bold py-1 px-2 rounded cursor-pointer">
                                    <Pencil size={16} />
                                </button>
                                <button onClick={() => setSelectedEmployee(employee)}
                                className="text-red-500 hover:bg-gray-200 font-bold py-1 px-2 rounded ml-2 cursor-pointer">
                                    <Trash2 size={16} />
                                </button>
                                <button onClick={() => navigate(`/employees/${employee.id}`)}
                                className="text-blue-500 hover:bg-gray-200 font-bold py-1 px-2 rounded ml-2 cursor-pointer">
                                    <Eye size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DeleteConfirmation
                employee={selectedEmployee}
                onCancel={() => setSelectedEmployee(null)}
                onConfirm={handleDelete}
                loading={deleting}
            />
        </div>
    )
}

export default EmployeeTable