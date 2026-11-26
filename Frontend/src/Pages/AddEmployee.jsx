import useActivities from "../hooks/useActivities.js";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import useForm from "../hooks/useForm.js";
import InputField from "../components/InputField.jsx";
import { validation } from "../utils/validation.js";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, UserPlus, Save } from "lucide-react";
import Footer from "../components/Footer.jsx";
import { createEmployee } from "../services/employeeService.js";
import Navbar from "../components/Navbar.jsx"

function AddEmployee({ onMenuClick, isOpen }) {

    const { addActivity } = useActivities();

    const navigate = useNavigate();

    const fieldRefs = useRef({});

    const notificationCount = 3;

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
        errors,
        handleChange,
        handleSubmit,
    } = useForm(initialValues, validation);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [focusRequest, setFocusRequest] = useState(null);

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
        if (!focusRequest) return;
        fieldRefs.current[focusRequest.field]?.focus();

    }, [focusRequest]);


    const saveEmployee = async (employeeData) => {
        try {
            setError("");
            setLoading(true);

            const formattedEmployee = {
                ...employeeData,
                name: employeeData.name.trim(),
                email: employeeData.email.trim()
            };

            await createEmployee(formattedEmployee);

            addActivity("Added", formattedEmployee.name);

            toast.success("Employee added successfully!");
            navigate("/employees");

        } catch (err) {
            setError(err.message || "Something went wrong");
            toast.error("Failed to add employee");
        } finally {
            setLoading(false);
        }
    };


    const handleInvalid = (validationErrors) => {
        const firstError = Object.keys(validationErrors)[0];
        setFocusRequest({
            field: firstError,
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar title="Add Employee" notificationCount={notificationCount} onMenuClick={onMenuClick} isOpen={isOpen} />
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
                    onSubmit={handleSubmit(saveEmployee, handleInvalid)}
                    className="bg-white rounded-lg shadow-md p-6 m-4"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <UserPlus size={24} className="text-blue-600" />
                        <h3 className="text-lg font-semibold">
                            Employee Information
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            ref={(el) => fieldRefs.current.name = el}
                            label="Employee Name"
                            name="name"
                            type="text"
                            value={employee.name}
                            onChange={handleChange}
                            placeholder="Enter employee name"
                            error={errors.name}
                            required
                        />

                        <InputField
                            ref={(el) => fieldRefs.current.email = el}
                            label="Email"
                            name="email"
                            type="email"
                            value={employee.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            error={errors.email}
                            required
                        />

                        <div>
                            <label className="block mb-2 font-medium">
                                Department *
                            </label>
                            <select
                                ref={(el) => fieldRefs.current.department = el}
                                name="department"
                                value={employee.department}
                                onChange={handleChange}
                                className="w-full border rounded-md p-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Department</option>

                                {departments.map(department => (
                                    <option key={department} value={department}>
                                        {department}
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
                            ref={(el) => fieldRefs.current.position = el}
                            label="Position"
                            name="position"
                            value={employee.position}
                            onChange={handleChange}
                            placeholder="Enter job position"
                            error={errors.position}
                            required
                        />
                        <InputField
                            ref={(el) => fieldRefs.current.joiningDate = el}
                            label="Joining Date"
                            name="joiningDate"
                            type="date"
                            value={employee.joiningDate}
                            onChange={handleChange}
                            error={errors.joiningDate}
                            required
                        />
                        <div>
                            <label className="block mb-2 font-medium">
                                Employee Status *
                            </label>
                            <select
                                ref={(el) => fieldRefs.current.status = el}
                                name="status"
                                value={employee.status}
                                onChange={handleChange}
                                className="w-full border rounded-md p-3 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Probation">Probation</option>
                                <option value="InActive">InActive</option>
                            </select>
                            {errors.status && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.status}
                                </p>
                            )}
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
