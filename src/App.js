import './App.css';
import {Navbar, Header, Features, Download, Subscribe} from "./components";

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
    </main>
  );
}

export default App;
