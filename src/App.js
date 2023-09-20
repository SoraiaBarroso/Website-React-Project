import './App.css';
import {Navbar, Header, Features, Download, Subscribe, Faq} from "./components";

// props are like arguments in functions
function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar />
        <Header />
      </header>
      < Features/>
      < Download/>
      < Subscribe />
      < Faq />
    </main>
  );
}

export default App;
