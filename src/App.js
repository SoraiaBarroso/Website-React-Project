import './App.css';
import {Navbar, Header, Features, Download, Subscribe, Faq, Footer} from "./components";

// props are like arguments in functions
function App() {
  return (
    <main>
        <Navbar />
        <Header />
      < Features/>
      < Download/>
      < Subscribe />
      < Faq />
      < Footer />
    </main>
  );
}

export default App;
