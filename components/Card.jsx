"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTransitions';
import { MdDownload } from "react-icons/md";
import { Button } from '@nextui-org/react';


const Card = () => {
  return (
    <motion.div variants={fadeIn("left", 0.5)} initial="hidden" animate="show" exit="hiddenn"  className='flex flex-col px-20 sm:px-5'>
        <div className='mb-5'> 
            <h2 className='text-2xl font-bold'>Hola Soy Rodrigo Velasquez Morales </h2>
        </div>
        <div>
            <p className='text-lg'>Apasionado desarrollador web full stack con una sólida base en tecnologías frontend y backend. Poseo habilidades en HTML, CSS, JavaScript y Node.js, así como experiencia en la creación de aplicaciones web utilizando frameworks como React.js. Estoy ansioso por aprender y crecer en el campo del desarrollo web, y estoy buscando oportunidades para aplicar mis conocimientos y contribuir a proyectos emocionantes.</p>
        </div>
        <div className='mt-4'>
            <Button color= "primary" className='py-6 px-5'
            radius="full"
            endContent={<MdDownload />}> Curriculum</Button>
        </div>
    </motion.div>
    );
};

export default Card