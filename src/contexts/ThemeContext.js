import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const { children } = props;

	const [isDark, setIsDark] = useState(false);
	const toggleTheme = () => {
		setIsDark(!isDark);
	}
	
	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
 			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider;