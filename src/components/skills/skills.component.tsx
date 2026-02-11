import type { SkillItem } from "../../utils/skill"

const Skills = ({skill}: {skill:SkillItem}) => {
    return (
        <li className="flex flex-col items-center font-bold my-5"><img src={skill.src} className='w-12 h-12 p-2 bg-black border-2 border-black' alt={skill.alt} />{skill.name}</li>
    )
}

export default Skills