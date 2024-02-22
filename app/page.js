import Card from "@/components/Card";
import CardImage from "@/components/CardImage";
import {Image} from "@nextui-org/react";

export default function Home() {
  return (
    <section 
     id="home" 
      className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center h-screen sm:px-20">
    
      <CardImage />
      <Card />
    </section>
  );
};