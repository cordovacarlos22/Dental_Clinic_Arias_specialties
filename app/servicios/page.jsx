import Footer from '@/components/Footer'
import React from 'react'
import Image from 'next/image';
import emergengia from '@/public/emergencia.svg';
import cirugia from '@/public/cirugiadenta.svg';
import coronas from '@/public/coronas.svg';
import dentaduras from '@/public/dentaduras.svg';
import extracciones from '@/public/extracciones.svg';
import flour from '@/public/fluor.svg';
import limpieza from '@/public/limpieza de dientes.svg';
import puentes from '@/public/puentes dentales.svg';
import raxosX from '@/public/rayos_x.svg';
import rellenos from '@/public/rellenos.svg';
import uniones from '@/public/unionesDentales.svg';
const Servicios = () => {

  const nuestrosServicios = [
    {
      title: "Emergencia",
      image: emergengia,
      description: "Mantén la calma. Concéntrese en detener el sangrado y proteger el diente o el área lesionada siguiendo las instrucciones adecuadas de esta sección."
    },
    {
      title: "Muelas del juicio/cirugía oral",
      image: cirugia,
      description: "Los terceros molares, también llamados muelas del juicio, son el último conjunto de dientes permanentes que erupcionan en la boca de una persona y son los menos necesarios. Si bien la extracción de las muelas del juicio es el tipo de cirugía bucal más conocida, existen muchas razones por las que puede ser necesaria la cirugía bucal."
    },
    {
      title: "Coronas",
      image: coronas,
      description: "Una corona dental restaura la forma, el tamaño y la fuerza de un diente. Cubre completamente la parte visible de su diente o implante dental."
    },
    {
      title: "Dentaruras",
      image: dentaduras,
      description: "Las dentaduras postizas parciales y completas se ajustan perfectamente a las encías para reemplazar algunos o todos los dientes naturales faltantes para que pueda volver a comer y hablar con naturalidad."
    },
    {
      title: "Extracciones",
      image: extracciones,
      description: "Proteja su salud bucal y obtenga alivio del dolor dental extrayendo un diente dañado o cariado de forma segura y suave."
    },
    {
      title: "Aplicaciones de flúor",
      image: flour,
      description: "El fluoruro es un mineral natural que fortalece el esmalte de los dientes. Un dentista puede aplicar fluoruro tópico sin dolor en la superficie de los dientes para protegerlos contra las caries."
    },
    {
      title: "Limpieza ",
      image: limpieza,
      description: "Los chequeos dentales de rutina son vitales para una buena higiene bucal y son la mejor manera de detectar problemas en sus primeras etapas, lo que ahorra molestias, tiempo y dinero innecesarios."
    },
    {
      title: "Puentes ",
      image: puentes,
      description: "Anclado a los dientes existentes, un puente dental personalizado proporciona un reemplazo funcional y de apariencia natural para los dientes perdidos."
    },
    {
      title: "Radiografia ",
      image: raxosX,
      description: "Un diagnóstico preciso requiere una comprensión completa de su boca, por lo que utilizamos la última tecnología de imágenes dentales disponible al instante."
    },
    {
      title: "Rellenos ",
      image: rellenos,
      description: "Un relleno repara y restaura la superficie de un diente que ha sido dañado por caries, fractura o desgaste."
    },



  ]
  return (
    <>
      <div className=" mt-56  md:mt-62 lg:mt-40 w-screen   z-0  bg-white ">
        <div className="w-full flex flex-col justify-center  items-center bg-brand-light ">
          <h1 className="  m-4 capitalize text-brand-darker md:text-xl lg:text-3xl font-bold pt-4  justify-center text-center">Nuestros Servicios dentales</h1>
        </div>
        <section className='flex  flex-wrap justify-center items-center mx-auto w-3/3 2xl:w-3/4  '>

          {nuestrosServicios.map((item) => (
            <div key={item.title} className={`w-[335px] h-[350px]   m-4 text-brand-darker flex flex-col text-center justify-center items-center   `}>
              <Image className='w-[83px] h-[83px]' src={item.image} alt={item.title}></Image>
              <h1 className='font-bold'>{item.title}</h1>
              <p className='  text-xs'>
                {item.description}
              </p>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Servicios