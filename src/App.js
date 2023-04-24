import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <Main/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;