'use client'

import { motion } from 'framer-motion'

const AnimationRightToLeft = ({ children}) => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimationRightToLeft



