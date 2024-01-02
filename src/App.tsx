import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCaseStudy from "./pages/case-study/[id]";
import NotFound from "./pages/not-found";
import { useEffect } from "react";
import { initGA, logPageView } from "./analytics";
import Bio from "./pages/bio";

function MainContent() {
  const location = useLocation();
  const isBioPage = location.pathname === "/bio";

  return (
    <>
      <main className="font-body w-full relative flex flex-shrink-0 flex-col">
        {!isBioPage && <Navbar />}
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/case-study">
            <Route path=":id" element={<ProjectCaseStudy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </main>
      {!isBioPage && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

export default App;
