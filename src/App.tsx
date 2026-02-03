import './App.css'
import { motion} from 'motion/react'
import { Activity, useState } from 'react';


function App() {

    const [showBasicInfoDialog, setShowBasicInfoDialog] = useState(false);
    const [showProgrammingDialog, setShowProgrammingDialog] = useState(false);
    const [showProjectsDialog, setShowProjectsDialog] = useState(false)
    const [showEducationDialog, setShowEducationDialog] = useState(false)
    const [showTechnologyDialog, setShowTechnologyDialog] = useState(false)

    const [showMap, setShowMap] = useState(false)
    
    const closeModal = () => {
        setShowBasicInfoDialog(false)
        setShowProgrammingDialog(false)
        setShowProjectsDialog(false)
        setShowEducationDialog(false)
        setShowTechnologyDialog(false)
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
                        onClick={() => setShowProgrammingDialog(true)}
                    />
                    <area shape="circle" coords="300,300,30"
                        onClick={() => setShowBasicInfoDialog(true)}
                    />
                    <area shape="circle" coords="470,150,30"
                        onClick={() => setShowProjectsDialog(true)}
                    />
                    <area shape="circle" coords="220,170,30"
                        onClick={() => setShowTechnologyDialog(true)}
                    />
                    <area shape="circle" coords="150,440,40"
                        onClick={() => setShowEducationDialog(true)}
                    />
                </map>

            </div>
            <motion.section
            // initial={{ filter: "blur(10px)" }}
            // animate={{ filter: "none" }}

            >
                <p className='text-black font-semibold mt-5 text-lg'>
                    <motion.span
                        animate={{
                            opacity: [1, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                            times: [1, 0.8, 0.5, 0.3, 0],
                            repeatDelay: 3
                        }}>Hover to treasure map if you are lost!</motion.span>
                </p>

            </motion.section>

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
                                <img className="w-6" src="/linkedin.svg" alt="linkedin" />
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

                                <img className="w-6 bg-black" src='/github.svg' />

                            </motion.a>
                              <motion.a className='flex gap-3 p-2 border-2 border-red-700 shadow'
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
                                href='https://www.npmjs.com/~gurjinder7' target='_blank'

                            >

                                <img className="w-6 bg-black" src='/npm.svg' />

                            </motion.a>
                        </div>


                        <p className='text-justify my-3'>
                            A frontend developer with the intention of making products that contribute to society. Really into making challenging UI, very much interested in concurring backend with Go. Trying to create a few products that can introduce transparency and trust in social causes.
                        </p>

                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={() => setShowBasicInfoDialog(false)}
                            whileHover={{ rotate: 360 }}>
                            <img src="/close.svg" alt="close" />
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

            <Activity mode={showProgrammingDialog ? 'visible' : 'hidden'}>
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


                        <h1 className='my-3'>Languages I work on...</h1>
                        <div className='flex justify-center gap-x-16 w-full'>
                            <ul>
                                <li className="flex items-center font-bold my-5"><img src="/javascript.svg" className='w-12 h-12 p-2 border-2 border-yellow-300' alt="javascript" />______________________________ JavaScript</li>
                                <li className="flex items-center font-bold my-5"><img src="/typescript.svg" className='w-12 h-12 p-2 border-2 border-blue-500' alt="typescript" />______________________________ TypeScript</li>
                                <li className="flex items-center font-bold my-5"><img src="/golang.svg" className='w-12 h-12 p-2 border-2 border-cyan-300' alt="go" />______________________________ Go</li>
                                <li className="flex items-center font-bold my-5"><img src="/python.svg" className='w-12 h-12 p-2 border-2 border-yellow-300' alt="Python" />______________________________ Python</li>
                                <li className="flex items-center font-bold my-5"><img src="/html5.svg" className='w-12 h-12 p-2 border-2 border-orange-500' alt="HTML" />______________________________ HTML5</li>
                                <li className="flex items-center font-bold my-5"><img src="/css3.svg" className='w-12 h-12 p-2 border-2 border-blue-300' alt="CSS" />______________________________ CSS3</li>

                            </ul>

                        </div>

                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={closeModal}
                            whileHover={{ rotate: 360 }}>
                            <img src="/close.svg" alt="close" />
                        </motion.span>
                    </div>

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

            <Activity mode={showProjectsDialog ? 'visible' : 'hidden'}>
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


                        <h1 className='my-3'>Projects I worked on...</h1>
                        <div className='flex justify-center gap-x-16 w-full'>
                            <ul>
                                <li className="flex items-center font-bold my-5"><img src="/brief.svg" className='w-12 h-12 p-2 border-2 border-gray-900' alt="briefcase" />______________________________ Blu.com <a href="https://blu.com" target='_blank'>
                                    <img src="/link.svg" className='w-6 h-6' alt="project link" />
                                </a> </li>
                                <li className="flex items-center font-bold my-5"><img src="/brief.svg" className='w-12 h-12 p-2 border-2 border-gray-900' alt="briefcase" />______________________________ CSG SingleView <a href="https://www.csgi.com/products/singleview/" target='_blank'>
                                    <img src="/link.svg" className='w-6 h-6' alt="project link" />
                                </a> </li>
                                <li className="flex items-center font-bold my-5"><img src="/brief.svg" className='w-12 h-12 p-2 border-2 border-gray-900' alt="briefcase" />______________________________ Edustoke.com <a href="https://www.edustoke.com/" target='_blank'>
                                    <img src="/link.svg" className='w-6 h-6' alt="project link" />
                                </a> </li>
                                <li className="flex items-center font-bold my-5"><img src="/brief.svg" className='w-12 h-12 p-2 border-2 border-gray-900' alt="briefcase" />______________________________ Goldwise UK <a href="https://www.goldwise.com/" target='_blank'>
                                    <img src="/link.svg" className='w-6 h-6' alt="project link" />
                                </a> </li>
                                <li className="flex items-center font-bold my-5"><img src="/brief.svg" className='w-12 h-12 p-2 border-2 border-gray-900' alt="briefcase" />______________________________ Vault Student Loans Benefits <a href="https://www.meetsummer.com/" target='_blank'>
                                    <img src="/link.svg" className='w-6 h-6' alt="project link" />
                                </a> </li>
                                <li className="flex items-center font-bold my-5"><img src="/brief.svg" className='w-12 h-12 p-2 border-2 border-gray-900' alt="briefcase" />______________________________ Pulze.com <a href="https://www.pulze.com/" target='_blank'>
                                    <img src="/link.svg" className='w-6 h-6' alt="project link" />
                                </a> </li>

                            </ul>

                        </div>

                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={closeModal}
                            whileHover={{ rotate: 360 }}>
                            <img src="/close.svg" alt="close" />
                        </motion.span>
                    </div>

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

            <Activity mode={showTechnologyDialog ? 'visible' : 'hidden'}>
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


                        <h1 className='my-3'>Stack I am familiar with...</h1>
                        <div className='flex justify-center gap-x-16 w-full'>
                            <ul>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/react.svg" className='w-12 h-12 p-2 bg-black border-2 border-black' alt="javascript" />React</li>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/nextjs.svg" className='w-12 h-12 p-2 bg-black border-2 border-black' alt="typescript" />Next.js</li>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/angular.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Angular</li>
                              
                              
                         
                                     <li className="flex flex-col items-center font-bold my-5"><img src="/tailwind.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Tailwind CSS</li>
                                                   <li className="flex flex-col items-center font-bold my-5"><img src="/material.svg" className='w-12 h-12 p-2 bg-black border-2 border-black' alt="javascript" />Material UI</li>
                                                    <li className="flex flex-col items-center font-bold my-5"><img src="/redux.svg" className='w-12 h-12 p-2 bg-black border-2 border-black' alt="typescript" />Redux</li>

                            </ul>
                            <ul>
                                  <li className="flex flex-col items-center font-bold my-5"><img src="/nodejs.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Node</li>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/mongodb.svg" className='w-12 h-12 p-2 bg-black border-2 border-black' alt="javascript" />MongoDB</li>
                                       <li className="flex flex-col items-center font-bold my-5"><img src="postgresql.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />PostgreSQL</li>
                               
                                <li className="flex flex-col items-center font-bold my-5"><img src="/sass.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Sass</li>
                           
                                <li className="flex flex-col items-center font-bold my-5"><img src="/storybook.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Storybook</li>

                            </ul>
                            <ul>
                  
                                <li className="flex flex-col items-center font-bold my-5"><img src="/jest.svg" className='w-12 h-12 p-2 bg-black border-2 border-black' alt="typescript" />Jest</li>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/cypress.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Cypress</li>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/prisma.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Prisma</li>
                                  <li className="flex flex-col items-center font-bold my-5"><img src="/git.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Git</li>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/docker.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Docker</li>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/linux.svg" className='w-12 h-12 p-2 border-2 bg-black border-black' alt="go" />Linux</li>


                            </ul>

                        </div>

                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={closeModal}
                            whileHover={{ rotate: 360 }}>
                            <img src="/close.svg" alt="close" />
                        </motion.span>
                    </div>

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

               <Activity mode={showEducationDialog ? 'visible' : 'hidden'}>
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


                        <h1 className='my-3'>Where I studied...</h1>
                        <div className='flex justify-center gap-x-16 w-full'>
                            <ul>
                                <li className="flex flex-col items-center font-bold my-5">
                                    <img src="/uea.webp" className='w-12 h-12 p-2 border-2  border-black' alt="UEA logo" />
                                    <p className='text-lg'>Masters of Science</p>
                                    <p>University of East Anglia, Norwich, United Kingdom</p>
                                    <p className='font-normal'>Advanced Computing Science</p>
                                    <p className='font-normal'>4.0 GPA</p>
                                    </li>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/nit.webp" className='w-12 h-12 p-2 border-2 border-blue-500' alt="NIT logo" />
                                 <p className='text-lg'>Master's of Technology</p>
                                    <p>Dr. B. R. Ambedkar National University of Technology, Jalandhar, India</p>
                                    

                                    <p className='font-normal'>Electronics and Communication Engineering</p>
                                    <p className='font-normal'>8.22 CGPA</p>
                                </li>
                                <li className="flex flex-col items-center font-bold my-5"><img src="/ptu.webp" className='w-12 h-12 p-2 border-2 border-cyan-300' alt="PTU logo" />
                                 <p className='text-lg'>Bachelor's of Technology</p>
                                    <p>Punjab Technical University, Jalandhar, India</p>
                                    

                                    <p className='font-normal'>Electronics and Communication Engineering</p>
                                    <p className='font-normal'>8.35 CGPA</p></li>
                         

                            </ul>

                        </div>

                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={closeModal}
                            whileHover={{ rotate: 360 }}>
                            <img src="/close.svg" alt="" />
                        </motion.span>
                    </div>

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
                className='p-4 right-0 fixed bottom-0 cursor-pointer'
                onMouseOver={() => setShowMap(true)}
                onMouseLeave={() => setShowMap(false)}
            ><img src="/map.svg" className="w-12" alt="map" />
            </motion.div>

            <Activity mode={showMap ? 'visible' : 'hidden'}>
                <div className='fixed top-0 left-0 w-1/2 p-3' >
                    <img src="/mandala1 copy.png" className="w-2/4 h-2/4" alt="treasure map" />
                </div>
            </Activity>

            <div className='max-sm: block sm:hidden'>
                <p>Sorry, you need to either rotate or a bigger screen.</p>
            </div>

        </div>


    )
}

export default App
