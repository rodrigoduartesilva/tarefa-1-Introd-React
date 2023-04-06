import { createContext, useState } from 'react';
import './App.css';
import FormDados from './components/FormDados/FormDados';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toogleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <div className='App' id={theme}>
        <div className='switch'>
          <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
          <ReactSwitch onChange={toogleTheme} checked={theme === 'dark'} />
        </div>
        <FormDados />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;