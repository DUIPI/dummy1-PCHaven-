import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import PrimaryButton from '@/Components/PrimaryButton';



export default function TopNavMain({user}) {

	return (
		<>
			<div className='m-5 mx-8'>
        <nav className='flex items-center justify-between'>
          <div>
            <Link href='/'>
            <ApplicationLogo className=' h-12 w-auto' />
            </Link>
          </div>
          <div className='items-center'>
            <NavLink href='/product'>Зарууд</NavLink>
            <PrimaryButton className='mx-5'><Link href='/sell' >Зарах</Link></PrimaryButton>
            <NavLink href='/pcbuilder'>PC угсрах</NavLink>
          </div>
          <div className=''>
            {user ? (
              <Link href={route('dashboard')}>
                {user.name}
              </Link>
            ) : (
              <Link href={route('login')}>
                Нэвтрэх
              </Link>
            )}

          </div>
        </nav>

			</div>
		</>
	);
}