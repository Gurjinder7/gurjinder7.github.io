import './App.css'
import { motion } from 'motion/react'
import { Activity, useState } from 'react';
import { educationList } from './utils/education';
import EducationCard from './components/education/EducationCard.component';
import { AdditionalSkills, BackendSkills, UISkills } from './utils/skill';
import Skills from './components/skills/skills.component';
import { ProjectList } from './utils/project';
import ProjectCard from './components/projects/projects.component';
import { LanguageList } from './utils/language';
import LanguageComponent from './components/language/LanguageCard.component';


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

            <div className="flex justify-center items-center pt-5">

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
            <motion.section>
                <p className='text-black font-semibold mt-5 text-lg text-center'>
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


                        <h1 className='my-3 text-4xl font-bold'>Gurjinder Singh</h1>
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


                        <h1 className='my-3 text-4xl font-bold'>Languages I work on...</h1>
                        <div className='flex justify-center gap-x-16 w-full'>
                            <ul>
                               {LanguageList.map(language => <LanguageComponent language={language} key={language.name} />)} 

                            </ul>

                        </div>

                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={closeModal}
                            whileHover={{ rotate: 360 }}>
                            <img src="/close.svg" alt="close" />
                        </motion.span>
                    </div>

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


                        <h1 className='my-3 text-4xl font-bold'>Projects I worked on...</h1>
                        <div className='flex justify-center gap-x-16 w-full'>
                            <ul>
                               {ProjectList.map(project => <ProjectCard key={project.name} project={project} />)}

                            </ul>

                        </div>

                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={closeModal}
                            whileHover={{ rotate: 360 }}>
                            <img src="/close.svg" alt="close" />
                        </motion.span>
                    </div>
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


                        <h1 className='my-3 text-4xl font-bold'>I am familiar with...</h1>
                        <div className='flex justify-center gap-x-16 w-full'>
                            <ul>
                                {UISkills.map(skillItem => <Skills key={skillItem.name} skill={skillItem} />)}

                            </ul>
                            <ul>

                                {AdditionalSkills.map(skillItem => <Skills key={skillItem.name} skill={skillItem} />)}
                            </ul>
                            <ul>

                                {BackendSkills.map(skillItem => <Skills key={skillItem.name} skill={skillItem} />)}

                            </ul>

                        </div>

                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={closeModal}
                            whileHover={{ rotate: 360 }}>
                            <img src="/close.svg" alt="close" />
                        </motion.span>
                    </div>

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


                        <h1 className='my-3 text-4xl font-bold'>Where I studied...</h1>
                        <div className='flex justify-center gap-x-16 w-full'>
                            <ul>
                                {educationList.map(education => <EducationCard key={education.name} education={education} />)}
                            </ul>
                        </div>

                        <motion.span className='w-15 fixed bottom-10 cursor-pointer' onClick={closeModal}
                            whileHover={{ rotate: 360 }}>
                            <img src="/close.svg" alt="" />
                        </motion.span>
                    </div>

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
