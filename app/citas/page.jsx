import Calendario from "@/components/Calendario"
import Image from "next/image"
import Link from "next/link"
import cross from '@/public/cross.svg'
const Citas = () => {
  return (
    <div className=" mt-56  md:mt-62 lg:mt-40 w-screen h-screen z-0 ">
      <div  className="w-full flex flex-col justify-center  items-center bg-brand-light ">
      <h1 className=" m-4 capitalize text-brand-darker lg:text-xl font-bold pt-4  justify-center text-center">Vamos a Programar su cita!</h1>
        <p className="text-brand-dark text-xs md:text-md  flex gap-2 p-2">
          <Image src={cross} alt="cross"></Image>
          Para Emergencias , por favor  llamarnos al <Link className="font-bold underline" href="tel:+503-7322-2299">503 7322-2299</Link></p>
      {/* <Image className="flex" src={smile} alt="smile"></Image> */}
      </div>
      {/* <Calendario/>  por el momento no se reciben citas por el calendario  */} 

     <section className="">
        <div className=" flex   p-2 flex-col justify-normal bg-brand-light  w-90 h-52  m-10 rounded-3xl">
          <h1 className="text-center  m-auto font-bold ">
            por el momento solo recibimos citas por whatsapp☹️, lo sentimos por el inconveniente
          </h1>
          <div className="bg-green-600 w-60 text-center flex  rounded-xl p-2 justify-center items-center mx-auto mb-4  text-white">
            <Link href='https://wa.me/50373222299' target='_blank'>
              <button className="  ">Agendar Cita por Whatsapp</button>
            </Link>
          </div>
        </div>
        
     </section>
    </div>
  )
}

export default Citas