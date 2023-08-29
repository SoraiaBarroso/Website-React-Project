import './App.css';
import {Navbar, Header, Features} from "./components";

// props are like arguments in functions
function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar />
        <Header />
      </header>
      < Features/>
    </main>
  );
}

export default App;
