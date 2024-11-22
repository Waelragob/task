import './App.css';
import App_Home from './app/app';
import { ThemeProvider } from './Conteex/ThemeContext';


function App() {
  return (
   
      <ThemeProvider>
        <App_Home />
      </ThemeProvider>
  
  );
}

export default App;