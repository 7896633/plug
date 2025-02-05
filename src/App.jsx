import ButtonGradient from "./assets/svg/ButtonGradient";
import List from "./components/List.jsx";
import Header from "./components/Header";
import Hero from "./components/Hero";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <List />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
