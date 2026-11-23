
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Menu, ArrowLeft, UserPlus, Save } from "lucide-react";
import Footer from "../components/Footer.jsx";
import { createEmployee } from "../services/employeeService.js";

function AddEmployee({ onMenuClick, isOpen }) {

    const navigate = useNavigate();

    const notificationCount = 3;

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        position: "",
        joiningDate: "",
        status: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const departments = [
        "Frontend Development",
        "Backend Development",
        "Quality Assurance",
        "UI/UX Design",
        "IT Support",
        "Cybersecurity",
        "Data Science",
        "Database Administration",
        "DevOps",
        "Mobile Development",
        "Full Stack Development",
        "Cloud Computing",
        "Network Administration"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEmployee(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            const employeeData = {
                ...employee,
                name: employee.name.trim(),
                email: employee.email.trim()
            };
            
            await createEmployee(employeeData);

            navigate("/employees");

        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className={`fixed top-0 right-0 z-50 flex items-center justify-between p-4 bg-gray-100 border-b shadow-md transition-all duration-300
                ${isOpen ? "left-64" : "left-0"}`}>
                <button
                    onClick={onMenuClick}
                    className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
                >
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-semibold text-gray-900">
                    Add Employee
                </h1>
                <button className="relative p-2 rounded-full hover:bg-gray-200">
                    <Bell size={24} />
                    {notificationCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </button>
            </header>
            <main className="flex-1 pt-24 p-4">
                <div className="flex items-center justify-between m-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Create New Employee
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Enter the employee information below.
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
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-lg shadow-md p-6 m-4"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <UserPlus size={24} className="text-blue-600" />
                        <h3 className="text-lg font-semibold">
                            Employee Information
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-medium">
                                Employee Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={employee.name}
                                onChange={handleChange}
                                placeholder="Enter employee name"
                                required
                                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={employee.email}
                                onChange={handleChange}
                                placeholder="Enter email address"
                                required
                                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Department *
                            </label>
                            <select
                                name="department"
                                value={employee.department}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-md p-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Department</option>

                                {departments.map(department => (
                                    <option key={department} value={department}>
                                        {department}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Position *
                            </label>
                            <input
                                type="text"
                                name="position"
                                value={employee.position}
                                onChange={handleChange}
                                placeholder="Enter job position"
                                required
                                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Joining Date *
                            </label>
                            <input
                                type="date"
                                name="joiningDate"
                                value={employee.joiningDate}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Employee Status *
                            </label>
                            <select
                                name="status"
                                value={employee.status}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-md p-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Probation">Probation</option>
                                <option value="InActive">InActive</option>
                            </select>
                        </div>
                    </div>
                    {error && (
                        <p className="text-red-500 mt-4">
                            {error}
                        </p>
                    )}
                    <div className="flex justify-end gap-3 mt-8">
                        <button
                            type="button"
                            onClick={() => navigate("/employees")}
                            className="px-5 py-2 border rounded-md hover:bg-gray-100">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
                            <Save size={18} />
                            {loading ? "Creating..." : "Create Employee"}
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default AddEmployee;
