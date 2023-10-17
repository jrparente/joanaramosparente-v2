import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCaseStudy from "./pages/case-study/[id]";
import NotFound from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <main className="font-body w-full relative">
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" index element={<Home />} />{" "}
          <Route path="/case-study">
            <Route path=":id" element={<ProjectCaseStudy />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
