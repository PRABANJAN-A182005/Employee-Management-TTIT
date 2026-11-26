import { Users, ChartNoAxesCombined, CalendarDays, BriefcaseBusiness } from "lucide-react";
import { useState, useEffect } from "react";
import { getEmployees } from "../services/employeeService.js";
import Footer from '../components/Footer.jsx';
import StatsSection from '../components/StatsSection.jsx';
import DepartmentOverview from "../components/DepartmentOverview.jsx";
import Loaders from "../components/Loaders.jsx";
import Navbar from "../components/Navbar.jsx"
import RecentActivities from "../components/RecentActivities.jsx";


function Dashboard({ onMenuClick , isOpen }) {

    const notificationCount = 3;

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error("Failed to fetch employees:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    const departmentStats = [
        {
            title: "Total Employees",
            value: employees.length,
            icon: Users,
            description: "+1 from last month"
        },
        {
            title: "Open Positions",
            value: 2,
            icon: BriefcaseBusiness,
            description: "+1 from last month"
        },
        {
            title: "Performance Reviews",
            value: 15,
            icon: ChartNoAxesCombined,
            description: "+10 from last month"
        },
        {
            title: "Leave Requests",
            value: 4,
            icon: CalendarDays,
            description: "No change"
        }
    ];



    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            
            <Navbar title="Dashboard" notificationCount={notificationCount} onMenuClick={onMenuClick} isOpen={isOpen} />
            {/* Welcome Banner */}
            <section className="WelcomeBanner mt-24 flex flex-col rounded-md m-4 items-start justify-center p-4 bg-linear-to-r from-blue-500 to-indigo-600">
                <h1 className="text-2xl font-bold text-white mb-2">Welcome back, HR Manager!</h1>
                <p className="text-gray-300 text-lg">Here's an overview of your team metrics and recent activities.</p>
            </section>

            {/*StatsSection */}
            {loading ? (
                <Loaders />
            ) : (
                <StatsSection stats={departmentStats} />)}

            {/* DepartmentOverview & RecentActivities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {loading ? (
                    <Loaders />
                ) : (
                    <DepartmentOverview employees={employees} />)}
                    
            {/* RecentActivities */}
                <RecentActivities />
            </div>

            {/* Upcoming Events & Reminders */}
            <section className="UpcomingEvents flex flex-col rounded-md m-4 p-4 bg-white shadow-md">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events & Reminders</h2>
                <div className="flex flex-row items-center justify-between w-full p-4 bg-amber-200 text-sm rounded-lg">
                    <div className="flex flex-col gap ">
                        <h3>Team Meeting</h3>
                        <p>Engineering Department</p>
                    </div>
                    <p>Today, 10:00 AM</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-4 bg-rose-200 text-sm rounded-lg">
                    <div className="flex flex-col gap ">
                        <h3> Performance Review</h3>
                        <p>Marketing</p>
                    </div>
                    <p>Tomorrow, 10:00 AM</p>
                </div>
                <div className="flex flex-row items-center justify-between w-full p-4 bg-green-200 text-sm rounded-lg">
                    <div className="flex flex-col gap ">
                        <h3>Annual Business Review</h3>
                        <p>Finance</p>
                    </div>
                    <p>21/11/2026, 10:00 AM</p>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Dashboard