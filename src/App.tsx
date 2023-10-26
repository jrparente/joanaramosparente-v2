import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCaseStudy from "./pages/case-study/[id]";
import NotFound from "./pages/not-found";
import { useEffect } from "react";
import { initGA, logPageView } from "./analytics";

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <BrowserRouter>
      <main className="font-body w-full relative flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/case-study">
            <Route path=":id" element={<ProjectCaseStudy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
