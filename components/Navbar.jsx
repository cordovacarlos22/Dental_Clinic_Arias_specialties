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
      <nav className="hidden md:flex   h-40  items-center   justify-around   relative">
        {/* logo section */}
        <section className="logo-container mx-2  md:w-32 lg:w-60">
          <Link href="/">
            <Image className=" w-64 h-64 " src={logo} alt="clinica arias logo" />
          </Link>
        </section>
        {/* emergencies section */}
        <section className="flex gap-2  item-center">
          <Image className="md:w-6 lg:w-10" src={cruzRoja} alt="red cross"></Image>
          <aside className="inline flex-col items-center font-extrabold ">
            <p className="text-brand-darker md:text-xs lg:text-lg">+503 7322-2299</p>
            <p className="text-brand-dark md:text-xs font-bold ">DISPONIBLES PARA EMERGENCIA</p>
          </aside>
        </section>
        {/* location section */}
        <section className="flex gap-2  item-center">
          <Image src={mapLogo} alt="map icon"></Image>
          <aside className="inline flex-col items-center font-extrabold ">
            <p className=" text-brand-darker md:text-xs lg:text-lg"> Final 5a Calle Poniente #14 Colonia San Manuel,</p>
            <p className="text-brand-dark md:text-xs lg:text">Atiquizaya, El Salvador(frente a Unidad de Salud)</p>
          </aside>
        </section>
        {/* appointment section */}
        <section className="mx-2">
          <button className="bg-brand-darker text-white rounded-md p-2  md:text-sm md:w-16 lg:text-lg lg:w-32 hover:bg-brand-dark ">
            <Link href="./citas">
              Agende Hoy!
            </Link>
          </button>
        </section>
        <section className="flex gap-5 absolute bottom-2 lg:text-lg md:text-sm right-28">
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