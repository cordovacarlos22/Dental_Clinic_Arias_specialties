import Image from 'next/image'
import React from 'react'
import map from "@/public/map logo.svg";
import Link from 'next/link';
import smile_model from "@/public/smile_model.svg";
import consultorio from "@/public/consultorio_clinica.svg";
import clinicaLobby from "@/public/clinica_arias.svg"
import HeroComponents from './HeroComponents';
import HeroServicio from './HeroServicios';
import family from '@/public/family.svg';
import heart from '@/public/heart.svg';
import redCross from '@/public/CRUZ ROJA.svg';
import emergencia from '@/public/emergencia.svg';
import limpiezaDientes from '@/public/limpieza de dientes.svg';

const servicios = [
  
  {
    title: 'Limpieza Dental',
    icon: limpiezaDientes,
    textcolor: '#009CDD'
  },

]

const Hero = () => {
  return (
    <>
      <aside className='  text-center text-white font-bold text-xs p-4  md:text-md lg:text-lg'>
        <h2 className='capitalize tracking-wide '>Alerta: no dejes para mañana lo que puedes hacer hoy ¡Podemos ayudarle a programar su cita hoy!</h2>
      </aside>
      <header className=' relative bg-brand-light flex   flex-col w-screen gap-4 items-center p-4 '>
        {/* top section */}
        <section>
          <h1 className='text-brand-darker font-bold md:text-lg '>Hazlo con hilo dental para terminar, este es tu año!</h1>
        </section>
        {/* bottom section */}
        <section className=' flex flex-col  items-center  p-2 md:flex-row'>
          {/*  left section */}
          <section className='md:flex flex-col md:leading-8 flex-1 gap-4'>
            <h1 className='text-brand-darker font-extrabold text-3xl  tracking-widest'> Mantenemos a El Salvador Sonriendo </h1>
            <p className='text-brand-dark text-lg font-medium tracking-wide'>
              <Image className='hidden md:inline-block' src={map} alt='map logo'></Image>
              Final 5a Calle Poniente #14 Colonia San Manuel, Atiquizaya, El Salvador
            </p>
          </section>

          {/* middle section */}
          <section className='hidden md:inline-block  flex-1'>
            <Image className='md:size-56 lg:size-80' src={smile_model} alt='smile logo '></Image>
          </section>

          {/* right section */}
          <section className='text-center bg-white  p-6  mx-2 rounded-2xl flex-1'>
            <h1 className='text-lg text-brand-darker lg:text-xl tracking-wide font-black '>Reserve Su Cita Con El Dentista!</h1>
            <button className=" bg-brand-darker hover:bg-brand-dark m-2 px-6 py-2 rounded-md text-white ">
              <Link href="/citas">
                <span className="lg:text-xl font-extrabold ">Agende Hoy!</span>
              </Link>
            </button>
            <p className="text-sm text-gray-700 tracking-wide font-black">O Llamar
            <Link   href="tel:+503-7322-2299" className="inline  text-brand-dark justify-center items-center ">
                <span> 503 7322 2299</span>
            </Link>  </p>
            
          </section>
        </section>
      </header>
      <article className='flex flex-col justify-center text-center p-4'>
        <h1 className='capitalize text-brand-light  font-bolder text-md md:text-2xl lg:3xl m-2   lg:text-3xl font-extrabold'>Bienvenido a  Clinica Arias Especialidades Dentales</h1>
        {/* top section */}
        <section className='flex   gap-2 lg:flex-row flex-col lg:justify-center items-center  mx-2   lg:overflow-hidden '>
          <Image className='md:rounded-l-xl  rounded-xl ' src={clinicaLobby} alt='area de espera clinica arias'></Image>
          <Image className=' md:rounded-r-xl  rounded-md ' src={consultorio} alt=' area de consultorio'></Image>
        </section>
        {/* bottom section */}
        <section className='  text-center mx-auto w-4/5  lg:w-1/2 '>

          <p className='capitalize italic text-gray-200 font-medium tracking-wider  leading-loose'>
            Clínica Arias es un centro de atención dental que ofrece una amplia gama de especialidades dentales para pacientes de todas las edades. Con un equipo altamente capacitado de odontólogos y personal de apoyo, Clínica Arias brinda servicios de alta calidad, desde limpiezas dentales y tratamientos de caries hasta ortodoncia y cirugía oral. La clínica cuenta con instalaciones modernas y equipadas con la última tecnología en equipos dentales, lo que garantiza un tratamiento preciso y eficiente. Además, el equipo de Clínica Arias se enfoca en brindar un trato personalizado y amable a cada paciente, con el objetivo de hacer que la visita al dentista sea lo más cómoda y agradable posible.
          </p>
        </section>
      </article>
      <section
        className=" items-center flex flex-col bg-brand-light md:flex-row gap-4  md:justify-around    p-2 "
      >
        <HeroComponents
          className1="flex    w-1/3 flex-col justify-center  text-center items-center  m-2 p-2 text-lg font-bold  text-brand-darker"
          img={family}
          alt="family icon"
          title=" ODONTOLOGÍA FAMILIAR"
          paragraph="Ocúpese de todas las necesidades de su familia"
        />

        <HeroComponents
          className1="flex  w-1/3 flex-col justify-center text-center items-center   m-2 p-2 text--lg font-bold  text-brand-darker"
          img={heart}
          alt="Heart icon"
          title=" NUESTROS PACIENTES NOS QUIEREN"
          paragraph="Vamos más allá por nuestros pacientes"
        />

        <HeroComponents
          className1="flex  w-1/3 flex-col justify-center text-center items-center  m-2 p-2 text-lg font-bold  text-brand-darker"
          img={redCross}
          alt="Surgeon Doctor icon"
          title=" ODONTOLOGÍA DE URGENCIA"
          paragraph="Listos para ayudar a nuestros pacientes"
        />

      </section>
      <section className='bg-white justify-center text-center  gap-2 flex flex-col items-center'>
        <h1 className='text-lg md:text-xl lg:text-3xl text-brand-darker font-extrabold my-2'> Nos enorgullece nuestro servicio.</h1>
        <p className='w-96  text-brand-dark font-bold'>Utilizamos tecnología avanzada y probada para mantener su sonrisa con el mejor aspecto! La tecnología dental moderna, como los rayos X digitales, permite una atención más rápida,
          y más eficiente que nunca.</p>
        <button className=' capitalize text-white bg-brand-darker hover:bg-brand-dark p-4 rounded-lg m-2'>
          <Link href="/servicios" >
            todos nuestros servicios
          </Link>
        </button>
        <section className='flex flex-1'>
          <HeroServicio
            key='emergencia'
            icon={emergencia}
            iconAlt='emergencia icon'
            textcolors={`text-[#F55102]`}
            Tittle='Emergencia'
          />
          {servicios && servicios.map(item => (
            <HeroServicio
              key={item.title}
              icon={item.icon}
              iconAlt={item.title}
              textcolors={`text-[#009CDD]`}
              Tittle={item.title}
            />
          ))}
        </section>
      </section>
    </>
  )
}

export default Hero