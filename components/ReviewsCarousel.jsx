
import React from "react";
import Image from 'next/image'
import manAvatar from '@/public/man.svg';
import womenAvatar from '@/public/woman.svg';
import fiveStar from '@/public/fivestarts.svg';
import useEmblaCarousel from 'embla-carousel-react'

const ReviewsCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

 let reviews =[
  {
     user:"Adela Guzman",
     review:"Exelente atención",
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

  

  return (
    <div className=' bg-brand-light flex-1  '>
     
     
          {reviews.map((review) => (
            <div className=' bg-brand-darker  w-1/2 rounded-md  mx-auto flex flex-1 flex-col justify-center items-center m-4 p-4 ' key={review.user}>
              <div className='w-20 h-20 bg-white rounded-full flex justify-center '>
                <Image width={50} height={50} src={review.avatar} alt={review.user}></Image>
              </div>
              <h1 className="text-white mb-2">{review.user}</h1>
              <p className="text-white mt-2">{review.review}</p>
              <Image src={fiveStar} alt='five stars'></Image>
            </div>
          ))};
        

    </div>
  )
}

export default ReviewsCarousel