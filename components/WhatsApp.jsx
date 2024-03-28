import Image from 'next/image'
import Link from 'next/link'
import whatsAppIcon from '@/public/whatsAPP.svg'
import React from 'react'

const WhatsApp = (props) => {
  return (
    <>

      <Link href='https://wa.me/50373222299' target='_blank'>
        <Image
          src={whatsAppIcon}
          alt='whatsapp icon'
          width={80}
          height={80} />
      </Link>
    </>
  )
}

export default WhatsApp