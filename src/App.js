import './App.css';
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Portfolio from "./components/Portfolio";
import AWSStaticHosting from "./pages/AWSStaticHosting";
import TerraformMigration from "./pages/TerraformMigration";
import SharePointMigration from "./pages/SharePointMigration";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/aws-static-hosting" element={<AWSStaticHosting />} />
          <Route path="/portfolio/terraform-migration" element={<TerraformMigration />} />
          <Route path="/portfolio/sharepoint-migration" element={<SharePointMigration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

