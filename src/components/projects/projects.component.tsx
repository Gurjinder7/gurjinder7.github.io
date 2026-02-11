import type { ProjectItem } from "../../utils/project"

const ProjectCard = ({ project }: { project:ProjectItem}) => {
    return (
        <li className="flex items-center font-bold my-5"><img src="/brief.svg" className='w-12 h-12 p-2 border-2 border-gray-900' alt="briefcase" />______________________________ {project.name} <a href={project.link} target='_blank'>
            <img src="/link.svg" className='w-6 h-6' alt="project link" />
        </a> </li>
    )
}

export default ProjectCard