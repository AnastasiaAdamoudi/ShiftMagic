import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Home from './components/home/home.js';
import Auth from './components/users/auth.js';
import CreateEmployeeForm from './components/employees/create-employee-form.js';
import DisplayEmployees from './components/employees/display-employees.js';
import EditEmployeeForm from './components/employees/edit-employee-form.js';
import DisplayWeeklyShifts from './components/shifts/display-weekly-shifts.js';
import GuestCombinedForm from './components/guest/guest-combined-form.js';
import UserHome from './components/users/user-home.js';
import Contact from './components/contact/contact.js';

function App() {
  return (
    <div className="App">
    <CookiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/create-employee-form" element={<CreateEmployeeForm />} />
          <Route path="/display-employees" element={<DisplayEmployees />} />
          <Route path="/edit-employee-form" element={<EditEmployeeForm />} />
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/display-weekly-shifts" element={<DisplayWeeklyShifts />} />
          {/* <Route path="/display-weekly-shifts" element={<DisplayWeeklyShifts />} />
          <Route path="/edit-shifts" element={<EditShiftsForm />} />
          <Route path="/generate-shifts" element={<GenerateShiftsForm />} />
          <Route path="/show-generated-shifts" element={<ShowGeneratedShifts />} /> */}
          <Route path="/guest" element={<GuestCombinedForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </CookiesProvider>
    </div>
  );
}

export default App;
