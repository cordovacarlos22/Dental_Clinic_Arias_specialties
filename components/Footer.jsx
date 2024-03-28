import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import Horario from './Horario'
import Link from 'next/link'
import facebookIcon from '@/public/facebookIcon.svg';
import instagramIcon from '@/public/instragramIcon.svg';
import tiktokIcon from '@/public/tiktokIcon.svg';
import whatsappIcon from '@/public/whatsappICon.svg';
import homeIcon from '@/public/homeIcon.svg';
import mapIcon from '@/public/mapIcon.svg';
import phoneIcon from '@/public/phoneIcon.svg';
import clockIcon from '@/public/clockIcon.svg';
import emailIcon from '@/public/emailIcon.svg';

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
    <footer className='w-screen'>
      <section className='w-full flex justify-center items-start p-4 bg-brand-light'>
        <Image src={logo} alt=' Clinica Arias Logo'></Image>
      </section>
      <section className='bg-brand-darker text-white capitalize w-screen flex  flex-col lg:flex-row  items-center justify-around m-6 '>
        <section className='flex-1 '>
          <h1 className='text-center  font-bold underline'>Contacto</h1>
          <div className='flex flex-col justify-center items-start gap-2 m-4'>
            {contacto.map((item) => (
              <Link className='flex  gap-4 justify-start' href={item.url} key={item.text}>
               <Image  src={item.icon} alt={item.text}></Image>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className='flex flex-1 flex-col justify-center items-center'>
          <h1 className='font-bold underline'>Sigamos Conectados </h1>
          <div className='flex gap-4 m-4'>
            {socialIcons.map((item) => (
              <Link href={item.url} key={item.name} >
                <Image src={item.icon} alt={item.name}></Image>
              </Link>
            ))}
          </div>
          <h6 className=' font-semibold'>¡ REGALANOS UN LIKE !</h6>
        </section>
        <section className=' flex-1 text-center '>
          <h1 className='font-semibold underline'>Horario de atención</h1>
          <Horario />
        </section>
      </section>

    </footer>
  )
}

export default Footer