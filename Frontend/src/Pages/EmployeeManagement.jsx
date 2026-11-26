import { Bell, Menu, X, Download } from 'lucide-react';
import EmployeeTable from '../components/EmployeeTable.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loaders from '../components/Loaders.jsx'
import DropDown from "../components/DropDown.jsx";
import { getEmployees, deleteEmployee } from "../services/employeeService.js"
import { exportEmployees } from "../utils/exportEmployees";
import { toast } from "sonner";
import StatsSection from '../components/StatsSection.jsx'
import useActivities from "../hooks/useActivities.js";

function EmployeeManagement({ onMenuClick, isOpen }) {
    const { addActivity } = useActivities();
    const notificationCount = 3;
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedEmpId, setSelectedEmpId] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getEmployees();
                setEmployees(data);

            } catch (error) {
                console.error(error);

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const handleDeleteEmployee = async (id) => {
        try {
            const employee = employees.find(emp => emp.id === id);
            if (!employee) return;
            await deleteEmployee(id);
            addActivity("Deleted", employee.name);
            setEmployees(prev =>
                prev.filter(employee => employee.id !== id)
            );
            toast.success("Employee deleted successfully!");
        } catch (err) {
            toast.error("Failed to delete employee");
            console.log(err);
        }
    };

    const handleExport = () => {
        const result = exportEmployees(employees);
        if (result) {
            toast.success("Employee data exported successfully!");
        } else {
            toast.error("No employee data available to export");
        }
    };

    const filteredEmployees = employees.filter(employee => {

        const search = searchTerm.trim().toLowerCase();

        const matchesSearchTerm = [
            employee.name,
            employee.email,
            employee.id,
            employee.department,
            employee.position,
            employee.status,
            employee.joiningDate
        ].some(value =>
            String(value ?? '').toLowerCase().includes(search)
        );
        const matchesDepartment = selectedDepartment === '' || employee.department === selectedDepartment;
        return matchesSearchTerm && matchesDepartment;
    });

    const modifiedEmployees = filteredEmployees.filter(emp => {
        return selectedEmpId === '' || emp.id === selectedEmpId;
    })

    const departments = [
        ...new Set(employees.map(employee => employee.department))
    ];

    const id = [
        ...new Set(filteredEmployees.map(employee => employee.id))
    ]

    const employeeStats = employees.reduce((acc, employee) => {
        acc.total++;
        const status = employee.status?.trim().toLowerCase();
        switch (status) {
            case 'active':
                acc.active++;
                break;
            case 'inactive':
                acc.inactive++;
                break;
            case 'probation':
                acc.probation++;
                break;
            default:
                break;
        }
        return acc;
    }, {
        total: 0,
        active: 0,
        inactive: 0,
        probation: 0
    });

    const employeeStatsData = Object.entries(employeeStats)
        .map(([key, value]) => ({
            title: key === "total"
                ? "Total Employees"
                : `${key.charAt(0).toUpperCase() + key.slice(1)} Employees`,

            value: value,

            description: key === "total"
                ? "All employees"
                : `Currently ${key}`
        }));

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className={`fixed top-0 right-0 z-50 flex items-center justify-between p-4 bg-gray-100 border-b shadow-md
            ${isOpen ? 'left-64' : 'left-0'}`}>
                <button onClick={onMenuClick} className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-semibold text-gray-900">
                    Employee Management
                </h1>
                <button className="relative p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <Bell size={24} className="text-gray-700" />
                    {notificationCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </button>
            </header>

            <div className="flex flex-col md:flex-row gap-4 p-4 justify-between pt-20">
                <div className="grid grid-cols-4 gap-4">
                    <input type="text" placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500" />

                    <DropDown options={departments} value={selectedDepartment} onChange={setSelectedDepartment} placeholder="All Departments" />
                    <DropDown options={id} value={selectedEmpId} onChange={setSelectedEmpId} placeholder="All Employees ID" />
                    <button onClick={() => {
                        setSearchTerm('');
                        setSelectedDepartment('');
                        setSelectedEmpId('');
                    }} className="w-fit flex items-center justify-center bg-red-500 text-white p-2 rounded-md cursor-pointer hover:bg-red-400 transition-colors duration-200" >
                        <X size={16} />
                    </button>
                </div>
                <div className="flex flex-row gap-4">
                    <button
                        onClick={handleExport}
                        className="flex items-center gap-2 bg-gray-800 text-white p-2 rounded-md hover:bg-black cursor-pointer">
                        <Download size={18} />
                        Export Data
                    </button>
                    <button onClick={() => navigate("/employees/add")}
                        className="bg-white text-black p-2 rounded-md hover:bg-gray-200 cursor-pointer">
                        Add Employee
                    </button>
                </div>
            </div>

            <StatsSection stats={employeeStatsData} />

            {/* employee Directory */}
            {loading ? (
                <Loaders />
            ) : (
                <section className="EmployeeDirectory flex flex-col rounded-md m-4 p-4 bg-white shadow-md">
                    <h2 className="text-lg font-Medium text-gray-900 ">Employee Directory</h2>
                    <EmployeeTable employees={modifiedEmployees}
                        onDelete={handleDeleteEmployee} />
                </section>
            )}
        </div>
    )
}
export default EmployeeManagement