import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Bell, Menu, ArrowLeft, Save} from "lucide-react";

import Footer from "../components/Footer.jsx";
import {
    getEmployeeById,
    updateEmployee
} from "../services/employeeService.js";
import Loaders from "../components/Loaders.jsx";

function EditEmployee({ onMenuClick }) {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        department: "",
        position: "",
        joiningDate: "",
        status: ""
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const notificationCount = 3;

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                setLoading(true);

                const data = await getEmployeeById(id);

                setEmployee({
                    ...data,
                    joiningDate: data.joiningDate
                        ? data.joiningDate.slice(0, 10)
                        : ""
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id]);

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

            setSaving(true);
            setError("");
            await updateEmployee(id, employee);
            alert("Employee updated successfully!");
            navigate("/employees");

        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <Loaders/>
        );
    }

    if (error && !employee.name) {
        return (
            <div className="p-8">
                <p className="text-red-500">{error}</p>
                <button
                    onClick={() => navigate("/employees")}
                    className="mt-4 text-blue-600"
                >
                    Back to Employees
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header className="relative flex items-center justify-between p-4 bg-gray-100 border-b shadow-md">
                <button onClick={onMenuClick} className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-semibold text-gray-900">
                    Edit Employee
                </h1>
                <button className="relative p-2 rounded-full hover:bg-gray-200">
                    <Bell size={24} />
                    {notificationCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </button>
            </header>
            <main className="flex-1 p-4">
                <div className="flex items-center justify-between m-4">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Edit Employee Details
                        </h2>
                        <p className="text-gray-500 mt-1">
                            Update employee information
                        </p>
                    </div>
                    <button onClick={() => navigate("/employees")} className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100">
                        <ArrowLeft size={18} />
                        Back
                    </button>

                </div>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 m-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">               
                        <div>
                            <label className="block mb-2 font-medium">
                                Employee ID
                            </label>
                            <input
                                value={employee.id || ""}
                                disabled
                                className="w-full border rounded-md p-3 bg-gray-100"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Employee Name
                            </label>
                            <input
                                name="name"
                                value={employee.name}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-md p-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={employee.email || ""}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-md p-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Department
                            </label>
                            <select
                                name="department"
                                value={employee.department}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-md p-3"
                            >
                                <option value="">Select Department</option>
                                <option value="Engineering">Engineering</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Tools">Tools</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Position
                            </label>
                            <input
                                name="position"
                                value={employee.position}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-md p-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Joining Date
                            </label>
                            <input
                                type="date"
                                name="joiningDate"
                                value={employee.joiningDate}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-md p-3"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Employee Status
                            </label>
                            <select
                                name="status"
                                value={employee.status}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-md p-3"
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="On Leave">Probation</option>
                            </select>
                        </div>
                    </div>
                    {error && (
                        <p className="text-red-500 mt-4">{error}</p>
                    )}
                    <div className="flex justify-end gap-3 mt-8">
                        <button
                            type="button"
                            onClick={() => navigate("/employees")}
                            className="px-5 py-2 border rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                        >
                            <Save size={18} />
                            {saving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>

            </main>

            <Footer />

        </div>
    );
}

export default EditEmployee;
