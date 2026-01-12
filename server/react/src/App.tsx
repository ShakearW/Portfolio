import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Extra from "./pages/Extra";
import Movie from "./pages/Movie";

function App() {
  return (
    <Routes>
      {/* Scrollable homepage */}
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/extra" element={<Extra />} />
      <Route path="/movie" element={<Movie />} />


      {/* Future additional pages */}
      {/* <Route path="/details" element={<Details />} /> */}
      {/* <Route path="/wms" element={<WMS />} /> */}
      {/* <Route path="/docker" element={<Docker />} /> */}
    </Routes>
  );
}

export default App;
