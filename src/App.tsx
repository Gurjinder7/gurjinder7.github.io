import './App.css'
import { motion, useTime, useTransform } from 'motion/react'
import Skills from "./skills/skills.tsx";
import { Activity, useState } from 'react';


function App() {

    const [showTheDialog, setShowTheDialog] = useState(false)
    const [showBasicInfoDialog, setShowBasicInfoDialog] = useState(false)
    const [showMap, setShowMap] = useState(false)
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false })

    const tinyBox = {
        //    width: 50,
        // height: 50,f
        backgroundColor: 'gainsboro',
        borderRadius: 4,
        // padding: '1rem'
        // rotate: useTransform(() => rotate.get()*2)
    }

    const coreSkill = [
        "javascript",
        "typescript",
        "golang",
        "python",
        "html5",
        "css3",
    ]

    const showClick = () => {
        alert('hey')
    }
    return (
        <div className='relative h-screen'>
            <div className='container'>
                {/* <p className='text-4xl font-bold'>Gurjinder Singh</p> */}
          
                {/* <motion.div
                    style={tinyBox}
                    whileHover={{ scale: 1.5, rotate: 0 }}
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],

                    }}
                    className='p-4 w-25 fixed bottom-20'
                    onClick={() => setShowTheDialog(!showTheDialog)}
                >What I do!</motion.div> */}
            </div>

            {/*<h2>New React based portfolio coming soon...</h2>*/}
            {/*<motion.h2*/}
            {/*transition={{type:"spring", duration:2}}*/}
            {/*animate={{rotateY: 90}}>I work with....</motion.h2>*/}


            {/* <hr /> */}

            {/*<Skills skillName="angular"/>*/}
            {/* <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{
                    scale: [0, 1]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 1],


                }}
                className='my-3'
                style={{
                    // height: '100vh'
                }}>
                <p>
                    A frontend developer with the intention of making products that contribute to society. Really into making challenging UI, very much interested in concurring backend with Go. Trying to create a few products that can introduce transparency and trust in social causes.
                </p>
            </motion.section> */}

            
            {/* <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{
                    scale: [0, 1]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 1],


                }}
                >
                    <h1>Am I suitable for the job, let's find out!</h1>
            </motion.section> */}

            <div className="flex justify-center items-center">
               

                <img className='w-[600px] h-[600px] cursor-not-allowed' src="/mandala1.png" alt="asdasd" useMap='#workmap' />

                <map name="workmap">
  <area shape="circle" coords="420,400,30" 
  onClick={() => showClick()}
   />
     <area shape="circle" coords="300,300,30" 
  onClick={() => setShowBasicInfoDialog(true)}
   />
   <area shape="circle" coords="460,140,40" 
  onClick={() => showClick()}
   />
    <area shape="circle" coords="220,170,30" 
  onClick={() => showClick()}
   />
    <area shape="circle" coords="150,440,40" 
  onClick={() => showClick()}
   />
</map>

            </div>
            {/* <motion.section
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "none" }}

        >
            <p  className='read-the-docs'>

                Previous one was a simple HTML page
            <motion.span
                animate={{
                    opacity: [1, 0.7, 0.5, 0.3, 0],
                }}
            transition={{
                repeat: Infinity,
                duration: 3,
                times: [0, 0.3, 0.5, 0.8, 1],
                repeatDelay:2
            }}>......OOPS!</motion.span>
            </p>

        </motion.section> */}

            <Activity mode={showBasicInfoDialog ? 'visible' : 'hidden'}>
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{
                        scale: [0, 1]
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        times: [0, 1],


                    }}
                    className='fixed top-0 left-0  z-10 bg-zinc-50 h-screen w-screen flex flex-col justify-center  items-center'>
                        <div className='w-1/2 flex flex-col items-center'>


                    <h1 className='my-3'>Gurjinder Singh</h1>
                    <div className='flex justify-center gap-x-16 w-full'>

                    <motion.a className='flex gap-3 p-2 border-2 border-teal-800'
                        whileHover={{ scale: 3.1 }}
                        animate={{
                            rotate: [270, 90, 0]
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            // repeat: 1
                        }}
                        href="https://linkedin.com/in/gurjinder7" target='_blank'
                        >
                        <img className="w-6" src="../web-tech/linkedin.svg" alt="" />
                        {/* <a href='https://github.com/gurjinder7' target='_blank'><img className="w-6 bg-black" src='../web-tech/github.svg' /></a> */}

                    </motion.a>
                    <motion.a className='flex gap-3 p-2 border-2 border-gray-500 shadow'
                        whileHover={{ scale: 3.1 }}
                        animate={{
                            rotate: [360, 180, 0]
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            // repeat: 1
                        }}
                        href='https://github.com/gurjinder7' target='_blank'
                        
                        >

                        <img className="w-6 bg-black" src='../web-tech/github.svg' />

                    </motion.a>
                        </div>

                    
                    <p className='text-justify my-3'>
                    A frontend developer with the intention of making products that contribute to society. Really into making challenging UI, very much interested in concurring backend with Go. Trying to create a few products that can introduce transparency and trust in social causes.
                </p>
                 
                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={() => setShowBasicInfoDialog(false)}
                            whileHover={{rotate: 360}}>
                            <img src="/close.svg" alt="" />
                        </motion.span>
                </div>
                    {/* <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Go</li>
                        <li>Python</li>
                        <li></li>
                    </ul> */}
                    {/* <motion.section className="skillContainer max-sm:flex-col max-sm:flex-wrap"
                        transition={{ type: "spring", bounce: 2.25, duration: 2.2 }}
                        animate={{ rotateX: 360 }}
                    >
                        {coreSkill.map((item: string) => (
                            <Skills skillName={item} />
                        ))}
                    </motion.section> */}
                </motion.section>
            </Activity>

            <motion.div
                    // style={tinyBox}
                    // initial={{top:0, left:0}}
                    // whileHover={{ scale: 1.5, rotate: 0 }}
                    // animate={{
                    //     scale: [1, 2, 2, 1, 1],
                    //     rotate: [0, 0, 180, 180, 0],
                    //     borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    // }}
                    // transition={{
                    //     duration: 0.7,
                    //     ease: "easeInOut",
                    //     times: [0, 0.2, 0.5, 0.8, 1],

                    // }}
                    className='p-4 right-0 fixed bottom-0 cursor-pointer'
                    // onClick={() => setShowTheDialog(!showTheDialog)}
                    onMouseOver={() => setShowMap(true)}
                    onMouseLeave={() => setShowMap(false)}
                ><img src="/map.svg" className="w-12" alt="" /> 
            </motion.div>

            <Activity mode={showMap ? 'visible' : 'hidden'}>
                    <div className='fixed top-0 left-0 w-1/2 p-3' >
                        <img src="/mandala1 copy.png" className="w-2/4 h-2/4" alt="" />
                    </div>
            </Activity>
                   
            <div className='max-sm: block sm:hidden'>
                        <p>Sorry, you need to either rotate or a bigger screen.</p>
            </div>
                   
                        </div>

                        
    )
}

export default App
