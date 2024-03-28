'use client'
import React from 'react'
import { InlineWidget } from "react-calendly";
const Calendario = () => {
  return (
    <div className='w-screen h-screen overflow-visible '>
      <InlineWidget
     
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