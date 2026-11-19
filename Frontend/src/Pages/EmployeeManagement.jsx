import { Bell } from 'lucide-react';
import EmployeeCard from '../components/EmployeeCard.jsx';
import {useState} from 'react';
import employees from '../data/employees.json';

function EmployeeManagement() {
    const notificationCount = 3;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const modifiedEmployees = employees.filter(employee => {
        const matchesSearchTerm = employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesDepartment = selectedDepartment === '' || employee.department === selectedDepartment;
        return matchesSearchTerm && matchesDepartment;
    });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
        <header className="flex flex-row items-center justify-between p-4 bg-gray-100 border-b shadow-md">
                <h1 className="text-xl font-Medium text-gray-900 mb-4">Employee Management</h1>
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <Bell size={24} className="text-gray-700" />
                    {notificationCount > 0 && (
                        <span className="absolute top-8 right-8 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </button>
        </header>

        <div className="flex flex-col md:flex-row gap-4 p-4 justify-between">
            <div className="flex flex-row gap-4">
                <input type="text" placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
                className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500" />
                <select className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500" 
                value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                    <option value="">All Department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Finance">Finance</option>
                </select>
            </div>
            <div className="flex flex-row gap-4">
                <button className="bg-black text-white p-2 rounded-md hover:bg-gray-800">
                    Export Data
                </button>
                <button className="bg-white text-black p-2 rounded-md hover:bg-gray-200">
                    Add Employee
                </button>
            </div>
        </div>

        <section className="StatsSection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 m-4">
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <h1 className="text-2xl font-Medium text-gray-700">248</h1>
                    <h2 className="text-md font-Medium text-gray-500 mb-4">Total Employees</h2>
                </article>
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <h1 className="text-2xl font-Medium text-green-600">235</h1>
                    <h2 className="text-md font-Medium text-gray-500 mb-4">Active</h2>
                </article>
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <h1 className="text-2xl font-Medium text-orange-600">5</h1>
                    <h2 className="text-md font-Medium text-gray-500 mb-4">On Probation</h2>
                </article>
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <h1 className="text-2xl font-Medium text-rose-600">8</h1>
                    <h2 className="text-md font-Medium text-gray-500 mb-4">Inactive</h2>
                </article>
        </section>

        {/* employee Directory */}
        <section className="EmployeeDirectory flex flex-col rounded-md m-4 p-4 bg-white shadow-md">
            <h2 className="text-lg font-Medium text-gray-900 mb-4">Employee Directory</h2>
            <EmployeeCard employees = {modifiedEmployees} />
        </section>
    </div>
  )
}
export default EmployeeManagement