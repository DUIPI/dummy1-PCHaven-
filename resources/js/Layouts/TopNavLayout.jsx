import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import PrimaryButton from '@/Components/PrimaryButton';
import Dropdown from '@/Components/Dropdown';



export default function TopNavMain({user, header, children}) {

	return (
		<>
			<div className='m-5 mx-8'>
        <nav className='flex items-center justify-between font-semibold'>
          <div>
            <Link href='/'>
            <ApplicationLogo className=' h-12 w-auto' />
            </Link>
          </div>
          <div className='items-center flex'>
            <Dropdown>
              <Dropdown.Trigger>
              <span className="inline-flex rounded-md">
                <button
                  type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                >
                  Зарууд
                </button>
              </span>
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Link href={route('products.cpu')}>Процессор</Dropdown.Link>
                <Dropdown.Link href={route('products/cooler')}>Хөргүүр</Dropdown.Link>
                <Dropdown.Link href={route('products/mobo')}>Эх хавтан</Dropdown.Link>
                <Dropdown.Link href={route('products/memory')}>Санах ой</Dropdown.Link>
                <Dropdown.Link href={route('products/disk')}>Диск</Dropdown.Link>
                <Dropdown.Link href={route('products/gpu')}>График кард</Dropdown.Link>
                <Dropdown.Link href={route('products/psu')}>Тэжээлийн блок</Dropdown.Link>
                <Dropdown.Link href={route('products/case')}>Кейс</Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
            <Link href={route('sell.index')}>
              <PrimaryButton className='mx-5'>
                Зарах
              </PrimaryButton>
            </Link>
            <NavLink href='/pcbuilder'>PC угсрах</NavLink>
          </div>
          <div>
            {user ? (
              <Dropdown>
              <Dropdown.Trigger>
                  <span className="inline-flex rounded-md">
                      <button
                          type="button"
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                      >
                          {user.name}

                          <svg
                              className="ms-2 -me-0.5 h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      </button>
                  </span>
              </Dropdown.Trigger>

              <Dropdown.Content>
                  <Dropdown.Link href={route('profile.edit')}>Миний бүртгэл</Dropdown.Link>
                  <Dropdown.Link href={route('logout')} method="post" as="button">
                      Гарах
                  </Dropdown.Link>
              </Dropdown.Content>
          </Dropdown>
            ) : (
              <Link href={route('login')}>
                Нэвтрэх
              </Link>
            )}

          </div>
        </nav>
        {header && (
          <header className="bg-white shadow">
              <div className="max-w-7xl mt-11 mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
          </header>
      )}

      <main>{children}</main>
			</div>
		</>
	);
}