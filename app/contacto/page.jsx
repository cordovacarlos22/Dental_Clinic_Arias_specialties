import Link from "next/link"
const Contacto = () => {
  return (
    <div className="mt-56  md:mt-62 lg:mt-40 w-screen h-screen z-0 ">
      <div className="w-full flex flex-col justify-center  items-center bg-brand-light ">
        <h1 className=" m-4 capitalize text-brand-darker lg:text-xl font-bold pt-4  justify-center text-center">Contactanos</h1>         
        <p className="text-brand-dark text-xs md:text-md  flex gap-2 p-2">
          Para Emergencias , por favor  llamarnos al <Link className="font-bold underline" href="tel:+503-7322-2299">503 7322-2299</Link></p>
        {/* <Image className="flex" src={smile} alt="smile"></Image> */}
      </div>

      <form className="bg-white">
            
      </form>
    </div>
  )
}

export default Contacto