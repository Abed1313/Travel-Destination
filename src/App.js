import { Route, Routes, useParams } from "react-router-dom";
import Home from "./Components/home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import TourDetails from "./Components/TourDetails/TourDetails";


function App() {

  return (
    <>
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;