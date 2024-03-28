'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Image from 'next/image'
import manAvatar from '@/public/man.svg';
import womenAvatar from '@/public/woman.svg';
import fiveStar from '@/public/fivestarts.svg';

export default function EmblaCarousel() {

  let reviews = [
    {
      user: "Adela Guzman",
      review: "Exelente atención",
      avatar: womenAvatar
    },
    {
      user: "Rodil Monzon",
      review: "atención de primer nivel. muy recomendadicimo. buena atención calidad y calidez humana.",
      avatar: manAvatar
    },
    {
      user: "Stephanie Ramírez",
      review: "Calidad, servicio, atencion la carecteriza . la clinica. tratos con niños con amor y delicadesa que es algo bien importante cuando hablamos de niños en el dentista. 100x100to recomendada",
      avatar: womenAvatar
    },
    {
      user: "Ana Guerra",
      review: "Muy buen servicio",
      avatar: womenAvatar
    },



  ];
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay:5000})]);

  return (
    <div className="embla flex items-center text-center justify-center w-full  md:p-4 lg:px-4" ref={emblaRef}>
      <div className="embla__container w-full p-2 md:w-full md:p-0  flex gap-4 ">
        {reviews.map((review) => (
          <div className='embla__slide  bg-brand-darker  rounded-md  mx-auto flex flex-1 flex-col justify-center items-center   p-2 ' key={review.user}>
            <div className=' bg-white rounded-full flex justify-center  my-4'>
              <Image width={80} height={80} src={review.avatar} alt={review.user}></Image>
            </div>
            <h1 className="text-white font-bold md:text-xl  mb-2">{review.user}</h1>
            <p className="text-white  font-medium  mt-2">{review.review}</p>
            <Image src={fiveStar} alt='five stars'></Image>
          </div>
        ))}

      </div>
    </div>
  )
}
