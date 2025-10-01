import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto py-3">
        <Navbar />
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
    </div>
  );
};

export default App;
