export const LanguageList:Language[] = [
    {
        src:"/javascript.svg",
        alt:"javascript logo",
        style:"border-yellow-300",
        name:"JavaScript"
    },
    {
        src:"/typescript.svg",
        alt:"TypeScript logo",
        style:"border-blue-500",
        name:"TypeScript"
    },
    {
        src:"/golang.svg",
        alt:"Go logo",
        style:"border-cyan-300",
        name:"Go"
    },
    {
        src:"/python.svg",
        alt:"Python logo",
        style:"border-yellow-300",
        name:"Python"
    },
    {
        src:"/html5.svg",
        alt:"HTML logo",
        style:"border-orange-500",
        name:"HTML5"
    },
    {
        src:"/css3.svg",
        alt:"CSS logo",
        style:"border-blue-300",
        name:"CSS3"
    },
]

export type Language = {
    src:string;
    alt:string;
    style:string;
    name:string;
}