"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTransitions';


const CardProject = (props) => {
    return(
        <motion.div variants={fadeIn("left", 0.5)} initial="hidden" animate="show" exit="hiddenn"  whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}className="flex flex-col justify-center items-center min-h-[200px] relative group">
            <div className="text-center bg-blue-300 absolute top-0 z-20 p-5 rounded">
                <h1 className="font-bold">{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className="h-full w-full rounded absolute"> 
            <Image
                fill
                className="rounded top-0 left-0 absolute"
                alt={props.title}
                src={props.bgCardImage}             
                
                />
            </div>
            <div className="group-hover:flex gap-5 mt-5 hidden group-hover:z-20 insert-0 items-end transition-all">
                <Link href={props.urlRepositorio}>
                    <Button color="primary">repositorio</Button>
                </Link>
                <Link href={props.urlDespliegue}>
                    <Button color="secondary">deploy</Button>
                </Link>
            </div>
                
        </motion.div>
    );
};

export default CardProject;