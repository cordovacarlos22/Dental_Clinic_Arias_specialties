'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import cruzRoja from "../public/CRUZ ROJA.svg";
import mapLogo from "../public/map logo.svg";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const path = usePathname();
  return (
    <>
      <nav className="hidden md:flex  gap-1 h-40  items-center justify-around relative">
        {/* logo section */}
        <section className="logo-container ">
          <Link href="/">
            <Image className="md:size-28 lg:size-64"  src={logo}  alt="clinica arias logo" />

          </Link>
        </section>
        {/* emergencies section */}
        <section className="flex gap-2  item-center">
          <Image className="size-8" src={cruzRoja} alt="red cross"></Image>
          <aside className="flex flex-col items-center font-extrabold ">
            <p className="flex  text-brand-darker md:text-xs">+503 7322-2299</p>
            <p className="flex col text-brand-dark md:text-xs font-bold ">DISPONIBLES PARA EMERGENCIA</p>
          </aside>
        </section>
        {/* location section */}
        <section className="flex gap-2  item-center">
          <Image  src={mapLogo} alt="map icon"></Image>
          <aside className="flex flex-col items-center font-extrabold ">
            <p className="flex  text-brand-darker md:text-xs"> Final 5a Calle Poniente #14 Colonia San Manuel,</p>
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
        <ul className="flex gap-5 absolute bottom-2 text-lg">
          <li>
            {path === "/" ?
              (
                ''
              ) :
              (
                <Link href="/">Inicio</Link>
              )}
          </li>
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/dentistas">Nuestro Equipo</Link>
          </li>
          <li>
            <Link href="/acerca">Quienes Somos</Link>
          </li>
          <li>
            <Link href="/acerca">Contactenos</Link>
          </li>
        </ul>
      </nav>
      
      <nav className="mobile bg-gray-200 flex md:hidden">
        <h1>mobile</h1>
      </nav>
    </>
  )
}

export default Navbar