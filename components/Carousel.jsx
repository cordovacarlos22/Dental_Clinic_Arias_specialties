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
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla border max-w-lg bg-white mt-12 mx-auto h-56" ref={emblaRef}>
      <div className="embla__container h-full">
        {reviews.map((review) => (
          <div className='embla__slide  bg-brand-darker  w-1/2 rounded-md  mx-auto flex flex-1 flex-col justify-center items-center m-4 p-4 ' key={review.user}>
            <div className='w-20 h-20 bg-white rounded-full flex justify-center '>
              <Image width={50} height={50} src={review.avatar} alt={review.user}></Image>
            </div>
            <h1 className="text-white mb-2">{review.user}</h1>
            <p className="text-white mt-2">{review.review}</p>
            <Image src={fiveStar} alt='five stars'></Image>
          </div>
        ))}
       
      </div>
    </div>
  )
}
