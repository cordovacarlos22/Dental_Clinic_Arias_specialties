import Link from 'next/link'
import React from 'react'

const Dashhboard = () => {
  return (
    <div>
      Dashhboard <br />

      <Link href="/dashboard/add">Agregar un doctor</Link>
    </div>
  )
}

export default Dashhboard