'use client'

import { motion } from 'framer-motion'

const AnimationLeftToRight = ({ children}) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimationLeftToRight



