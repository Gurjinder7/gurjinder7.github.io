export const educationList = [
    {
        src:"/uea.webp",
        alt:"UEA logo",
        name:"Master's of Science",
        uni:"University of East Anglia, Norwich, United Kingdom",
        major:"Advanced Computing Science",
        score:"4.0 GPA"
    },
    {
        src:"/nit.webp",
        alt:"NIT logo",
        name:"Master's of Technology",
        uni:"Dr. B. R. Ambedkar National University of Technology, Jalandhar, India",
        major:"Electronics and Communication Engineering",
        score:"8.22 CGPA"
    },
    {
        src:"/ptu.webp",
        alt:"PTU logo",
        name:"Bachelor's of Technology",
        uni:"Punjab Technical University, Jalandhar, India",
        major:"Electronics and Communication Engineering",
        score:"8.35 CGPA"
    }
]

export type Education = {
    src:string;
    alt:string;
    name:string;
    uni:string;
    major:string;
    score:string
}