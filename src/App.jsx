import NavigationBar from "./Components/NavigationBar";
import User_Home from "./Components/User_Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import User_Login from "./Components/User_Login";
import Steps from "./Components/Steps";
import Set_Appointment from "./Components/Set_Appointment";
import Remainder from "./Components/Remainder";
import History from "./Components/History";
import UserData from "./context/UserData";

function App() {
  return (
    <Router>
      <UserData>
        <AppContent />
      </UserData>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <NavigationBar />}
      <Routes>
        <Route path="/" element={<User_Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/step" element={<Steps />} />
        <Route path="/login" element={<User_Login />} />
        <Route path="/set-appointment" element={<Set_Appointment />} />
        <Route path="/remainder" element={<Remainder />} />
      </Routes>
    </>
  );
}

export default App;
