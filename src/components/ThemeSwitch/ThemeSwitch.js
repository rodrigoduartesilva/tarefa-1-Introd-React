import '../ThemeSwitch/ThemeSwitch.css';
import FormDados from '../FormDados/FormDados';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

const ThemeSwitch = () => {
    const [theme, setTheme] = useState('light');

    const toogleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
            <main className='main-page'>
                <div className='switch'>
                    <div className='container'>
                        <label>{theme === 'light' ? '🌞' : '🌛'}</label>
                        <ReactSwitch onChange={toogleTheme} checked={theme === 'dark'} />
                    </div>
                </div>
                <div className='theme-container' id={theme}>
                    <FormDados />
                </div>
            </main>
        </ThemeContext.Provider>
    );
}

export default ThemeSwitch;