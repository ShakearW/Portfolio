import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      {/* Scrollable homepage */}
      <Route path="/" element={<Home />} />

      {/* Future additional pages */}
      {/* <Route path="/details" element={<Details />} /> */}
      {/* <Route path="/wms" element={<WMS />} /> */}
      {/* <Route path="/docker" element={<Docker />} /> */}
    </Routes>
  );
}

export default App;
