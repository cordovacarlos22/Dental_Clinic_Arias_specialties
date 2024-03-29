import Image from 'next/image'
import Link from 'next/link'
import whatsAppIcon from '@/public/whatsAPP.svg'
import React from 'react'

const WhatsApp = (props) => {
  return (
    <>

      <Link href='https://wa.me/50373222299' target='_blank'>
        <Image
          className='w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16'
          src={whatsAppIcon}
          alt='whatsapp icon'
          />
      </Link>
    </>
  )
}

export default WhatsApp