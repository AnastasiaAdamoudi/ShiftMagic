import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home.js';
import Auth from './components/users/auth.js';
import CreateEmployeeForm from './components/employees/create-employee-form.js';
import DisplayEmployees from './components/employees/display-employees.js';
import EditEmployeeForm from './components/employees/edit-employee-form.js';
import ShiftOptionsForm from './components/shifts/shift-options-form.js';
import DisplayShifts from './components/shifts/display-shifts.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-employee-form" element={<CreateEmployeeForm />} />
          <Route path="/display-employees" element={<DisplayEmployees />} />
          <Route path="/edit-employee-form" element={<EditEmployeeForm />} />
          <Route path="/shift-options-form" element={<ShiftOptionsForm />} />
          <Route path="/display-shifts" element={<DisplayShifts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
