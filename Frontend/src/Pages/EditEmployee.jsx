import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import InputField from "../components/InputField.jsx";
import useForm from "../hooks/useForm.js";
import { toast } from "sonner";
import { validation } from "../utils/validation.js";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import useActivities from "../hooks/useActivities.js";

import {
    getEmployeeById,
    updateEmployee
} from "../services/employeeService.js";

import Loaders from "../components/Loaders.jsx";

function EditEmployee({ onMenuClick, isOpen }) {

    const { addActivity } = useActivities();
    const { id } = useParams();
    const navigate = useNavigate();

    const initialValues = {
        name: "",
        email: "",
        department: "",
        position: "",
        joiningDate: "",
        status: ""
    };

    const {
        employee,
        setEmployee,
        errors,
        handleChange,
        handleSubmit
    } = useForm(initialValues, validation);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const notificationCount = 3;

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

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                setLoading(true);

                const data = await getEmployeeById(id);

                setEmployee({
                    id: data.id || "",
                    name: data.name || "",
                    email: data.email || "",
                    department: data.department || "",
                    position: data.position || "",
                    joiningDate: data.joiningDate
                        ? data.joiningDate.slice(0, 10)
                        : "",
                    status: data.status || ""
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id, setEmployee]);


    const saveEmployee = async (employeeData) => {
        try {
            setSaving(true);
            setError("");

            await updateEmployee(id, employeeData);
            addActivity("Updated", employeeData.name);
            toast.success("Employee updated successfully!");
            navigate("/employees");

        } catch (err) {
            setError(err.message);
            toast.error("Failed to update employee");
        } finally {
            setSaving(false);
        }
    };


    if (loading) {
        return (
            <Loaders />
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
            <Navbar title="Edit Employee" notificationCount={notificationCount} onMenuClick={onMenuClick} isOpen={isOpen} />
            <main className="flex-1 p-4">
                <div className="flex items-center justify-between m-4 mt-24">
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

                <form onSubmit={handleSubmit(saveEmployee)} noValidate className="bg-white shadow-md rounded-lg p-6 m-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            label="Employee ID"
                            value={employee.id || ""}
                            name="id"
                            disabled
                        />
                        <InputField
                            label="Employee Name"
                            name="name"
                            type="text"
                            value={employee.name}
                            error={errors.name}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            value={employee.email}
                            error={errors.email}
                            onChange={handleChange}
                        />
                        <div>
                            <label className="block mb-2 font-medium">
                                Department
                            </label>
                            <select
                                name="department"
                                value={employee.department}
                                onChange={handleChange}
                                className="w-full border rounded-md p-3"
                            >
                                <option value={employee.department}>{employee.department}</option>
                                {departments.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                            {errors.department && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.department}
                                </p>
                            )}
                        </div>
                        <InputField
                            label="Position"
                            name="position"
                            value={employee.position}
                            error={errors.position}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Joining Date"
                            name="joiningDate"
                            type="date"
                            error={errors.joiningDate}
                            value={employee.joiningDate}
                            onChange={handleChange}
                        />
                        <div>
                            <label className="block mb-2 font-medium">
                                Employee Status
                            </label>
                            <select
                                name="status"
                                value={employee.status}
                                onChange={handleChange}
                                className="w-full border rounded-md p-3"
                            >
                                <option value={employee.status}>{employee.status}</option>
                                <option value="Active">Active</option>
                                <option value="InActive">InActive</option>
                                <option value="Probation">Probation</option>
                            </select>
                            {errors.status && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.status}
                                </p>
                            )}
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
