import { Head } from '@inertiajs/react';
import TopNavMain from '@/Layouts/TopNavLayout';
import Poster from '/public/logo/Banner1.png'
import SecondaryButton from '@/Components/SecondaryButton';
import CarouselLayout from '@/Layouts/CarouselLayout'
import Footer from '@/Layouts/Footer';

import a from '/public/pics/pc1.jpg'
import b from '/public/pics/pc2.jpg'
import c from '/public/pics/pc3.jpg'

const slides = [
  a, 
  b, 
  c
]



export default function Welcome({auth}) {
	return (
		<>
			{/* <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-slate-100  selection:bg-red-500 selection:text-white">
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

				
			</div> */}
      <Head title="Нүүр" />

      <TopNavMain 
        user = {auth.user}
      />  
      <main className='mt-14 mb-40'>
        <div className=' bg-dark w-full m-auto'>
          <div className='flex items-center w-3/5 mx-auto'>
            <img src={Poster} className='h-96'>
            </img>
            <p className=' w-full m-auto text-center'>
              <p className='my-3 text-4xl px-28 text-white'>Welcome!</p>
              <p className='my-3 text-lg px-28 font-semibold text-slate-300'>
                PCHaven -с та хүссэн компьютероо худалдан авч, зарж, эсвэл эд ангиар нь угсраад аваарай.
              </p>
              <SecondaryButton className=' hover:bg-orange1 hover:text-white mt-3'>
                Угсрах
              </SecondaryButton>
            </p>
          </div>
        </div>

        <div className='w-4/5 m-auto'>
          <p className='m-5 mt-8 p-1 border-b-4 border-orange1 w-max font-semibold text-2xl text-center'>
            Санал болгох компьютер
          </p>
          <div className='p-5 w-full bg-slate-200 rounded-3xl'>
            <div className=' w-96'>
              <CarouselLayout autoSlide={true}>

                {slides.map((s) => (
                  <img src={s}></img>
                  ))
                }

              </CarouselLayout>
            </div>
          </div>
        </div>
        <div>
          {/* Shine zaruud */}
        </div>
      </main>
      <Footer />
		</>
	);
}
