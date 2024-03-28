'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import WhatsApp from "@/components/WhatsApp";

const AnimationBottomToTop = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      {/* <Navbar/> */}
      <div className="fixed  bottom-0 right-0 m-4   z-50  ">
        <WhatsApp />
      </div>
     {children}
    </motion.div>
  )
}

export default AnimationBottomToTop



