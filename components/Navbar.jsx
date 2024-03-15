'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import cruzRoja from "../public/CRUZ ROJA.svg";
import mapLogo from "../public/map logo.svg";
import { usePathname } from "next/navigation";



const Navbar = () => {

  let navLinks = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Servicios",
      path: "/servicios",
    },
    {
      name: "Nuestro Equipo",
      path: "/dentistas",
    },
    {
      name: "Quienes Somos",
      path: "/acerca",
    },
    {
      name: "Contacto",
      path: "/contacto",
    },

  ]
  const path = usePathname();
  return (
    <>
      <nav className="hidden md:flex  gap-1 h-40  items-center  justify-between mx-8 m-auto relative">
        {/* logo section */}
        <section className="logo-container  flex justify-start ">
          <Link href="/">
            <Image className="md:size-36 lg:size-52" src={logo} alt="clinica arias logo" />
          </Link>
        </section>
        {/* emergencies section */}
        <section className="flex gap-2  item-center">
          <Image className=" md:size-8 lg:size-12" src={cruzRoja} alt="red cross"></Image>
          <aside className="flex flex-col items-center font-extrabold ">
            <p className="flex  text-brand-darker md:text-xs lg:text-lg">+503 7322-2299</p>
            <p className="flex col text-brand-dark md:text-xs font-bold ">DISPONIBLES PARA EMERGENCIA</p>
          </aside>
        </section>
        {/* location section */}
        <section className="flex gap-2  item-center">
          <Image src={mapLogo} alt="map icon"></Image>
          <aside className="flex flex-col items-center font-extrabold ">
            <p className="flex  text-brand-darker md:text-xs lg:text-lg"> Final 5a Calle Poniente #14 Colonia San Manuel,</p>
            <p className="flex col text-brand-dark md:text-xs lg:text">Atiquizaya, El Salvador(frente a Unidad de Salud)</p>
          </aside>
        </section>
        {/* appointment section */}
        <section>
          <button className="bg-brand-darker text-white rounded-md p-2  md:w-28 hover:bg-brand-dark ">
            <Link href="./citas">
              Agende Hoy!
            </Link>
          </button>
        </section>
        <section className="flex gap-5 absolute bottom-2 text-lg right-28">
          {navLinks.map((e) => (
            <ul className="" key={e.name}>
              <li className="hover:bg-brand-light px-2 hover:rounded-md">
                <Link href={e.path}>
                  {e.name}
                </Link>
              </li>
            </ul>
          ))}
        </section>
      </nav>

      <nav className="mobile bg-gray-200 flex md:hidden">
        <h1>mobile</h1>
      </nav>
    </>
  )
}

export default Navbar