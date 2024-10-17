
const projectsJson = "json/projects.json";
const projectSelect = document.getElementById("projects-select");
const projectH1 = document.getElementById("title-projects");
const projectP = document.getElementById("about-project-p");
const tecnologiesContainer = document.getElementById("used-tecnologies");
const videoProject = document.getElementById("video-project");
const container = document.getElementsByClassName("container-section");
const buttonVisitPage = document.getElementById("button-visit-page-container");
let projects;
let currentProjectLink;

fetch(projectsJson)
    .then(response => {
        if (!response.ok){
            throw new Error('Error en la solicitud: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        addOptionsProjectSelect(data);
        projects = data;
        setHTML();
        console.log(projects);
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });

const addOptionsProjectSelect = (dataJson) =>{
    for (key in dataJson){
        if (dataJson.hasOwnProperty(key)) {
            const project = dataJson[key];
            const newOption = document.createElement("option");
            newOption.value = project.id;
            newOption.text = project.title;
            projectSelect.add(newOption);
        };
    }

    const localStorageProject = localStorage.getItem("project");
    projectSelect.value = localStorageProject;
    projectH1.innerHTML = dataJson[localStorageProject].title;

}

const setHTML = () =>{
    container[0].style.opacity = '0';
    projectH1.style.opacity = '0';

    setTimeout(function (){  
        const key = projectSelect.value;
        if (projects.hasOwnProperty(key)) {
            const project = projects[key];
            projectH1.innerHTML = project.title;
            projectP.innerHTML = project.description;
            currentProjectLink = project.link;
            tecnologiesContainer.innerHTML = '';
            for(keyArray in project.tecnologies){
                console.log(project.tecnologies[keyArray]);
                tecnologiesContainer.innerHTML += `<img class="img-tecno" src=${"img/" + project.tecnologies[keyArray]} alt="">`;
            }
        videoProject.setAttribute("src", project.video);
        container[0].style.opacity = '1';
        projectH1.style.opacity = '1';
    }
    }, 500);
    
    
};

projectSelect.addEventListener('change', () =>{
    setHTML();
});

buttonVisitPage.addEventListener('click', () =>{
    window.open(currentProjectLink)
});


