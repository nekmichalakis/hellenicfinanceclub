import Navbar from "@/components/custom/Navbar.tsx";
import HomePage from "@/components/custom/HomePage.tsx";
import { Route, Routes } from "react-router-dom";
import Footer from "@/components/custom/Footer.tsx";
import CandidatesPage from "@/components/custom/CandidatesPage.tsx";
import AboutPage from "@/components/custom/AboutPage.tsx";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main className="pt-[var(--navbar-height)]">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/candidates"} element={<CandidatesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
