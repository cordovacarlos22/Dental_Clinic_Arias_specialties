import Link from 'next/link'
import React from 'react'

const Dashhboard = () => {
  return (
    <div className='mt-56 md:mt-36 bg-red-500 w-screen  min-h-[calc(100vh-201px)]  lg:min-h-[calc(100vh-160px)] z-0  p-6 '>
      Dashhboard <br />

      <Link href="/dashboard/add">Agregar un doctor</Link>
    </div>
  )
}

export default Dashhboard