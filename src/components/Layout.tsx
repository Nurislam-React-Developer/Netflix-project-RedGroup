import { useMemo } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
	const { pathname } = useLocation();

	const isHomePage = useMemo(() => pathname === '/', [pathname]);

	return (
		<div className='min-h-screen bg-white dark:bg-black text-black dark:text-white p-8'>
			{!isHomePage && (
				<div className='mb-6 flex items-center gap-4'>
					<Link
						to='/'
						className='flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors'
					>
						<span>←</span>
						<span>Назад</span>
					</Link>
					<h1 className='text-2xl font-bold'>Детали фильма</h1>
				</div>
			)}

			<Outlet />
		</div>
	);
};

export default Layout;
