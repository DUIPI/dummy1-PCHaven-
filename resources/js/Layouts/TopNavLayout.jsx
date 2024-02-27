import { Link } from '@inertiajs/react';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import PrimaryButton from '@/Components/PrimaryButton';



export default function TopNavMain() {
	return (
		<>
			<div>
        <nav className='flex items-center'>
          <div>
            <ApplicationLogo className=' h-12 w-auto' />
          </div>
          <div className=''>
            <NavLink>Зарууд</NavLink>
            <PrimaryButton>Зарах</PrimaryButton>
          </div>
        </nav>
			</div>
		</>
	);
}