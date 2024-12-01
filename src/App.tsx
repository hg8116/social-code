import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Topbar from "./Components/Topbar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
