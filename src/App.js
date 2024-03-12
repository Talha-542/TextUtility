import { BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const switchmode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showalert('Dark Mode Enabled', 'success');
      document.title = 'T4Text - Dark Mode';
      setInterval(() => {
        document.title = 'Install our T4Text app';
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#042743";
      showalert('Light Mode Enabled', 'success');
      document.title = 'T4Text - Home';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="T4Text" about="About Us" mode={Mode} switchmode={switchmode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            {/* Add more routes as needed */}
            <Route exact path="/" element={<TextForm heading="Enter Your Text" mode={Mode} showalert={showalert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
