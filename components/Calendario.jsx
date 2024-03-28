'use client'
import React from 'react'
import { InlineWidget } from "react-calendly";
const Calendario = () => {
  return (
    <div className='w-screen '>
      <InlineWidget url="https://calendly.com/clinicaariasdenta/30min" />
    </div>
  )
}

export default Calendario