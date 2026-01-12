import './App.css'
import {motion, useTime, useTransform} from 'motion/react'

function App() {

    const time = useTime();
   const rotate = useTransform(time, [0, 4000],[ 0, 360], {clamp: false})

    const tinyBox = {
       width: 50,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 4,
        rotate: useTransform(() => rotate.get()*2)
    }
  return (
    <div >
        <div className='container'>
            <motion.div
                style={tinyBox}
                whileHover={{ scale: 4.1, opacity: 0 }}
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            />
        </div>

        <h2>New React based portfolio coming soon...</h2>

        <motion.section
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

        </motion.section>
    </div>
  )
}

export default App
