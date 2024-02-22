"use client"
import { Image } from '@nextui-org/react'
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTransitions';
import React from 'react'
import Avatar from '@/assets/img/Avatar.jpg'

const CardImage = () => {
  return (
    <motion.div variants={fadeIn("left", 0.5)} initial="hidden" animate="show" exit="hiddenn" className="bg-green flex justify-center h-full sm:h-auto items-end">
    <Image className="bg-orange"
       width={340}
       src= {Avatar.src}
       alt="NextUI Album Cover"
       classNames="m-5"
     />
    </motion.div>
  )
}

export default CardImage