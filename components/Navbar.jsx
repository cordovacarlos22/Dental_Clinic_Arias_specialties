import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import cruzRoja from "../public/cross.svg";
import mapLogo from "../public/map logo.svg";
import hamburgerMenu from "../public/menu.svg"
import phone from "../public/phone.svg";
import location from "../public/location.svg";
import calendar from "../public/calendar.svg";


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

  return (
    <>
      <header className=" hidden md:flex  md:flex-1 h-40  items-center   justify-around ">
        {/* logo section */}
        <section className=" logo-container flex ml-4">
          <Link className="flex" href="/">
            <Image className="size-18 " src={logo} alt="red cross"></Image>
            {/* <aside className="flex flex-col  ml-2 justify-center font-extrabold ">
              <p className="text-brand-darker md:text-md lg:text-2xl">Clinica Arias</p>
              <p className="text-brand-dark md:text-md font-bold lg:text-lg ">Especialidades Dentales </p>
            </aside> */}
          </Link>
        </section>
        <section className="right-container flex flex-col gap-6">
          <section className="right-top-container flex gap-4  ">
            {/* emergencies section */}
            <section className=" flex  flex-col  item-center">

              <p className="text-brand-darker  md:text-xs lg:text-2xl">503 7322-2299</p>

              <p className="text-brand-dark md:text-xs font-bold  gap-2  inline-flex">  <Image className="size-4" src={cruzRoja} alt="red cross"></Image>DISPONIBLES PARA EMERGENCIA</p>

            </section>
            {/* location section */}
            <section className="flex gap-2  item-center">
              <Image className="size-6" src={mapLogo} alt="map icon"></Image>
              <aside className="inline flex-col items-center font-extrabold ">
                <p className=" text-brand-darker md:text-xs lg:text-lg"> Final 5a Calle Poniente #14 Colonia San Manuel,</p>
                <p className="text-brand-dark md:text-xs lg:text">Atiquizaya, El Salvador(frente a Unidad de Salud)</p>
              </aside>
            </section>
            {/* appointment section */}
            <section className="mx-2">
              <button className="bg-brand-darker text-white rounded-md p-2  md:text-sm md:w-16 lg:text-lg lg:w-36 hover:bg-brand-dark ">
                <Link href="/citas">
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

      <nav className="mobile w-screen  flex flex-col md:hidden">
        <section className="mobile-top bg-gray-200 w-full flex justify-center items-center ">
          <Link href="/citas" >
            <p className="text-orange-400   text-xs  font-bold"> <span className="text-red-400">+ </span> DISPONIBLES PARA EMERGENCIA</p>
          </Link>
        </section>
        <section className="mobile-middle flex    w-full  justify-between px-4">
          <Image priority={false} src={logo} className="size-32 m-0 p-0" alt="logo"></Image>
          <aside className="flex pt-4">
            <button>
              <Image src={hamburgerMenu} alt="hamburger menu"></Image>
            </button>
          </aside>
        </section>
        <section className="mobile-bottom flex w-full">
          <aside className="bg-gray-200 flex-1  flex flex-col  items-center p-2 border-r border-brand-dark">
            <Image priority={false} src={phone} alt="phone" ></Image>
            <p className="text-xs text-brand-dark">503 7322-2299</p>
          </aside>
          <aside className="bg-gray-200 flex-1  ">
            <aside className="bg-gray-200 flex-1  flex flex-col  items-center p-2 ">
              <Image priority={false} src={location} alt="phone" ></Image>
              <Link className="m-auto" href="https://maps.app.goo.gl/8ufftsE2aHmuYtHP7" target="_black" referrerPolicy="same-origen">
                
                <p className="text-xs text-brand-dark">mapa</p>
              </Link>
              
            </aside>
          </aside>
          <aside className="bg-brand-dark flex-1 ">
            <aside className="bg-brand-darker flex-1  flex flex-col  items-center p-2 ">
              <Image priority={false} src={calendar} alt="phone" ></Image>
              <p className="text-xs text-white">Agendar Cita</p>
            </aside>
          </aside>
        </section>
      </nav>
    </>
  )
}

export default Navbar