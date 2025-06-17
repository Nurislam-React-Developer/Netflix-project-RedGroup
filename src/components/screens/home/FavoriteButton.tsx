import { useState, memo } from 'react';

const FavoriteButton = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<div>
			<button onClick={() => setIsFavorite(!isFavorite)}>
				{isFavorite ? '❤️' : '🤍'}
			</button>
		</div>
	);
};

export default memo(FavoriteButton)