import Navbar from "@/components/custom/Navbar.tsx";
import HomePage from "@/components/custom/HomePage.tsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "@/components/custom/Footer.tsx";
import MembersPage from "@/components/custom/MembersPage.tsx";
import AboutPage from "@/components/custom/AboutPage.tsx";
import EventsPage from "@/components/custom/EventsPage.tsx";
import ApplyPage from "@/components/custom/ApplyPage.tsx";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner.tsx";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="font-body">
      <Navbar />
      <main className="pt-[var(--navbar-height)]">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/members"} element={<MembersPage />} />
          <Route path={"/events"} element={<EventsPage />} />
          <Route path={"/apply"} element={<ApplyPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
