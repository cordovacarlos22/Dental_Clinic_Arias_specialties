import Image from 'next/image'
import Link from 'next/link'
import whatsAppIcon from '@/public/whatsAPP.svg'
import React from 'react'

const WhatsApp = (props) => {
  return (
    <>

      <Link href='https://wa.me/50373222299' target='_blank'>
        <Image
          className='w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14'
          src={whatsAppIcon}
          alt='whatsapp icon'
          />
      </Link>
    </>
  )
}

export default WhatsApp