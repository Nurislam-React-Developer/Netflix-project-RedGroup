import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<MainRoutes />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
