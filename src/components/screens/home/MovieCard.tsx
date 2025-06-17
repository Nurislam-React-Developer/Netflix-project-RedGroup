import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../ui/Modal';
import FavoriteButton from './FavoriteButton';
import { IMovie } from './movie.interface';


interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
	const [isOpenTrailer, setIsOpenTrailer] = useState(false);

	const handleOpenTrailer = useCallback(() => {
		setIsOpenTrailer(true);
	}, []);

	const handleCloseTrailer = useCallback(() => {
		setIsOpenTrailer(false);
	}, []);

	return (
		<div className='relative w-[200px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg'>
			<img src={movie.image} alt='' className='w-full h-auto object-cover' />

			{isOpenTrailer && (
				<Modal onClose={handleCloseTrailer}>
					<iframe
						width='373'
						height='210'
						src={`https://www.youtube.com/embed/${movie.trailerYoutubeId}?si=ncqlls_CgxAx9rjB&amp;controls=0`}
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					/>
				</Modal>
			)}

			<div className='absolute top-5 right-2 z-10 flex flex-col gap-2'>
				<FavoriteButton />
				<button
					className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition hover:bg-white/40'
					onClick={handleOpenTrailer}
				>
					🎥
				</button>

				<Link
					to={`/movie/${movie.trailerYoutubeId}`}
					className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition hover:bg-white/40'
				>
					📎
				</Link>
			</div>

			<div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold'>
				IMb {movie.rating}
			</div>
		</div>
	);
};

export default memo(MovieCard);
