import { projectsList } from './data.js'
import { services } from './data.js'
import { skillsList } from './data.js'


//Nav
function select(link){
    let options = document.querySelectorAll("#links a");
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";
    options[4].className = "";
    options[5].className = "";
    link.className = "selected";

    // Menu hiddes once an option is selected when responsive
    let nav = document.getElementById("nav");
    nav.className = ""
}
function responsiveMenu(){
    let menu = document.getElementById("nav")
    if(menu.className === ""){
        menu.className = "responsive";
    }else{
        menu.className = "";
    }
}
let div1 = document.getElementById("skill");
function skill(){  
        for(let i=0;i < skillsList.length;i++){
            div1.innerHTML+=`
            <div class="info">
                <p class="skill-name"><span class="list"></span>${skillsList[i].lang}</p>
                <span class="percentage">${skillsList[i].percentage}</span>
            </div>
            <div class="bar">
                <div class="percentage${i+1}"></div>
            </div>
            </div>
        `
        }
    }
// SERVICES

let service = document.getElementById("service");
function servicesGetter(){     
    for(let i=0;i < services.length;i++){
        service.innerHTML+=`
        <div class="service">       
            <span class="icon"><i class="fa-solid fa-code"></i></span>
            <h4>${services[i].area}</h4>
            <hr>
            <ul class="services-tag">
                <li>${services[i].langs[0]}</li>
                <li>${services[i].langs[1]}</li>
                <li>${services[i].langs[2]}</li>
            </ul>
            <p>${services[i].seniority}</p>
        </div>          
        `
        }   
    }

// PORTFOLIO

let divProject = document.getElementById("projects")

function getProject(){
    for(let i= 0; i<projectsList.length;i++){
        divProject.innerHTML+=`
        <div class="project" >
            <div class="overlay"></div>
                <a href="${projectsList[i].siteLink}">
                <img src="${projectsList[i].imgLink}" alt="${projectsList[i].name}"></a>
                <div class="info">
                    <p>${projectsList[i].name}</p>
                    <p>${projectsList[i].description}</p>
                    <p><a href="${projectsList[i].siteLink}">Go Website</a></p>

                    <p><a href="${projectsList[i].repoLink}">Go Repository</a></p>
                
            </div>
        </div>
        `
    }
}


// Email sender
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_c4idrs6';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert("Hello it's Mario! thanks for reaching out to me!");
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
servicesGetter();
skill();
getProject();
