import * as motion from "motion/react-client"


const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
}

const imgClass = {
    width: '30px',
    height: '30px',
}

const Skills = ({skillName}: {skillName:string}) => {
    return (
        <motion.div
            style={ball}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                // repeat: Infinity,
            }}
        >
            <img src={`../../web-tech/${skillName}.svg`} className="imgClass" alt=""/>
        </motion.div>
    )
}

const ball = {
    width: 100,
    height: 100,
    borderRadius: "50%",
    background: "gainsboro",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow:"10px 10px 10px 2px silver"
}

export default Skills