import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import App from './components/screens/home/App';
import MovieDetails from './components/screens/movie/MovieDetails';

const MainRoutes = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<App />} />
				<Route path='/movie/:id' element={<MovieDetails />} />
			</Route>
		</Routes>
	);
};

export default MainRoutes;
