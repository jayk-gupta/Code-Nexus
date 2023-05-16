import "./index.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {

  
  return (
    <div className="App sm:w-full dark:bg-[#13131d]">
      <Nav />
      <h1 className="text-2xl md:text-4xl text-center pt-6 pb-12 dark:text-white">
        List of Beginner Friendly OpenSource Projects
      </h1>
      <Card />
      <Footer />
    </div>
  );
}

export default App;


// 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 