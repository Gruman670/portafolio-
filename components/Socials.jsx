"use client"
import React from 'react'
import{
    RiPinterestFill,
    RiGithubFill,
    RiLinKedinBoxFill,
    RiLinkedinBoxFill,
} from "react-icons/ri";
import {motion} from "framer-motion";
import Link from 'next/link';

export const Socials = () => {

const dataSocials= [
    {
        name: "Linkedin",
        patch: "https://www.linkedin.com/",
        icon: <RiLinkedinBoxFill size="30"/>
    },

    {
        name: "Github",
        patch: "https://github.com/Gruman670",
        icon: <RiGithubFill size="30"/>
    },
]

  return (
    <motion.div className='fixed bottom-0 z-30 flex flex-col items-center w-full mt-auto md:justify-center md:top-1/4 md:left-5 md:w-16 md:w-md h-20'>
        <div className='flex justify-between px-4 py-3 mx-auto'> 
            {dataSocials.map(({  name, patch, icon}) => (
                <div key={name}> 
                    <Link href={patch}>
                        <div>
                            <div>
                             {name}
                            </div>  
                        </div>
                        {icon}
                    </Link>
                </div>
            ))}
        </div>
    </motion.div>
  );
};
