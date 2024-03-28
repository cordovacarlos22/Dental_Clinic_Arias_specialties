import Calendario from "@/components/Calendario"


const Citas = () => {
  return (
    <div className=" w-screen ">
      <div  className="w-full  flex justify-center gap-4 items-center bg-brand-light ">
      <h1 className=" m-4 capitalize text-brand-dark lg:text-xl font-bold pt-4  justify-center text-center">Vamos a Programar su cita!</h1>
      {/* <Image className="flex" src={smile} alt="smile"></Image> */}
      </div>
      <Calendario/>
    </div>
  )
}

export default Citas