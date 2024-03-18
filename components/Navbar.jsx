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
      <header className=" hidden md:flex h-40  items-center   justify-around ">
        {/* logo section */}
        <section className=" logo-container flex ml-4">
          <Link className="flex" href="/">
            <Image className="size-18 " src={logo} alt="red cross"></Image>
            <aside className="flex flex-col  ml-2 justify-center font-extrabold ">
              <p className="text-brand-darker md:text-md lg:text-2xl">Clinica Arias</p>
              <p className="text-brand-dark md:text-md font-bold lg:text-lg ">Especialidades Dentales </p>
            </aside>
          </Link>
        </section>
        <section className="right-container flex flex-col gap-6">
          <section className="right-top-container flex gap-4  ">
            {/* emergencies section */}
            <section className=" flex   item-center">
              <Image className="md:w-6 lg:w-10" src={cruzRoja} alt="red cross"></Image>
              <aside className="inline flex-col items-center font-extrabold ">
                <p className="text-brand-darker md:text-xs lg:text-lg">+503 7322-2299</p>
                <p className="text-brand-dark md:text-xs font-bold ">DISPONIBLES PARA EMERGENCIA</p>
              </aside>
            </section>
            {/* location section */}
            <section className="flex gap-2  item-center">
              <Image className="size-10"  src={mapLogo} alt="map icon"></Image>
              <aside className="inline flex-col items-center font-extrabold ">
                <p className=" text-brand-darker md:text-xs lg:text-lg"> Final 5a Calle Poniente #14 Colonia San Manuel,</p>
                <p className="text-brand-dark md:text-xs lg:text">Atiquizaya, El Salvador(frente a Unidad de Salud)</p>
              </aside>
            </section>
            {/* appointment section */}
            <section className="mx-2">
              <button className="bg-brand-darker text-white rounded-md p-2  md:text-sm md:w-16 lg:text-lg lg:w-36 hover:bg-brand-dark ">
                <Link href="./citas">
                  <span className="lg:text-xl md:text-sm">Agende Hoy!</span>
                </Link>
              </button>
            </section>
          </section>
          <section className="right-bottom0container">
            <nav className="flex gap-5  lg:text-lg md:text-sm ">
              {navLinks.map((e) => (
                <ul className="" key={e.name}>
                  <li className="hover:bg-brand-light px-2 hover:rounded-md">
                    <Link href={e.path}>
                      {e.name}
                    </Link>
                  </li>
                </ul>
              ))}
            </nav>
          </section>
         
        </section>
      </header>

      <nav className="mobile bg-gray-200 flex md:hidden">
        <h1>mobile</h1>
      </nav>
    </>
  )
}

export default Navbar