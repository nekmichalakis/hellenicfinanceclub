import Navbar from "@/components/custom/Navbar.tsx";

function App() {

  return (
      <div className="font-body">
          <Navbar />
          <main className="pt-[var(--navbar-height)]">
              {/*<Hero />*/}
              {/* Add more sections: About, Events, Join, Footer */}
          </main>
      </div>
  )
}

export default App
