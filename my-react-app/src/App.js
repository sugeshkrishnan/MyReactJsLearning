import logo from "./logo.svg";
import Main from "./Main/Main";
import About from "./Router/About";
import Contact from "./Router/Contact";
import Errorpage from "./Router/ErrorPage";
import Hook from "./Hooks/Hook";
import Forms from "./Forms/myForm";
import ReduxDemo from "./Redux/ReduxDemo";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  const Links = ["Home", "About", "Contact", "Hook", "Forms", "Redux"];
  const dispatch = useDispatch();

  return (
    <>
      <Router>
        <ul>
          <li key={"1"}>
            <Link to="/">Home</Link>
          </li>
          <li key={"2"}>
            <Link to="/about">About</Link>
          </li>
          <li key={"3"}>
            <Link to="/contact">Contact</Link>
          </li>
          <li key={"4"}>
            <Link to="/hook">Hook</Link>
          </li>
          <li key={"5"}>
            <Link to="/forms">Forms</Link>
          </li>
          <li key={"6"}>
            <Link to="/redux">Redux</Link>
          </li>
        </ul>
        <nav></nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hook" element={<Hook />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/redux" element={<ReduxDemo />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Router>
      <div>
        This is redux store
        <button
          onClick={() =>
            dispatch({
              type: "Car",
            })
          }
        >
          Car
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "Bus",
            })
          }
        >
          Bus
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "Bike",
            })
          }
        >
          Bike
        </button>
      </div>
    </>
  );
}

export default App;
