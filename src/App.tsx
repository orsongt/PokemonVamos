import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Error } from "./pages/error/Error";
import { Team } from "./pages/team/Team";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { NavBar } from "./component/nav-bar/NavBar";

export const App = () => {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/" element={<Team />} />
        <Route path="/team/:idName" element={<Team />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </>
  );
}
