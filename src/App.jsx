import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Location from "./pages/Location";
import Conduct from "./pages/Conduct";
import Foods from "./pages/Foods";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/conduct" element={<Conduct />} />
        <Route exact path="/foods" element={<Foods />} />
      </Routes>
    </>
  );
}

export default App;
