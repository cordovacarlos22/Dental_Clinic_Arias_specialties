'use client'
import React from 'react'
import { InlineWidget } from "react-calendly";
const Calendario = () => {
  return (
    <div className='w-screen h-screen  '>
      <InlineWidget
        styles={{
          padding: '1rem', height: '100vh', width: '100vw', borderRadius: '25%'
}}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '0B4F6F',
          textColor: '0170A3'
        }}
      url="https://calendly.com/clinicaariasdenta/30min" />
    </div>
  )
}

export default Calendario