import { ThemeProvider } from './context/ThemeContext';
import { Home } from './containers/Home';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
