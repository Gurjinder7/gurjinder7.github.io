import type { Language } from "../../utils/language"

export const LanguageComponent = ({language}:{language:Language}) => {
    return (
         <li className="flex items-center font-bold my-5"><img src={language.src} className={`w-12 h-12 p-2 border-2 ${language.style}`} alt={language.alt} />______________________________ {language.name}</li>
    )
}

export default LanguageComponent