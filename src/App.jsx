import "./index.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App sm:w-full">
      <Nav />
      <h1 className="text-2xl md:text-4xl text-center pt-6 pb-12">
        List of Beginner Friendly OpenSource Projects
      </h1>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
