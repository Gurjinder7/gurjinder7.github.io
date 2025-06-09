document.addEventListener('DOMContentLoaded', async () => {
    fetch('skills.json')
    .then(response => response.json())
    .then(data => {
      for (const grid of data) {
          insertDataIntoSkills(grid)
          
      }
      
    })

    await insertDataIntoExperience()
    await insertDataIntoProjects()
    await insertDataIntoEducation()
})

const insertDataIntoSkills = (grid) => {
    const gridDiv = document.getElementById(grid.name)
  
    for (const skill of grid.skill) {
           
            gridDiv.insertAdjacentHTML("beforeend", skillContainer(skill))
        }

  
}

const insertDataIntoExperience = () => {
    const experienceDiv = document.getElementById("experienceList")
    fetch('experience.json')
    .then(response => response.json())
    .then(data => {
    
        for (const experience of data) {
        experienceDiv.insertAdjacentHTML("beforeend",experienceContainer(experience))
    }
    })
}

const insertDataIntoProjects = () => {
  const projectsDiv = document.getElementById("projectList")
  fetch('projects.json')
  .then(response => response.json())
  .then(data => {

    for (const project of data) {
      projectsDiv.insertAdjacentHTML("beforeend", projectContainer(project))
    }
  })

}


const insertDataIntoEducation = () => {
  const projectsDiv = document.getElementById("educationList")
  fetch('education.json')
  .then(response => response.json())
  .then(data => {

    for (const education of data) {
      projectsDiv.insertAdjacentHTML("beforeend", educationContainer(education))
    }
  })

}
const skillContainer = (skill) => {
    return `
         <div class="card text-center bg-light exp-card">
                    <img src=${"./web-tech/"+skill.url} width="50px" class="card-img-top w-50 m-auto my-2" alt="...">
                    <div class="card-body p-0">
                      <p class="card-text font-semibold fs-6">${skill.title}</p>
                    </div>
                  
         </div>
    `
}

const experienceContainer = (experience) => {
    return `
          <div class="container ${experience.style}">
                <div class="content">
                  <h2 class="codystar-regular">${experience.title}</h2>
                  <ul>
                    <li>${experience.keywords[0]}</li>
                    <li>${experience.keywords[1]}</li>
                    <li>${experience.keywords[2]}</li>
                  </ul>
                  <p>${experience.description}</p>
                </div>
              </div>
    `
}

const projectContainer = (project) => {
  return `
        <div class="card2 p-3 mb-5 text-start bg-light">
              <h1 class="kavoon-regular fs-2">${project.name}</h1>
              <h2 class="the-girl-next-door-regular fs-3">${project.timeline}</h2>

              <h3 class="fs-5"><span>Type: </span> ${project.type}</h3>
              <h3 class="fs-5"><span>Overview: </span> ${project.overview} </h3>
              <h3 class="fs-5"><span>Stack:</span> ${project.stack}</h3>
              <h3 class="fs-5"><span>Tools:</span> ${project.tools}</h3>

              <ul>
                <li>${project.description[0]}</li>
                <li>${project.description[1]}</li>
                <li>${project.description[2]}</li>
                <li>${project.description[3]}</li>
                ${project.description[4] ? `<li>${project.description[4]}</li>`: ''}
                ${project.description[5] ? `<li>${project.description[5]}</li>` :''}

              </ul>
            </div>
  `
}


const educationContainer = (education) => {
  return `
    <div class="card p-3 my-3 text-center bg-light">
              <h1 class="kavoon-regular fs-2">${education.title}</h1>
              <h2 class="the-girl-next-door-regular fs-3">${education.subject}</h2>
              <h2 class="raleway-font1 fs-5">${education.uni}</h2>
              <p class="justify">${education.description}</p>
              <p class="kavoon-regular">${education.keywords}</p>
            </div>
  `
}

/*
  <div class="progress" style="height: 5px;">
                      <div class="progress-bar bg-slateblue" style="width :${skill.score}%" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
*/