import { BrowserRouter } from 'react-router-dom';
import { Toaster } from "sonner";
import AppLayout from './Pages/AppLayout';
import ActivityProvider from './context/ActivityProvider';
import AuthProvider from "./context/AuthProvider.jsx";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ActivityProvider>
          <AppLayout />
          <Toaster position="top-right" richColors />
        </ActivityProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
