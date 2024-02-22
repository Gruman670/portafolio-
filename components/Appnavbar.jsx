import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";


const Appnavbar = () => {

  const links = [
    {
      nombre:'Acerca de mí',
      href: '/about',
    },

    {
      nombre:'Contacto',
      href: '/contacto'
    },

    {
      nombre:'Proyectos',
      href: '/proyectos'
    }
  ]


  return (
    <Navbar className="bg-background/20">
      {/* Navbar xs */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-secondary">Portafolio</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarMenu>
      {links.map ((link, i)=> (
          <NavbarItem key={i}>
          <Link className="text-white" href={link.href}>
            {link.nombre}
          </Link>
        </NavbarItem>
        ))}
      </NavbarMenu>


      {/* Navbar xl */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start"> 
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-secondary">Portafolio</p>
          </Link>
       </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map ((link, i)=> (
          <NavbarItem key={i}>
          <Link className="text-white" href={link.href}>
            {link.nombre}
          </Link>
        </NavbarItem>
        ))}
        
      </NavbarContent>
    </Navbar>
  );
};
 export default Appnavbar