import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Survey from "./components/Survey";
import PatientForm from "./components/PatientForm";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PhysicianView from "./components/PhysicianView";
// import CreatePatient from "./components/CreatePatient";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/login" element={<Login />} />
        <Route path="/physician" element={<PhysicianView />}/>
		{/* <Route path="/createpatient" element={<CreatePatient />}> */}
          {/* <Route path="update-patient/:mrn"></Route>
          <Route path="view-patient/:mrn"></Route> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}
