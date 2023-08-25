import Head from "next/head"; 
import {BsFillMoonStarsFill} from "react-icons/bs";
import Image from "next/image";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub
}  from  "react-icons/ai";
// import Image from "next/image";
import myPhoto from "../public/my-Photo.jpg"

import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import counsulting from "../public/consulting.png";
import web1  from "../public/web1.png";
import web2 from "../public/web1.png";
import web3 from "../public/web2.png";
import web4 from "../public/web3.png";
import web5 from "../public/web4.png";
import web6 from "../public/web5.png";
import {useState} from "react";



export default function Home() {
  const[darkMode,setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" :""}>
      <Head>
        <title>Demitri Marco Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900" >
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyed</h1>
            <ul className="flex items -center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>

              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8" href="#" >
                Resume</a></li>


            </ul>
          </nav>

          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Hengameh</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Full Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-gl mx-auto">Hi Im Hengameh.I am a full stack Developer.Join me below and lets get cracking!</p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>

          {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow -hidden md:h-96 md:w-96">
            <Image src={deved} alt="" layout="fill" objectFit="cover"/>
           

            

          </div> */}
  <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 mt-20 overflow-hidden md:h-96 md:w-96 circle-container">
  <Image src={myPhoto} alt="" layout="fill" objectFit="cover" />
</div>




        
        

        
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">My journey</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Since the begining of my journey as a Trainee full stack developer, I have done many project.
              <span className="text-teal-500"Appling for a job></span>
              I will start to apply for a job after I finish my finnal project.
              Thanks <span className="text-teal-500">CYF </span>to support and make my journey smooth.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">I will be the CYF volenteer after getting job.I offer from a wide rannge os services, including programing and teaching. </p>
            
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white" >
              <Image src={design} width={100} height={100} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elements designs suited for your design theory.</p>

              <h4> Design tools I use</h4>
              <p className="py-4 text-teal-600">Design</p>
              <p className="test-gray -800 py-1">Illustrator</p>
              <p className="test-gray -800 py-1">PhotoShop</p>
              <p className="test-gray -800 py-1">Figma</p>
            </div>
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10" >
              <Image src={counsulting} width={100} height={100}alt=""  />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elements designs suited for your design theory.</p>

              <h4> Design tools I use</h4>
              <p className="py-4 text-teal-600">Design</p>
              <p className="test-gray -800 py-1">Illustrator</p>
              <p className="test-gray -800 py-1">PhotoShop</p>
              <p className="test-gray -800 py-1">Figma</p>
            </div>
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10" >
              <Image src= {code} width={100} height={100}alt=""  />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elements designs suited for your design theory.</p>

              <h4> Design tools I use</h4>
              <p className="py-4 text-teal-600">Design</p>
              <p className="test-gray -800 py-1">Illustrator</p>
              <p className="test-gray -800 py-1">PhotoShop</p>
              <p className="test-gray -800 py-1">Figma</p>
            </div>

          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Since the begining of my journey as a Trainee full stack developer, I have done many project.
              <span className="text-teal-500"Appling for a job></span>
              I will start to apply for a job after I finish my finnal project.
              Thanks <span className="text-teal-500">CYF </span>to support and make my journey smooth.
            </p>
            <p className="text-md py-2 leading-8 text-gray-80">I will be the CYF volenteer after getting job.I offer from a wide rannge os services, including programing and teaching.
            </p>
            
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap" ></div>
          <div className="basis-1/3 flex-1">
            <Image src={web1}alt=""  className="rounded-lg object-cover"
             width={"100%"} 
             height={"100%"} 
             layout="responsive"/>
          </div>
          <div className="basis-1/3">
            <Image src= {web2}  alt="" className="rounded-lg object-cover" 
            width={"100%"} 
            height={"100%"} 
            layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web3}alt="" className="rounded-lg object-cover" 
            width={"100%"}
            height={"100%"} 
            layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web4}alt=""  className="rounded-lg object-cover"
             width={'100%'} 
             height={"100%"}
              layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web5} alt="" className="rounded-lg object-cover" 
            width={"100%"} 
            height={"100%"} 
            layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web6} alt="" className="rounded-lg object-cover"
            width={"100%"} 
            height={"100%"} 
            layout="responsive" />
          </div>

        </section>
      </main>
    </div>
  );
}
