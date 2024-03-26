import React from 'react'

const HeroInfo = (props) => {
  return (
    <section className='flex flex-col justify-center items-center text-center bg-white m-6 '>
      <h1 className='text-brand-darker font-bold md:text-2xl lg:text-3xl'>{props.title}</h1>
      <article className={props.article}>
        <section className={props.section1}>{props.section1_innerText}</section>
        <section className={props.section2}>{props.section2_innerText}</section>
      </article>
    </section>
  )
}

export default HeroInfo