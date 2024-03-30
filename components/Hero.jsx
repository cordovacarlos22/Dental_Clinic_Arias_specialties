/* The above code is a React component named `Hero` that represents a section of a website for a dental
clinic. Here is a summary of what the code is doing: */
import Image from 'next/image'
import React, { lazy } from 'react'
import map from "@/public/map logo.svg";
import Link from 'next/link';
import smile_model from "@/public/smile_model.svg";
import HeroComponents from './HeroComponents';
import HeroServicio from './HeroServicios';
import family from '@/public/family.svg';
import heart from '@/public/heart.svg';
import redCross from '@/public/CRUZ ROJA.svg';
import emergencia from '@/public/emergencia.svg';
import limpiezaDientes from '@/public/limpieza de dientes.svg';
import coronas from '@/public/coronas.svg';
import rellenos from '@/public/rellenos.svg';
import puentesDentales from '@/public/puentes dentales.svg';
import extraccionesDentales from '@/public/extracciones.svg';
import unionesDentales from '@/public/unionesDentales.svg';
import muelasDelJuicio from '@/public/muelasDelJuicio.svg';
import dentaduras from '@/public/dentaduras.svg';
import rayosX from '@/public/rayosX.svg';
import fatimaDentista from '@/public/fatima.png';
import HeroCards from './HeroCards';
import Horario from './Horario';
import clinicaArias from '@/public/clinica img.png'
import Direciones from './Direciones';
import { MetodosPago } from './MetodosPago';
import creditcard from '@/public/creditcard.svg'
import ReviewsCarousel from './ReviewsCarousel';
import Footer from './Footer';
import HeaderCarousel from './HeaderCarousel';
const servicios = [

  {
    title: 'Limpieza Dental',
    icon: limpiezaDientes,
    textcolors: '009CDD'
  },
  {
    title: 'Coronas Dentales',
    icon: coronas,
    textcolors: '009CDD'
  },
  {
    title: 'Rellenos Dentales',
    icon: rellenos,
    textcolors: '009CDD'
  },
  {
    title: 'Puentes Dentales',
    icon: puentesDentales,
    textcolors: '009CDD'
  },

  {
    title: 'Uniones Dentales',
    icon: unionesDentales,
    textcolors: '009CDD'
  },
  {
    title: 'Dentaduras',
    icon: dentaduras,
    textcolors: '009CDD'
  },
  {
    title: 'Radiografías Dentales ',
    icon: rayosX,
    textcolors: '009CDD'
  },
  {
    title: 'Muelas del juicio / Cirugía Oral',
    icon: muelasDelJuicio,
    textcolors: '009CDD'
  },
  {
    title: 'Extracciones Dentales',
    icon: extraccionesDentales,
    textcolors: '009CDD'
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
              <Link href="tel:+503-7322-2299" className="inline  text-brand-dark justify-center items-center ">
                <span> 503 7322 2299</span>
              </Link>  </p>

          </section>
        </section>
      </header>
      <article className='flex flex-col justify-center text-center p-4'>
        <h1 className='capitalize text-brand-light  font-bolder text-md md:text-2xl lg:3xl m-2   lg:text-3xl font-extrabold'>Bienvenido a  Clinica Arias Especialidades Dentales</h1>
        {/* top section */}
        <section className='flex   gap-2 lg:flex-row flex-col lg:justify-center items-center  mx-2   lg:overflow-hidden '>
          {/* <Image className='md:rounded-l-xl  rounded-xl ' src={clinicaLobby} alt='area de espera clinica arias'></Image>
          <Image className=' md:rounded-r-xl  rounded-md ' src={consultorio} alt=' area de consultorio'></Image> */}
          <HeaderCarousel/>
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
        <section className='flex flex-1 flex-wrap lg:w-2/3 justify-center'>
          <div className={`w-[150px] h-[150px] flex flex-col  items-center m-2 p-2  text-[#F55102]`}>
            <Image src={emergencia} alt="emergencia  icon"></Image>
            <h1 className={`capitalize`}>emergencia</h1>
          </div>
          {servicios && servicios.map(item => (
            <Link key={item.title} href={`/servicios/${item.title}`}>
              <HeroServicio
                iconClass='hover:fill-red-500'
                icon={item.icon}
                iconAlt={item.title}
                headerClass='text-[#009CDD] hover:text-black'
                Tittle={item.title}
              />
            </Link>
          ))}
        </section>
      </section>

      <section className=' flex flex-col lg:flex-row justify-center bg-gray-300 p-4  gap-2  w-3/4 lg:w-1/2 mx-auto my-4 text-center items-center rounded-lg'>
        <div className=' size-24 bg-brand-light rounded-full flex justify-center'>
          <Image className=' rounded-full' src={fatimaDentista} alt='fatima dentista'></Image>
        </div>
        <div className='md:w-1/2' >
          <h1 className='font-bold text-brand-darker'>Dra. Fátima Hernández</h1>
          <span className='text-xs text-brand-dark font-semibold'>Doctora en Cirugía Dental( Fundadora )</span>
          <p className='text-sm text-brand-darker '>Mis pacientes pueden esperar un consultorio dental familiar, amigable y afectuoso. La atención al paciente y la satisfacción de sus necesidades es mi máxima prioridad</p>
          <Link href="/dentistas">
            <button className='bg-brand-darker p-2 my-2  text-white rounded-md'>Conoce Al Resto Del Equipo</button>
          </Link>
        </div>
      </section>

      <section className='bg-white flex flex-col justify-center items-center mx-auto w-screen'>
        <HeroCards
          title="Nuestros Horarios de Atención"
          article="flex flex-col md:flex-row justify-center align-center text-center  "
          section1="flex-1 bg-brand-darker rounded-t-md   md:rounded-l-md md:rounded-tr-none text-center flex justify-center items-center "
          section2="flex-1  "
          section1_innerText={<Horario />}
          section2_innerText={
            <Image className='rounded-b-md  md:rounded-bl-none md:rounded-r-md' priority src={clinicaArias} alt='clinica arias'></Image>
          }
        />
        <HeroCards
          title=" Nuestra Locación"
          article="md:flex text-center "
          section1="flex-1  w-[21.3rem] h-[16.2rem] md:w-[22.5rem] md:h-[17rem] lg:w-[33rem]  lg:h-[24.6rem]bg-brand-darker "
          section2="flex-1 w-[21.3rem] h-[16.2rem] md:w-[22.5rem] md:h-[17rem] lg:w-[33rem] lg:h-[24.6rem] bg-brand-darker rounded-b-md   md:rounded-r-md md:rounded-tl-none md:rounded-bl-none  text-center flex justify-center items-center "
          section2_innerText={
            <Direciones />
          }
          section1_innerText={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15487.059368986795!2d-89.7600104!3d13.9725982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62955026819459%3A0xc7eac9bfb81fe418!2sCl%C3%ADnica%20Arias%20-%20Especialidades%20dentales!5e0!3m2!1ses!2sus!4v1711476144488!5m2!1ses!2sus"
              className=' rounded-t-md md:rounded-rl-none md:rounded-l-md w-[21.3rem] h-[16.2rem] md:w-[22.5rem] md:h-[17rem] lg:w-[33rem] lg:h-[24.6rem]'
              style={{ border: 0 }}
              allowFullScreen=''
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          }
        />

        <HeroCards
          title="Metodos De Pago"
          article="md:flex text-center "
          section2="flex-1  w-[21.3rem] h-[16.2rem] md:w-[22.5rem] md:h-[17rem] lg:w-[33rem]  lg:h-[24.6rem]bg-brand-darker "
          section1="flex-1 w-[21.3rem] h-[16.2rem] md:w-[22.5rem] md:h-[16.5rem] lg:w-[33rem] lg:h-[26rem] bg-brand-darker rounded-t-md   md:rounded-l-md md:rounded-tr-none text-center flex justify-center items-center "
          section1_innerText={<MetodosPago />}
          section2_innerText={
            <Image className='rounded-r-md items-center' src={creditcard} alt='clinica arias'></Image>
          }
        />
      </section>
      <section className='bg-brand-light rounded-md   m-4   lg:full lg:m-8 lg:my-12  justify-center items-center flex flex-col  ' >
        <h1 className='hidden md:inline text-brand-darker font-bold mt-4 '>¡Nuestros pacientes nos aman!  Dentista calificado de 5 estrellas. ¡está en buenas manos!</h1>
        <h1 className=' md:hidden mt-2 text-brand-darker  md:hiddentext-brand-darker text-md text-center'>¡Nuestros pacientes nos aman!</h1>
        <p className='md:hidden text-brand-darker text-center'> Dentista calificado de 5 estrellas. ¡está en buenas manos!</p>
        <ReviewsCarousel/>
      </section>
      <Footer/>
    </>
  )
}

export default Hero