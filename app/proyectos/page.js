
import CardProject from "@/components/CardProject";
import Card from '@/components/Card';


function projects() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 h-screen items-center px-5 sm:px-40 xl:px-40'> 
       <CardProject
       title="Landing Page"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1708522245/WhatsApp_Image_2024-02-20_at_23.41.27_ljegkz.jpg"
       urlDespliegue="https://gruman670.github.io/TROCK/init.html"
       urlRepositorio="https://github.com/Gruman670/TROCK"
       />
       <CardProject
       title="CRUD App"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1708522245/WhatsApp_Image_2024-02-20_at_23.41.27_1_mun3r1.jpg"
       urlDespliegue="https://gruman670.github.io/Proyecto-Crud/crud.html"
       urlRepositorio="https://github.com/Gruman670/Proyecto-Crud?tab=readme-ov-file"
       />
       <CardProject
       title="Dashboard de Datos"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1708522245/WhatsApp_Image_2024-02-20_at_23.41.27_2_rbkchq.jpg"
       urlDespliegue="https://gruman670.github.io/chart-clima/"
       urlRepositorio="https://github.com/Gruman670/chart-clima?tab=readme-ov-file"
       />
       <CardProject
       title="Restaurant App"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1708522929/WhatsApp_Image_2024-02-20_at_23.41.27_4_psazgs.jpg"
       urlDespliegue="https://gruman670.github.io/Napoles/index.html"
       urlRepositorio="https://github.com/Gruman670/Napoles"
       />
       <CardProject
       title="E Commerce App"
       description=""
       bgCardImage="https://res.cloudinary.com/dvmytlesq/image/upload/v1708522245/WhatsApp_Image_2024-02-20_at_23.41.27_3_wcch3d.jpg"
       urlDespliegue="https://fabulous-genie-b3ac69.netlify.app/"
       urlRepositorio="https://github.com/Gruman670/Frontend-Proyecto-5-E-commerce?tab=readme-ov-file"
       
       />
    </div>
  )
}

export default projects