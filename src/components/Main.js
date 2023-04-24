import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Main = () => {
	const { isDark } = useContext(ThemeContext);
	const theme = isDark ? ' darkmode' : '';
	return (
		<div className={"main" + theme}>
              <h1>Titre de ma page</h1>
              <h2>Sous-Titre</h2>
              <p>etc ...</p>
            </div>
	)
} 

export default Main;