import React from 'react'

export const MetodosPago = () => {
  return (
    <div
    className='text-white font-bold p-4'
    >
      <h1 className='text-xs lg:text-lg  font-extrabold  capitalize'> metodos de pago</h1>
      <ol>
        <li className='text-xs  md:text-md lg:text-lg m-2 p-2'> Efectivo 💵  </li>
        <li className='text-xs  md:text-md lg:text-lg m-2 p-2'>Transferencia  de Fedecredito 🏦</li>
        <li className='text-xs  md:text-md lg:text-lg m-2 p-2'>Transferencia de Banco Agricola 🏦</li>
      </ol>
    </div>
  )
}
