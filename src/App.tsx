import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/projects" element={<div>Projects</div>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App
