import Image from 'next/image'
import React from 'react'

const HeroComponents = (props) => {
  return (
    <>
    <section className={props.className1}>
        <Image className={props.imgClass} src={props.img} alt={props.alt}></Image> 
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
    </section>
    </>
  )
}

export default HeroComponents