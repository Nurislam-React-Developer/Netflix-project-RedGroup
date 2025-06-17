import { COMMENTS } from './comment.data';

const MovieComments = () => {
	return (
		<div className='mt-8'>
			<h2 className='text-2xl font-bold mb-4'>Комментарии</h2>
			<div className='space-y-4'>
				{COMMENTS.map((comment) => (
					<div
						key={comment.id}
						className='bg-neutral-900/30 rounded-lg p-4 backdrop-blur-sm'
					>
						<div className='flex items-center justify-between mb-2'>
							<div className='flex items-center gap-2'>
								<div className='w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center'>
									{comment.name[0]}
								</div>
								<h3 className='font-medium'>{comment.name}</h3>
							</div>
							<div className='flex items-center gap-2'>
								<span className='text-yellow-500'>★</span>
								<span className='text-sm'>{comment.rating}</span>
								<span className='text-sm text-gray-400'>{comment.date}</span>
							</div>
						</div>
						<p className='text-gray-300'>{comment.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieComments;
