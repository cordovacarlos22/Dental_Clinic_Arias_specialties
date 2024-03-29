'use client'


import Footer from "@/components/Footer"
import Link from "next/link"
import { useState } from 'react'



const Contacto = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const handleContactForm = async()=>{
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message
      })
    })
    const data = await response.json()
    console.log(data)
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }


  return (
    <div className="mt-56  md:mt-62 lg:mt-40 w-screen h-screen z-0 ">
      <div className="w-full flex flex-col justify-center  items-center bg-brand-light ">
        <h1 className=" m-4 capitalize text-brand-darker lg:text-xl font-bold pt-4  justify-center text-center">Contactanos</h1>         
        <p className="text-brand-dark text-xs md:text-md  flex gap-2 p-2">
          Para Emergencias , por favor  llamarnos al <Link className="font-bold underline" href="tel:+503-7322-2299">503 7322-2299</Link></p>
        {/* <Image className="flex" src={smile} alt="smile"></Image> */}
      </div>

      <form  className="bg-white">
            <h2>aqui van a ir  los inputs </h2>
      </form>
      <Footer/>
    </div>
  )
}

export default Contacto