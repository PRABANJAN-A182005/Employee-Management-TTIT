
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Bell,
    Menu,
    ArrowLeft,
    Pencil,
    Mail,
    Building2,
    BriefcaseBusiness,
    CalendarDays,
    User,
    Hash
} from "lucide-react";

import Footer from "../components/Footer.jsx";
import { getEmployeeById } from "../services/employeeService.js";
import Loaders from "../components/Loaders.jsx";

function EmployeeDetails({ onMenuClick }) {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const notificationCount = 3;

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                setLoading(true);
                setError("");
                const data = await getEmployeeById(id);
                setEmployee(data);
            } catch (err) {
                setError(err.message || "Failed to load employee");
            } finally {
                setLoading(false);
            }
        };
        fetchEmployee();
    }, [id]);

    const formatDate = (date) => {
        if (!date) return "Not available";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    const statusStyle = {
        Active: "bg-green-100 text-green-700",
        Probation: "bg-orange-100 text-orange-700",
        InActive: "bg-red-100 text-red-700"
    };
    if (loading) {
        return <Loaders />;
    }
    if (error || !employee) {
        return (
            <div className="min-h-screen flex flex-col bg-gray-100">
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <p className="text-red-500">
                        {error || "Employee not found"}
                    </p>

                    <button
                        onClick={() => navigate("/employees")}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        Back to Employees
                    </button>
                </div>
                <Footer />
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="relative flex flex-row items-center justify-between p-4 bg-gray-100 border-b shadow-md">
                <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          <Menu size={24} />
        </button>
                <h1 className="text-xl font-semibold text-gray-900 mb-4">Employee Details</h1>
                <button className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <Bell size={24} className="text-gray-700" />
                    {notificationCount > 0 && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </button>
            </header>
            <main className="flex-1 pt-24 p-4">
                <div className="flex items-center justify-between m-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Employee Profile
                        </h2>
                        <p className="text-gray-500 mt-1">
                            View employee information and employment details.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/employees")}
                        className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-200"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </button>
                </div>
                <section className="bg-white rounded-lg shadow-md p-6 m-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold">
                                {employee.name?.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    {employee.name}
                                </h2>
                                <p className="text-gray-500">
                                    {employee.position}
                                </p>
                                <p className="text-sm text-gray-400 mt-1">
                                    Employee ID: {employee.id}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle[employee.status] || "bg-gray-100 text-gray-700"}`}>
                                {employee.status || "Not specified"}
                            </span>
                            <button
                                onClick={() => navigate(`/employees/edit/${employee.id}`)}
                                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                            >
                                <Pencil size={16} />
                                Edit Employee
                            </button>
                        </div>
                    </div>
                </section>             
                <section className="bg-white rounded-lg shadow-md p-6 m-4">
                    <h3 className="text-lg font-semibold mb-6">
                        Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <User className="text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-500">Full Name</p>
                                <p className="font-medium">{employee.name}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-500">Email Address</p>
                                <p className="font-medium">{employee.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Hash className="text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-500">Employee ID</p>
                                <p className="font-medium">{employee.id}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white rounded-lg shadow-md p-6 m-4">
                    <h3 className="text-lg font-semibold mb-6">
                        Employment Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                            <Building2 className="text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-500">Department</p>
                                <p className="font-medium">{employee.department}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <BriefcaseBusiness className="text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-500">Position</p>
                                <p className="font-medium">{employee.position}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CalendarDays className="text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-500">Joining Date</p>
                                <p className="font-medium">
                                    {formatDate(employee.joiningDate)}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CalendarDays className="text-blue-600" />
                            <div>
                                <p className="text-sm text-gray-500">Record Created</p>
                                <p className="font-medium">
                                    {formatDate(employee.createdAt)}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default EmployeeDetails;
