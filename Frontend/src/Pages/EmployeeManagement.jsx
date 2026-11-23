import { Bell , Menu , X   } from 'lucide-react';
import EmployeeTable from '../components/EmployeeTable.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loaders from '../components/Loaders.jsx'
// import statusData from "../data/status.json";
// import employees from '../data/employees.json';
import DropDown from "../components/DropDown.jsx";
import { getEmployees, deleteEmployee } from "../services/employeeService.js"

function EmployeeManagement({onMenuClick , isOpen}) {
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
        await deleteEmployee(id);
        setEmployees(prev =>
            prev.filter(employee => employee.id !== id)
        );
    };

    const filteredEmployees = employees.filter(employee => {
        const matchesSearchTerm = [
            employee.name,
            employee.email,
            employee.id,
            employee.department,
            employee.position,
            employee.status,
            employee.joiningDate
        ].some(value =>
            String(value ?? '').toLowerCase().includes(searchTerm)
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
        if (employee.status === 'Active') {
            acc.active++;
        } else if(employee.status === 'InActive') {
            acc.inactive++;
        }
        else{
            acc.Probation++;
        }
        return acc;
    }, {
        total: 0,
        active: 0,
        inactive: 0,
        Probation:0
    });

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

                    {/* <select className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500" 
                value={selectedEmpId} onChange={(e) => setSelectedEmpId(e.target.value)}>
                   <option value="">All EID</option>
                     {filteredEmployees.map(employee => (
                        <option key={employee.id} value={employee.id}>
                            {employee.id}
                        </option>
                    ))}
                </select> */}

                    <button onClick={() => {
                        setSearchTerm('');
                        setSelectedDepartment('');
                        setSelectedEmpId('');
                    }} className="w-fit flex items-center justify-center bg-red-500 text-white p-2 rounded-md cursor-pointer hover:bg-red-400 transition-colors duration-200" >
                        <X size={16} />
                    </button>
                </div>
                <div className="flex flex-row gap-4">
                    <button className="bg-black text-white p-2 rounded-md hover:bg-gray-800 cursor-pointer">
                        Export Data
                    </button>
                    <button onClick={() => navigate("/employees/add")}
                    className="bg-white text-black p-2 rounded-md hover:bg-gray-200 cursor-pointer">
                        Add Employee
                    </button>
                </div>
            </div>

            <section className="StatsSection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 m-4">
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <h1 className="text-2xl font-Medium text-gray-700">{employeeStats.total}</h1>
                    <h2 className="text-md font-Medium text-gray-500 mb-4">Total Employees</h2>
                </article>
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <h1 className="text-2xl font-Medium text-green-600">{employeeStats.active}</h1>
                    <h2 className="text-md font-Medium text-gray-500 mb-4">Active</h2>
                </article>
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <h1 className="text-2xl font-Medium text-orange-600">{employeeStats.Probation}</h1>
                    <h2 className="text-md font-Medium text-gray-500 mb-4">On Probation</h2>
                </article>
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <h1 className="text-2xl font-Medium text-rose-600">{employeeStats.inactive}</h1>
                    <h2 className="text-md font-Medium text-gray-500 mb-4">Inactive</h2>
                </article>
            </section>

            {/* employee Directory */}
            {loading ? (
                <Loaders />
            ) : (

                <section className="EmployeeDirectory flex flex-col rounded-md m-4 p-4 bg-white shadow-md">
                    <h2 className="text-lg font-Medium text-gray-900 mb-4">Employee Directory</h2>
                    <EmployeeTable employees={modifiedEmployees}
                    onDelete={handleDeleteEmployee} />
                </section>

            )}
        </div>
    )
}
export default EmployeeManagement