"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTransitions';

export default function CardAbout() {
  return (
    <motion.div variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hiddenn" className='h-screen flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-2xl mb-5 font-bold'>Acerca de mí</h1>
        </div>
        <div>
            <p className='text-xl px-5 sm:px-20'>Soy un colaborador entusiasta y comprometido que valora la comunicación clara y la colaboración efectiva dentro de los equipos. Disfruto enfrentando desafíos complejos y encontrando soluciones creativas para resolver problemas. Mi objetivo es seguir creciendo como profesional, contribuir al éxito de los proyectos en los que participo y seguir aprendiendo en este emocionante campo del desarrollo web.
            </p>
        </div>
    </motion.div>
  )
}
