import { Bell, Users, ChartNoAxesCombined, CalendarDays, BriefcaseBusiness, User, Menu} from "lucide-react";
import Footer from '../components/Footer.jsx';
import department from '../data/department.json'


function Dashboard({ onMenuClick }) {

    const notificationCount = 3;



    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="relative flex flex-row items-center justify-between p-4 bg-gray-100 border-b shadow-md">
                <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          <Menu size={24} />
        </button>
                <h1 className="text-xl font-semibold text-gray-900 mb-4">Dashboard</h1>
                <button className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <Bell size={24} className="text-gray-700" />
                    {notificationCount > 0 && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </button>
            </header>
            {/* Welcome Banner */}
            <section className="WelcomeBanner flex flex-col rounded-md m-4 items-start justify-center p-4 bg-linear-to-r from-blue-500 to-indigo-600">
                <h1 className="text-2xl font-bold text-white mb-2">Welcome back, HR Manager!</h1>
                <p className="text-gray-300 text-lg">Here's an overview of your team metrics and recent activities.</p>
            </section>

            {/*StatsSection */}
            <section className="StatsSection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <div className="flex flex-row items-center justify-between w-full">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">My Team</h2>
                        <Users size={16} className="text-blue-700" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">12</h1>
                    <p className="text-green-600 mt-2 text-sm">+2 from last month</p>
                </article>
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <div className="flex flex-row items-center justify-between w-full">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Open Positions</h2>
                        <BriefcaseBusiness size={16} className="text-green-700" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">5</h1>
                    <p className="text-green-600 mt-2 text-sm">+1 from last month</p>
                </article>
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <div className="flex flex-row items-center justify-between w-full">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Leave Requests</h2>
                        <CalendarDays size={16} className="text-red-700" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">5</h1>
                    <p className="text-red-600 mt-2 text-sm">+3 from last month</p>
                </article>
                <article className="StatsArticle flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md">
                    <div className="flex flex-row items-center justify-between w-full">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Performance Reviews</h2>
                        <ChartNoAxesCombined size={16} className="text-purple-700" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">12</h1>
                    <p className="text-green-600 mt-2 text-sm">+2 from last month</p>
                </article>
            </section>

            {/* DepartmentOverview & RecentActivities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <section className="DepartmentOverview grid grid-flow-row rounded-md m-4 p-4 bg-white shadow-md">
                    <div className="flex flex-row items-center justify-between w-full">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Department Overview</h2>
                        <User size={16} className="text-blue-700" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 w-full ">
                        {department.map((dept) => (
                            <div key={dept.department} className="flex flex-col w-full">
                                <div className="flex flex-row items-center justify-between w-full">
                                    <h3 className="text-lg font-semibold text-gray-900">{dept.department}</h3>
                                    <p className="text-gray-700">{dept.count} Employees</p>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(dept.count / 12) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="RecentActivities flex flex-col rounded-md m-4  p-4 bg-white shadow-md">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activities</h2>
                    <div className="flex flex-rows gap-2 justify-between items-center w-full p-2">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <div>
                                <h3>New employee onboarded</h3>
                                <p>Sarah Johnson</p>
                            </div>
                        </div>
                        <p>2 hours ago</p>
                    </div>
                    <div className="flex flex-rows gap-2 justify-between items-center w-full p-2">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <div>
                                <h3>Leave request approved</h3>
                                <p>John Doe</p>
                            </div>
                        </div>
                        <p>5 hours ago</p>
                    </div>
                    <div className="flex flex-rows gap-2 justify-between items-center w-full p-2">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            <div>
                                <h3>Performance review completed</h3>
                                <p>sofia Garcia</p>
                            </div>
                        </div>
                        <p>5 hours ago</p>
                    </div>
                    <div className="flex flex-rows gap-2 justify-between items-center w-full p-2">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                            <div>
                                <h3>Payroll processed</h3>
                                <p>William Smith</p>
                            </div>
                        </div>
                        <p>3 hours ago</p>
                    </div>
                    <div className="flex flex-rows gap-2 justify-between items-center w-full p-2">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <div>
                                <h3>New employee onboarded</h3>
                                <p>Sarah Johnson</p>
                            </div>
                        </div>
                        <p>2 hours ago</p>
                    </div>
                </section>
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