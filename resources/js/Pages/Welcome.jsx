import { Link, Head } from '@inertiajs/react';

import { UserCircleIcon } from '@heroicons/react/24/solid'


export default function Welcome({auth}) {
	return (
		<>
			<Head title="Нүүр" />
			<div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-slate-100  selection:bg-red-500 selection:text-white">
				<div className="sm:fixed sm:top-0 sm:right-5 p-6 text-end">
					{auth.user ? (
							<Link
									href={route('dashboard')}
									className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
							>
									<UserCircleIcon className=' h-12 w-10' />
							</Link>
					) : (
						<>
							<Link
								href={route('login')}
								className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
						>
								Нэвтрэх
						</Link>

						<Link
								href={route('register')}
								className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
						>
								Бүртгүүлэх
							</Link>
					</>
					)}
				</div>

				
			</div>
		</>
	);
}
