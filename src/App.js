import NavPanel from "./components/NavPanel";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavPanel />
      <main className="container">
        <Hero />
        <Skills />
      </main>
    </div>
  );
}

export default App;
