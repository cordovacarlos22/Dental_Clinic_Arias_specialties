'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import cruzRoja from "../public/cross.svg";
import mapLogo from "../public/map logo.svg";
import hamburgerMenu from "../public/menu.svg"
import phone from "../public/phone.svg";
import location from "../public/location.svg";
import calendar from "../public/calendar.svg";
import { useState } from "react";
import AnimationLeftToRight from "@/components/AnimationLeftToRight";
import AnimationRightToLeft from "@/components/AnimationRightToLeft";

const Navbar = () => {

  /* The `let navLinks` array in the code snippet is defining an array of objects that represent
  navigation links for a website. Each object in the array contains two properties: */
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

  /* The line `const [toggle, setToggle] = useState(false);` in the code snippet you provided is using
  the `useState` hook from React to create a state variable named `toggle` and a corresponding
  function named `setToggle` to update the value of `toggle`. */
  const [toggle, setToggle] = useState(false);




  return (
    <>
      <AnimationRightToLeft>
        {/* The code you provided is defining the desktop version of the navigation bar for a website
      using React. Let's break down the structure and functionality of this code snippet: */ }
        <header className=" hidden md:flex  md:flex-1 h-40  items-center   justify-around ">
          {/* logo section */}
          <section className=" logo-container flex ml-4">
            <Link className="flex" href="/">
              <Image priority={false} className="size-18 " src={logo} alt="red cross"></Image>
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
                <Image priority={false} className="size-6" src={mapLogo} alt="map icon"></Image>
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
              {/* /* The code snippet you provided is rendering a navigation bar with a list of navigation
           links based on the `navLinks` array. Here's a breakdown of what the code is doing: */ }
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

        {/* The code you provided is defining a responsive mobile version of the navigation bar for a
      website. It includes sections for displaying emergency contact information, logo, navigation
      links, phone number, location map link, and appointment scheduling button.  */}
        <header className="mobile w-screen   md:hidden">
          <Link href="/citas" >
            <section className="mobile-top bg-gray-200 w-full flex justify-center items-center ">
              <p className="text-orange-400   text-xs  font-bold"> <span className="text-red-400">+ </span> DISPONIBLES PARA EMERGENCIA</p>
            </section>
          </Link>
          <section className="mobile-middle  flex flex-col  w-full  justify-between px-4">
            <aside className="flex justify-around">
              <Image priority={true} src={logo} className="size-32 m-0 p-0" alt="logo"></Image>

              {/* is creating a button element that, when clicked, toggles the state
           of the `toggle` variable in the component. */ }
              <button onClick={() => setToggle(!toggle)} >
                <Image priority={false} src={hamburgerMenu} alt="hamburger menu"></Image>
              </button>
            </aside>


            {/* /* This code snippet is using a conditional rendering technique in React. The expression
         `{toggle && (...)}` is checking the value of the `toggle` state variable. If `toggle` is
         `true`, the code inside the curly braces will be rendered. */ }

            {toggle && (
              <AnimationLeftToRight

              >
                <nav className=" pb-4 ">
                  {navLinks.map((e) => (
                    <ul className="" key={e.name}>
                      <li className="hover:bg-brand-light px-2 hover:rounded-md">
                        <Link onClick={() => setToggle(!toggle)} href={e.path}>
                          {e.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </nav>
              </AnimationLeftToRight>
            )}


          </section>
          <section className="mobile-bottom flex w-full">
            <aside className="bg-gray-200 flex-1  flex flex-col  items-center p-2 border-r border-brand-dark">
              <Link href="tel:+503-7322-2299" className="flex flex-col justify-center items-center">
                <Image className="" priority={false} src={phone} alt="phone" ></Image>
                <p className="text-xs text-brand-dark">Llamar Ahora</p>
              </Link>


            </aside>
            <aside className="bg-gray-200 flex-1  ">
              <aside className="bg-gray-200 flex-1  flex flex-col  items-center p-2 ">
                <Link className=" flex flex-col justify-center" href="https://maps.app.goo.gl/8ufftsE2aHmuYtHP7" target="_black" referrerPolicy="same-origen">
                  <Image className="my-0 mx-auto" priority={false} src={location} alt="phone" ></Image>
                  <p className="text-xs text-brand-dark">mapa</p>
                </Link>

              </aside>
            </aside>
            <aside className="bg-brand-dark flex-1 ">
              <aside className="bg-brand-darker flex-1  flex flex-col  items-center p-2 ">
                <Link className=" flex flex-col justify-center" href='/citas'>
                  <Image className="my-0 mx-auto" priority={false} src={calendar} alt="phone" ></Image>

                  <p className="text-xs text-white">Agendar Cita</p>
                </Link>
              </aside>
            </aside>
          </section>
        </header>
      </AnimationRightToLeft>
    </>
  )
}

export default Navbar