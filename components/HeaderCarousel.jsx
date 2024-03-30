'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Image from 'next/image'

import clinica_1 from "@/public/clinica_1.svg";
import clinica_2 from "@/public/clinica_2.svg";
import clinica_3 from "@/public/clinica_3.svg";
import clinica_4 from "@/public/clinica_4.svg";
import clinica_5 from "@/public/clinica_5.svg";

import clinica_7 from "@/public/clinica_7.svg";
import clinica_8 from "@/public/clinica_8.svg";
import clinica_9 from "@/public/clinica_9.svg";
import clinica_10 from "@/public/clinica_10.svg";
import clinica_11 from "@/public/clinica_11.svg";
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
      url: clinica_5,
      alt: 'clinica arias',
    },
    {
      url: clinica_3,
      alt: 'clinica arias',
    },
    {
      url: clinica_4,
      alt: 'clinica arias',
    }, 
    {
      url: clinica_7,
      alt: 'clinica arias kinds',
    },
    {
      url: clinica_8,
      alt: 'clinica arias',
    },
    {
      url: clinica_9,
      alt: 'clinica arias',
    },
    {
      url: clinica_10,
      alt: 'clinica arias',
    },
    {
      url: clinica_11,
      alt: 'clinica arias',
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
