import {Bell, Menu} from "lucide-react"
import Footer from "../components/Footer.jsx"

function Recruitment({onMenuClick}) {
    const notificationCount= 3;
  return (
    <div className="min-h-screen flex flex-col">
        <header className="relative flex flex-row items-center justify-between p-4 bg-gray-100 border-b shadow-md">
                <button onClick={onMenuClick} className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-semibold text-gray-900 mb-4">Recruitment</h1>
                <button className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <Bell size={24} className="text-gray-700" />
                    {notificationCount > 0 && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </button>
            </header>
            <main className="flex-1">
            {/* Welcome Banner */}
            <section className="WelcomeBanner flex flex-col rounded-md m-4 items-start justify-center p-4 bg-linear-to-r from-blue-500 to-indigo-600">
                <h1 className="text-2xl font-bold text-white mb-2">Recruitment Management</h1>
                <p className="text-gray-300 text-lg">Manage job postings, track applications, and schedule interviews</p>
            </section>
            
            <div className="flex flex-row gap-4 m-4 items-center justify-between p-4">
                <div className="flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md w-full gap-4">
                    <h1 className="text-lg font-bold text-gray-900 mb-4">Open Positions</h1>
                    <div className="flex flex-row items-center justify-between w-full p-4 bg-rose-200 text-sm rounded-lg">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg">Senior Frontend Developer</h2>
                            <p>Engineering • 12 applicants</p>
                        </div>
                        <p>Active</p>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full p-4 bg-rose-200 text-sm rounded-lg">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg">Marketing Specialist</h2>
                            <p>Marketing • 8 applicants</p>
                        </div>
                        <p>Active</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md w-full gap-4">
                    <h1 className="text-lg font-bold text-gray-900 mb-4">Recent Applications</h1>
                    <div className="flex flex-col justify-between w-full p-4 bg-amber-200 text-sm rounded-lg">
                        <h1 className="text-lg">Sarah Wilson</h1>
                        <h3>Applied for Senior Frontend Developer</h3>
                        <p>2 hours ago</p>
                    </div>
                    <div className="flex flex-col justify-between w-full p-4 bg-amber-200 text-sm rounded-lg">
                        <h1 className="text-lg">David Chen</h1>
                        <h3>Applied for Marketing Specialist</h3>
                        <p>5 hours ago</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-md m-4 items-start justify-center p-4 bg-white shadow-md w-full gap-4">
                    <h1 className="text-lg font-bold text-gray-900 mb-4">Upcoming Interviews</h1>
                    <div className="flex flex-col justify-between w-full p-4 bg-green-200 text-sm rounded-lg">
                        <h1 className="text-lg">Technical Interview</h1>
                        <h3>John Smith - Frontend Dev</h3>
                        <p>Tomorrow 2:00 PM</p>
                    </div>
                    <div className="flex flex-col justify-between w-full p-4 bg-green-200 text-sm rounded-lg">
                        <h1 className="text-lg">Final Round</h1>
                        <h3>Lisa Johnson - Marketing</h3>
                        <p>Friday 10:00 AM</p>
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
  )
}

export default Recruitment