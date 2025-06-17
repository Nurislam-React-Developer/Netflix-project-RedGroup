import { lazy, Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { MOVIES } from '../home/Movies.data';

const LazyMovieComments = lazy(() => import('./MovieComments'));

const LoaderComponent = () => (
	<div className='flex justify-center items-center min-h-[100px]'>
		<CircleLoader color='#4F46E5' size={40} speedMultiplier={0.7} />
	</div>
);

const MovieDetails = () => {
	const { id } = useParams();

	const movie = useMemo(() => {
		return MOVIES.find((movie) => movie.trailerYoutubeId === id);
	}, [id]);

	if (!movie) {
		return (
			<div className='min-h-screen flex items-center justify-center'>
				<h1 className='text-2xl'>Фильм не найден</h1>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-white dark:bg-black text-black dark:text-white p-8'>
			<div className='max-w-4xl mx-auto'>
				<div className='flex gap-8'>
					<div className='w-1/3'>
						<img
							src={movie.image}
							alt={movie.name}
							className='w-full h-auto rounded-lg shadow-lg'
						/>
					</div>
					<div className='w-2/3'>
						<h1 className='text-3xl font-bold mb-4'>{movie.name}</h1>
						<div className='space-y-4'>
							<p className='text-lg'>Рейтинг IMDb: {movie.rating}</p>
							<div className='mt-6'>
								<iframe
									width='560'
									height='315'
									src={`https://www.youtube.com/embed/${movie.trailerYoutubeId}`}
									title={`${movie.name} trailer`}
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='rounded-lg shadow-lg'
								/>

								<p className='mt-4 text-gray-600 dark:text-gray-300'>
									Смотрите "{movie.name}" онлайн в отличном качестве. 
									Захватывающий фильм с рейтингом IMDb {movie.rating}.
								</p>
							</div>
						</div>
					</div>
				</div>
				<Suspense fallback={<LoaderComponent />}>
					<LazyMovieComments />
				</Suspense>
			</div>
		</div>
	);
};


export default MovieDetails;
