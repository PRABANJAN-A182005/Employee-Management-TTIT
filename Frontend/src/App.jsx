import Sidebar from './components/SideBar.jsx'
// import Dashboard from './Pages/Dashboard.jsx'
import EmployeeMangement from './Pages/EmployeeManagement.jsx'

function App() {

  return (
    <div className="flex h-screen overflow-hidden">
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200">
        <Sidebar />
    </aside>
    <main className="ml-64 flex-1 h-screen overflow-y-auto bg-gray-50">
        <div className="p-4">
            <EmployeeMangement />
        </div>
    </main>
    </div>
  )
}

export default App
