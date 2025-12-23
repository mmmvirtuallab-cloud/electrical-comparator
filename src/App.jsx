// autocollimator-lab/pages/index.tsx
import React from "react";
// 1. Import 'Navigate' so we can redirect invalid users
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import IntroPage from "./IntroPage";
import ElectricalComparator from "./Electricalcomparator/ElectricalComparator";

function App() {
  return (
    <Router>
      <Routes>
        {/* --- 1. Info / Intro Page (Home) --- */}
        <Route path="/" element={<IntroPage />} />

        {/* --- 2. Dedicated Full-Screen Lab Route --- */}
        <Route path="/lab" element={<ElectricalComparator />} />

        {/* --- 3. CATCH-ALL BLOCKER (The Fix) --- */}
        {/* If the hash is anything else (e.g. #/about, #/xyz), go back to / */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
