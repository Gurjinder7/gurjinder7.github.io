import type { Education } from "../../utils/education"

const EducationCard = ({ education }: { education: Education }) => {
    return (
        <li className="flex flex-col items-center font-bold my-5"><img src={education.src} className='w-12 h-12 p-2 border-2 border-black' alt={education.alt} />
            <p className='text-lg'>{education.name}</p>
            <p>{education.uni}</p>
            <p className='font-normal'>{education.major}</p>
            <p className='font-normal'>{education.score}</p>
        </li>
    )
}

export default EducationCard