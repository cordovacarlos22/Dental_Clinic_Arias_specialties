'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Image from 'next/image'
import consultorio from "@/public/consultorio_clinica.svg";
import clinica_1 from "@/public/clinica_1.svg";
import clinica_2 from "@/public/clinica_2.svg";
import clinica_3 from "@/public/clinica_3.svg";
import clinica_4 from "@/public/clinica_4.svg";
import clinica_5 from "@/public/clinica_5.svg";
export default function HeroCarousel() {

  const clinicImages = [
    {
      url: clinica_1,
      alt: 'clinica arias',
    },

    {
      url: clinica_2,
      alt: 'clinica arias',
    },
    {
      url: consultorio,
      alt: 'clinica arias ',
    },

    {
      url: clinica_5,
      alt: 'clinica arias kinds',
    },
    {
      url: clinica_3,
      alt: 'clinica arias kinds',
    },
    {
      url: clinica_4,
      alt: 'clinica arias kinds',
    },


  ]

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <div className="embla flex items-center text-center justify-center p-4 w-screen  md:p-4 lg:px-4" ref={emblaRef}>
      <div className="embla__container    w-full p-2 md:w-full md:p-0  flex gap-10 ">
        {clinicImages.map((item) => (
          <div key={item.alt} className='embla__slide flex justify-center items-center  p-2'>
            <Image className=' rounded-xl' src={item.url} alt={item.alt}></Image>
          </div>
        ))}
      </div>
    </div>
  )
}
