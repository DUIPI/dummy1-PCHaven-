import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";


export default function CarouselLayout({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000
}) {

  const [currentSlide, setCurrentSlide] = useState(0)

  const prev = () => setCurrentSlide(currentSlide => (currentSlide === 0 ? slides.length - 1 : currentSlide - 1))

  const next = () => setCurrentSlide(currentSlide => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1))

  useEffect(()=> {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  })
  
  return (
    <div className=' overflow-hidden relative rounded-xl'>
      <div 
      className='flex transition-transform ease-out duration-500'
      style={{transform: `translateX(-${currentSlide * 100}%)`}}
      >
        {slides}
      </div>
      <div className=" absolute inset-0 flex items-center justify-between p-4">
        <button 
        onClick={prev}
        className=" w-12 h-auto text-bronze p-1 rounded-full shadow-md bg-white/80 hover:bg-white"
        >
          <ChevronDoubleLeftIcon  />
        </button>
        <button
        onClick={next}
        className=" w-12 h-auto text-bronze p-1 rounded-full shadow-md bg-white/80 hover:bg-white"
        >
          <ChevronDoubleRightIcon />
        </button>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div className={`
                 transition-all w-6 h-1 bg-white rounded-full 
                 ${currentSlide === i ? "p-1" : "bg-opacity-50"}
              `} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
