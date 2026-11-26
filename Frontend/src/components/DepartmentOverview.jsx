
import { Users } from "lucide-react";

function DepartmentOverview({ employees = [] }) {

    // Calculate employee count for each department
    const departmentStats = employees.reduce((acc, employee) => {
        const department = employee.department;

        if (!department) return acc;

        acc[department] = (acc[department] || 0) + 1;

        return acc;
    }, {});

    // Convert object into an array
    const departments = Object.entries(departmentStats).map(
        ([department, count]) => ({
            department,
            count
        })
    );

    // Find the highest department count for progress bars
    const maxCount = Math.max(
        ...departments.map((dept) => dept.count),
        1
    );

    return (
        <section className="DepartmentOverview grid grid-flow-row rounded-md m-4 p-4 bg-white shadow-md">
            <div className="flex flex-row items-center justify-between w-full">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                    Department Overview
                </h2>
                <Users size={16} className="text-blue-700" />
            </div>
            <div className="grid grid-cols-1 gap-4 w-full max-h-[400px] overflow-y-auto space-y-3 pr-2">
                {departments.map((dept) => (
                    <div key={dept.department} className="flex flex-col w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {dept.department}
                            </h3>

                            <p className="text-gray-700">
                                {dept.count} Employees
                            </p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{
                                    width: `${(dept.count / maxCount) * 100}%`
                                }}
                            />
                        </div>
                    </div>
                ))}
                {departments.length === 0 && (
                    <p className="text-gray-500 text-sm">
                        No department data available.
                    </p>
                )}
            </div>
        </section>
    );
}

export default DepartmentOverview;
