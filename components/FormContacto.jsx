"use client"
import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTransitions';

const FormContacto =() => {
  return (
    <motion.form variants={fadeIn("down", 0.5)} initial="hidden" animate="show" exit="hiddenn" className='flex flex-col justify-center items-center w-full gap-5 sm:sm:w-3/4'>
        <h1 className='text-2xl'> Para mas informacion ¡Contáctame!</h1>
        <Input type="text" label="Nombre" className='w-1/2 xl:w-1/3'/>
        <Input type="email" label="Email" className='w-1/2 xl:w-1/3'/>
        <Textarea label="Mensaje" className='w-1/2 xl:w-1/3'
    />
        <Button className='text-white mt-5 py-6 px-8 text-bas' color="secondary">Contactar</Button>
    </motion.form>
  )
}


export default FormContacto