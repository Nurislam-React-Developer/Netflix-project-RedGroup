import { useMemo, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { useTheme } from '../../../hooks/useTheme';
import MovieCard from './MovieCard';
import { MOVIES } from './Movies.data';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 300);

	const movies = useMemo(() => {
		if (!debouncedSearch) return MOVIES;

		return MOVIES.filter((movie) =>
			movie.name.toLowerCase().includes(debouncedSearch.toLowerCase())
		);
	}, [debouncedSearch]);

	return (
		<div className='min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5'>
			<header className='mb-10 flex items-center justify-between'>
				<img src='/netflix.jpg' alt='Netflix' className='h-8 w-auto' />
				<div className='flex gap-4 items-center'>
					<input
						type='search'
						placeholder='Search movies...'
						className='border border-black/15 dark:border-white/15 px-2 py-1 rounded outline-0'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>

					<button
						onClick={toggleTheme}
						className='text-sm px-3 py-1 rounded border border-white/20 dark:border-white/10 hover:bg-white hover:text-black dark:hover:bg-white/10 transition w-28'
					>
						{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
					</button>
				</div>
			</header>
			<main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{movies.length ? (
					movies.map((movie) => <MovieCard key={movie.name} {...movie} movie={movie} />)
				) : (
					<p>No movies found</p>
				)}
			</main>
		</div>
	);
};

export default App;
