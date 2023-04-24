import { createContext, useState, useMemo, useCallback } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const { children } = props;

	const [isDark, setIsDark] = useState(false);
	const toggleTheme = useCallback(() => {
		setIsDark(!isDark);
	},[isDark])

	const themeMemo = useMemo(() => ({ isDark, toggleTheme }), [isDark, toggleTheme])
	
	return (
		<ThemeContext.Provider value={themeMemo}>
 			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider;