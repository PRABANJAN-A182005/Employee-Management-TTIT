import Sidebar from '../components/SideBar.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './Dashboard.jsx';
import EmployeeMangement from './EmployeeManagement.jsx';
import Recruitment from './Recruitment.jsx';
import Login from './Login.jsx';
import EditEmployee from "./EditEmployee";
import AddEmployee from "./AddEmployee.jsx";
import EmployeeDetails from './EmployeeDetails.jsx';

function AppLayout() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const isLoginPage = location.pathname === '/';

    const handleMenuClick = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="flex h-screen overflow-hidden">

            {!isLoginPage && (
                <aside className={`fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 overflow-hidden transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'
                    }`}>
                    <div className="h-full">
                        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                </aside>
            )}

            <main className={`flex-1 min-w-0 h-screen overflow-y-auto bg-gray-50 transition-all duration-300 ${isLoginPage ? 'ml-0' : isOpen ? 'ml-64' : 'ml-0'
                }`}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/employees" element={<EmployeeMangement onMenuClick={handleMenuClick} isOpen={isOpen}/>} />
                    <Route path="/dashboard" element={<Dashboard onMenuClick={handleMenuClick} />} />
                    <Route path="/recruitment" element={<Recruitment onMenuClick={handleMenuClick} />} />
                    <Route path="/employees/edit/:id" element={<EditEmployee onMenuClick={handleMenuClick}/>}/>
                    <Route path="/employees/:id" element={<EmployeeDetails onMenuClick={handleMenuClick}/>}/>
                    <Route path="/employees/add" element={<AddEmployee onMenuClick={handleMenuClick}/>}/>
                </Routes>
            </main>

        </div>
    );
}

export default AppLayout;