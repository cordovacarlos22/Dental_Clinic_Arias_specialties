import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import cruzRoja from "../public/CRUZ ROJA.svg";
import mapLogo from "../public/map logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="hidden  md:flex  h-40  items-center justify-around">
        {/* logo section */}
        <section className="logo-container ">
          <Link href="/">
            <Image src={logo} alt="clinica arias logo" />

          </Link>
        </section>
        {/* emergencies section */}
        <section className="flex gap-2  item-center">
          <Image src={cruzRoja} alt="red cross"></Image>
          <aside className="flex flex-col items-center font-extrabold ">
            <p className="flex  text-brand-darker text-2xl">+503 7322-2299</p>
            <p className="flex col text-brand-dark font-bold">DISPONIBLES PARA EMERGENCIA</p>
          </aside>
        </section>
        {/* location section */}
        <section className="flex gap-2  item-center">
          <Image src={mapLogo} alt="map icon"></Image>
          <aside className="flex flex-col items-center font-extrabold ">
            <p className="flex  text-brand-darker text-lg"> Final 5a Calle Poniente #14 Colonia San Manuel,</p>
            <p className="flex col text-brand-dark font-bold">Atiquizaya, El Salvador(frente a Unidad de Salud)</p>
          </aside>
        </section>
        {/* appointment section */}
        <section>
          <button className="bg-brand-darker text-white rounded-md p-2  hover:bg-brand-dark ">
            <Link href="./citas">
              Agende Hoy!
            </Link>
          </button>
        </section>
      </nav>

      <nav className="mobile bg-black flex md:hidden">
        <h1>mobile</h1>
      </nav>
    </>
  )
}

export default Navbar