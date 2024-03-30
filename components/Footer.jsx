/* This code snippet is defining a React component called `Footer`. The component represents a footer
section of a website and includes contact information, social media icons, and business hours. */
import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import Horario from './Horario'
import Link from 'next/link'
import facebookIcon from '@/public/facebookIcon.svg';
import instagramIcon from '@/public/instragramIcon.svg';
import tiktokIcon from '@/public/tiktokIcon.svg';
import whatsappIcon from '@/public/whatsappIcon.svg';
import homeIcon from '@/public/homeIcon.svg';
import mapIcon from '@/public/mapIcon.svg';
import phoneIcon from '@/public/phoneIcon.svg';
import clockIcon from '@/public/clockIcon.svg';
import emailIcon from '@/public/emailIcon.svg';

/* The `socialIcons` array is storing objects that represent different social media platforms along
with their respective URLs and icons. Each object in the array has the following properties:
- `name`: The name of the social media platform (e.g., 'facebook', 'instagram', 'Tiktok',
'whatsapp').
- `url`: The URL associated with the social media platform.
- `icon`: The icon image representing the social media platform. */
let socialIcons = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/clinicaariasdent?mibextid=LQQJ4d',
    icon: facebookIcon
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/clinicaariasdent?fbclid=IwAR2FrYHXmu2iknwTdTs526kwpuzILdzbyRy3NKbq8QB-kxDaiONQXC2l-6w_aem_AULQxEQjy0g5BKIcaGmmPXn1IVWhxNlWAWoqLiGAuMHQfYSdji3NmiBMJidRjEsI6xtemvnoURAeKJrjizYNP5Lu',
    icon: instagramIcon
  },

  {
    name: 'Tiktok',
    url: 'https://www.tiktok.com/@dra.fahernandez',
    icon: tiktokIcon
  },
  {
    name: 'whatsapp',
    url: 'https://wa.me/50373222299',
    icon: whatsappIcon
  },
]

/* The `contacto` array is storing objects that represent different contact information related to a
dental clinic. Each object in the array includes the following properties: */
let contacto = [
  {
    url:"/",
    text:"Clinica Arias Especialidades Dentales",
    icon: homeIcon,
  },
  {
    url:"https://maps.app.goo.gl/t58AFTMcegWkZuQdA",
    text: "Final 5a Calle Poniente #14 Colonia San Manuel, Atiquizaya",
    icon: mapIcon,
  },
  {
    url:"tel:+503-7322-2299",
    text: "+503 7322-2299",
    icon: phoneIcon,
  },
  {
    url: "/citas",
    text: "Reservar una cita",
    icon: clockIcon,
  },
  {
    url: "https://wa.me/50373222299",
    text: "Envia Un Mensaje",
    icon: emailIcon,
  },


]

const Footer = () => {
  return (
    /* The code snippet you provided is defining a React component called `Footer`. This component
    represents the footer section of a website and includes various sections such as contact
    information, social media icons, and business hours. */
    <footer className='w-screen flex flex-col   items-center'>
      <section className='w-full flex justify-center items-start p-4 bg-brand-light'>
        <Image src={logo} alt=' Clinica Arias Logo'></Image>
      </section>
      <section className='bg-brand-darker  text-white capitalize  flex  w-screen flex-col lg:flex-row  justify-around  '>
        
        <section className='flex-1  mx-4 flex  flex-col  justify-center '>
         <h1 className='  font-bold underline  text-center lg:text-start lg:pl-4 text-md md:text-xl lg:text-2xl'>Contacto</h1>
          
          
          <div className='flex  flex-col  items-center lg:items-start gap-2  m-2'>
            {contacto.map((item) => (
              <Link className='flex  gap-4 justify-start' href={item.url} key={item.text}>
               <Image  src={item.icon} alt={item.text}></Image>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className='flex-1 flex flex-col items-center justify-center  mb-2 '>
          <h1 className='font-bold underline p-2 text-md md:text-xl lg:text-2xl'>Sigamos Conectados </h1>
          <div className='flex gap-4 mt-2 mb-2 p-2 items-center justify-center'>
            {socialIcons.map((item) => (
              <Link href={item.url} key={item.name} >
                <Image src={item.icon} alt={item.name}></Image>
              </Link>
            ))}
          </div>
          <h6 className=' font-semibold'>¡ REGALANOS UN LIKE !</h6>
        </section>
        <section className=' flex-1  flex flex-col justify-center items-center  '>
          <h1 className='font-semibold underline text-md md:text-xl lg:text-2xl'>Horario de atención</h1>
          <Horario />
        </section>
      </section>

    </footer>
  )
}

export default Footer