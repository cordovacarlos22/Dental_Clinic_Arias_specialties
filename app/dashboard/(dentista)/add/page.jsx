"use client"

import React from 'react'
import { useState } from 'react'



const AddDentista = () => {

  // form states
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [firstLastName, setFirstLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [admin, setAdmin] = useState(false);
  const [specialties, setSpecialties] = useState("");


  // handles add new doctor to DB
  const addNewDentistaHandler = async (e) => {
    e.preventDefault()

    console.log(firstName, middleName, firstLastName, secondLastName, userName, email, password, avatar, admin, specialties);



    let addDoctor = await fetch('/api/dentistas', {
      method: "POST",
      body: JSON.stringify({ firstName, middleName, firstLastName, secondLastName, userName, email, password, avatar, admin, specialties }),
    });
    addDoctor = await addDoctor.json();

    if (addDoctor.ok) {
      alert("Doctor fue Agregado Satisfactoriamente ✅")
    } else {
      alert("Error Doctor no pudo ser Agregado");
    }
  };


  return (
    <div className="bg-grey-lighter  flex flex-col  mt-56 md:mt-36 bg-red-500 w-screen min-h-[calc(100vh-201px)]   lg:min-h-[calc(100vh-160px)] z-0  p-6  ">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form onSubmit={addNewDentistaHandler} className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center text-brand-darker">Agregar un Doctor</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="Primer Nombre"
            required
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => setMiddleName(e.target.value)}
            value={middleName}
            placeholder="Secundo Nombre"
            required
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => setFirstLastName(e.target.value)}
            value={firstLastName}
            placeholder="Apellido Parterno"
            required
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => setSecondLastName(e.target.value)}
            value={secondLastName}
            placeholder="Apellido Materno"
            required
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Crear Nombre Usuario"
            required
            autoComplete='username'
          />

          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            required
            autoComplete='username'
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Ingresar Contraseña"
            required
            autoComplete='current-password'
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => setAvatar(e.target.value)}
            value={avatar}
            placeholder="avatar"
            required
          />
          

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            onChange={(e) => setSpecialties(e.target.value)}
            value={specialties}
            placeholder="Ingrese Especialidad Medica"
            required
          />

          <label
            htmlFor="admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Admistrador
          </label>

          <select
            name="admin"
            id="admin"
            defaultValue={admin}
            onChange={(e) => setAdmin(e.target.value)}
            className="bg-gray-50 border border-gray-300 mb-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">--Selectionar Una Opcion--</option>
            <option value={false}>No</option>
            <option value={true}> Si</option>
          </select>


          <button type="submit" className="w-full text-white bg-brand-darker hover:bg-brand-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Agregar Doctor</button>


        </form>
      </div>
    </div>
  )
}

export default AddDentista