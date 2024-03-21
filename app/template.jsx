'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'

const AnimationBottomToTop = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      <Navbar/>
      {children}
    </motion.div>
  )
}

export default AnimationBottomToTop



