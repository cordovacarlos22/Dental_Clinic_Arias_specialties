import Image from 'next/image'
import React from 'react'
import map from "@/public/map logo.svg";
import Link from 'next/link';
import smile_model from "@/public/smile_model.svg";
import consultorio from "@/public/consultorio_clinica.svg";
import clinicaLobby from "@/public/clinica_arias.svg"
import HeroComponents from './HeroComponents';
import family from '@/public/family.svg';
import heart from '@/public/heart.svg';
import surgeonDoctor from '@/public/surgeon-doctor.svg';
import waves from '@/public/wavesBG.svg';

const Hero = () => {
  return (
    <>
      <aside className='  text-center text-white font-bold text-xs p-4  md:text-md lg:text-lg'>
        <h2 className='capitalize tracking-wide '>Alerta: no dejes para mañana lo que puedes hacer hoy ¡Podemos ayudarle a programar su cita hoy!</h2>
      </aside>
      <header className=' relative bg-brand-light flex   flex-col w-screen gap-4 items-center p-4 '>
        {/* top section */}
        <section>
          <h1 className='text-brand-darker font-bold md:text-lg '>Hazlo con hilo dental para terminar este es tu año!</h1>
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
            <h1 className='text-lg text-gray-700 tracking-wide font-black '>Reserve Su Cita Con El Dentista!</h1>
            <button className=" bg-brand-darker m-2 px-6 py-2 rounded-md text-white ">
              <Link href="/citas">
                <span className="lg:text-xl font-extrabold">Agende Hoy!</span>
              </Link>
            </button>
            <Link href="tel:+503-7322-2299" className="flex flex-col justify-center items-center">
              <p className="text-sm text-gray-700 tracking-wide font-black">O Llamar  <span className='text-brand-dark'>503 7322 2299</span></p>
            </Link>
          </section>
        </section>
      </header>
      <article className='flex flex-col justify-center text-center p-4'>
        <h1 className='capitalize text-brand-light  font-bolder text-md md:text-2xl lg:3xl'>Bienvenido a  Clinica Arias Especialidades Dentales</h1>
        {/* top section */}
        <section className='flex   gap-2 lg:flex-row flex-col lg:justify-center items-center  mx-2   lg:overflow-hidden '>
          <Image className='md:rounded-l-xl  rounded-xl ' src={clinicaLobby} alt='area de espera clinica arias'></Image>
          <Image className=' md:rounded-r-xl  rounded-md ' src={consultorio} alt=' area de consultorio'></Image>
        </section>
        {/* bottom section */}
        <section className='  text-center mx-auto w-4/5  lg:w-1/2 '>

          <p className='capitalize text-gray-200 font-medium tracking-wider  leading-loose'>
            Clínica Arias es un centro de atención dental que ofrece una amplia gama de especialidades dentales para pacientes de todas las edades. Con un equipo altamente capacitado de odontólogos y personal de apoyo, Clínica Arias brinda servicios de alta calidad, desde limpiezas dentales y tratamientos de caries hasta ortodoncia y cirugía oral. La clínica cuenta con instalaciones modernas y equipadas con la última tecnología en equipos dentales, lo que garantiza un tratamiento preciso y eficiente. Además, el equipo de Clínica Arias se enfoca en brindar un trato personalizado y amable a cada paciente, con el objetivo de hacer que la visita al dentista sea lo más cómoda y agradable posible.
          </p>
        </section>
      </article>
      <section
        className=" items-center flex flex-col md:flex-row gap-4  md:justify-around   bg-brand-light p-2 "
        
        
      >
        <HeroComponents
          className1="flex    w-1/2 flex-col justify-center  text-center items-center  "
          img={family}
          alt="family icon"
          title=" ODONTOLOGÍA FAMILIAR"
          paragraph="Ocúpese de todas las necesidades de su familia"
        />

        <HeroComponents
          className1="flex  w-1/2 flex-col justify-center text-center items-center  "
          img={heart}
          alt="Heart icon"
          title=" NUESTROS PACIENTES NOS QUIEREN"
          paragraph="Vamos más allá por nuestros pacientes"
        />

        <HeroComponents
          className1="flex  w-1/2 flex-col justify-center text-center items-center "
          img={surgeonDoctor}
          alt="Surgeon Doctor icon"
          title=" ODONTOLOGÍA DE URGENCIA"
          paragraph="Listo para ayudar a nuestros pacientes"
        />

      </section>
    </>
  )
}

export default Hero