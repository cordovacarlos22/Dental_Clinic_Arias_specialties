import Link from "next/link";

import logo from '@/public/logo.svg'
import Image from "next/image";
import Footer from "@/components/Footer";



 export async function fecthDentistas(){
   let URL = process.env.URL //  GLOBAL URL
   let dentistas = await fetch(`${URL}api/dentistas`);
    dentistas = await dentistas.json();
    console.log(dentistas);
    return dentistas;
 }


const Dentistas = async () => {

  let element = await fecthDentistas();

  return (
    <div className="  bg-white mt-56  md:mt-62 lg:mt-40 w-screen z-0 ">
      <div className="w-full flex flex-col justify-center  items-center bg-brand-light ">
        <h1 className="  m-4 capitalize text-brand-darker md:text-xl lg:text-3xl font-bold pt-4  justify-center text-center">Equipo dental de Clinica Arias</h1>
      </div>
         <div className="text-center  m-10">
        <h2 >
          En Clínica Arias, nuestro equipo de dentistas, especialistas, higienistas y personal de apoyo comparten un único objetivo: ayudar a nuestros pacientes a alcanzar sus objetivos de salud bucal. Entendemos que muchas personas descuidan acudir al dentista por inquietud, lo que puede provocar que los pequeños problemas se agranden con el tiempo. Es por eso que hacemos todo lo posible para ayudarlo a sentirse cómodo desde el momento en que cruza nuestras puertas. Queremos construir una relación duradera y de confianza con usted para poder guiarlo a lo largo de su viaje hacia una mejor salud bucal. Nuestros médicos se mantienen actualizados sobre su educación continua para que siempre podamos brindar los mejores tratamientos disponibles en el campo. No dude en conocernos un poco mejor explorando los perfiles de nuestros médicos a continuación en Clínica Arias.
        </h2>
         </div>
      <section className="flex flex-1 flex-wrap mb-20 w-2/3  justify-center  items-center mx-auto">
        {element.map((d) => (
          <div className=" w-[220px] h-[220px] flex  m-6 flex-wrap   items-center  justify-center mx-auto " key={d.firstName}>
            {/* <Link href={`/dentistas/${d.firstName}`}> */}
              <div className="">
              <Image className=" bg-brand-light rounded-full" width={180} height={180} src={d.avatar} alt={d.firstName}></Image>
              <div className="text-center ">
                <h1 className="capitalize">{d.firstName} {d.firstLastName}</h1>
                <h2 className="capitalize">{d.specialties}</h2>
              </div>
              </div>
            {/* </Link> */}
          </div>
        ))}
        </section>
        
        <Footer/>
      
    </div>
  )
}

export default Dentistas;