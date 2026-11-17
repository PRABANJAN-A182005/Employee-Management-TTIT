import NavBar from './components/NavBar.jsx'
import Footer from './components/footer.jsx'
import EmployeeCard from './components/EmployeeCard.jsx'
import EmployeeStatus from './components/EmployeeStatus.jsx'

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <EmployeeStatus />
      <EmployeeCard />
      <Footer />
    </div>
  )
}

export default App
