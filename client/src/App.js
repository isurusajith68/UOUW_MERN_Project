import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";
import Courses from "./pages/Courses";
import OurStaff from "./pages/OurStaff";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import ContactUsPage from "./pages/ContactUs";
import DashboardAddPatient from "./pages/DashboardAddPatient";
import DashboardAddStaff from "./pages/DashboardAddStaff";
import DashboardDoctor from "./pages/DashboardDoctor";
import DashboardParmacy from "./pages/DashboardParmacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/staff" element={<OurStaff />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/add-patient"
          element={<DashboardAddPatient />}
        />
        <Route path="/dashboard/add-staff" element={<DashboardAddStaff />} />
        <Route path="/dashboard/doctor" element={<DashboardDoctor />} />
        <Route path="/dashboard/pharmacy" element={<DashboardParmacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
