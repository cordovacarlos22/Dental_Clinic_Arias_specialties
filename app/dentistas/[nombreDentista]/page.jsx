
const Dentista = ({params}) => {
  return (
    <div className="mt-56 md:mt-36 bg-red-500 w-screen  min-h-[calc(100vh-201px)]  lg:min-h-[calc(100vh-160px)] z-0  p-6 ">
    <h1>hola dentista {params.nombreDentista}</h1>
    </div>
  )
}

export default Dentista;