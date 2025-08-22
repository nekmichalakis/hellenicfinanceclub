import Navbar from "@/components/custom/Navbar.tsx";
import HomePage from "@/components/custom/HomePage.tsx";
import { Route, Routes } from "react-router-dom";
import ServicesPage from "@/components/custom/ServicesPage.tsx";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main className="pt-[var(--navbar-height)]">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/services"} element={<ServicesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
