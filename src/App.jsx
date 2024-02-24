import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./Pages/HomePage/Homepage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { SiteContextProvider } from "./Context/Context";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { DocPage } from "./Pages/DocPage/DocPage";
import { UpdatePage } from "./Pages/UpdatesPage/UpdatePage";

function App() {
  return (
    <SiteContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/documentation" element={<DocPage />} />
          <Route path="/updates" element={<UpdatePage />} />
          <Route path="/components" element={<Homepage />} />
          <Route path="/about" element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </SiteContextProvider>
  );
}

export default App;
