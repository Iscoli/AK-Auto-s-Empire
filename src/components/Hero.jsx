// Import the image
import shidaImage from "../assets/AkAutos.png";
import { Link } from "react-router-dom";


 const Hero = () => (
   <section
     id="home"
     className="relative h-screen flex items-center justify-center overflow-hidden "
     style={{
       backgroundImage: `url(${shidaImage})`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       marginTop:"19px"
     }}
   >
     <div className="bg-black bg-opacity-50 p-6 md:p-8 rounded-lg text-center animate-fadeIn mx-4">
       <h1 className="text-3xl md:text-5xl font-bold text-background mb-4 md:mb-6">
         Welcome to AK Auto&apos;s Empire
       </h1>
       <p className="text-lg md:text-xl text-accent mb-6 md:mb-8">
         Your Trusted Partner in Automotive Excellence
       </p>
       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
        <Link
        to='/inventory'
           href="#inventory"
           className="bg-accent text-primary px-6 py-2 md:px-8 md:py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
         >
           View Inventory
         </Link>
         <a
           href="#contact"
           className="border-2 border-accent text-accent px-6 py-2 md:px-8 md:py-3 rounded-full font-bold hover:bg-accent hover:text-primary transition-all"
         >
           Contact Us
         </a>
       </div>
     </div>
   </section>
 );


export default Hero