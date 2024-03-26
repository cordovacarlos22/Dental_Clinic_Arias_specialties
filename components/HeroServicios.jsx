import Image from 'next/image'
import React from 'react'

const HeroServicio = (props) => {
  return (
    <div className='w-[150px] h-[150px] flex flex-col  items-center m-2 p-2'>
        <Image src={props.icon} alt={props.iconAlt}></Image>
      <h1 className={props.textcolors}>{props.Tittle}</h1>
    </div>
  )
}

export default HeroServicio