import Navbar from "@/components/custom/Navbar.tsx";
import Hero from "@/components/custom/Hero.tsx";

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main className="pt-[var(--navbar-height)]">
        <Hero />
        <div className="flex flex-col h-90"></div>
      </main>
    </div>
  );
}

export default App;
