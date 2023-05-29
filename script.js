arrow = document.getElementById("sidebarArrow");
main = document.querySelector('.main');
sidebar = document.querySelector('.sidebar');
hamburger = document.querySelector('.hamburger');
links = document.querySelector('.links');
about = document.querySelector('.about');
typing = document.querySelector('.typing');

let open = false;
let dark = true;

if(arrow)
{
    arrow.addEventListener('click', function()
    {
        if(open == false)
        {
            main.classList.add('mainShrink');
            sidebar.classList.add('sidebarGrow');
            hamburger.classList.add('rotate');
            open = true;
            main.classList.remove('mainGrow');
            sidebar.classList.remove('sidebarShrink');
            hamburger.classList.remove('reset');
        }
        else
        {
            main.classList.add('mainGrow');
            sidebar.classList.add('sidebarShrink');
            hamburger.classList.add('reset');
            open = false;
            main.classList.remove('mainShrink');
            sidebar.classList.remove('sidebarGrow');
            hamburger.classList.remove('rotate');
        }
    });
}

toggle = document.getElementById('toggleButton')
skills = document.getElementById('skills')
projects = document.getElementById('projects');
arrowImg = document.getElementById('arrowImg');

email = document.getElementById('email');
twitter = document.getElementById('twitter');
github = document.getElementById('github');
linkedin = document.getElementById('linkedin');

function darkMode()
{
    if(dark == true)
    {
        dark = false;
        toggle.src = "img/darkmode.png";
        skills.src = "img/skillsLight.png";
        projects.src = "img/projectsLight.png";
        arrowImg.src = "img/arrowLight.png"

        email.src = "img/emailLight.png";
        twitter.src = "img/twitterLight.png";
        github.src = "img/githubLight.png";
        linkedin.src = "img/linkedInLight.png";

        document.getElementById('tweet').style.color = "#000000";

    }
    else
    {
        dark = true;
        toggle.src = "img/lightmode.png";
        skills.src = "img/skills.png";
        projects.src = "img/projects.png";
        arrowImg.src = "img/arrow.png"

        email.src = "img/email.png";
        twitter.src = "img/twitter.png";
        github.src = "img/github.png";
        linkedin.src = "img/linkedin.png";

        document.getElementById('tweet').style.color = "#fffcdf";
    }

    main.classList.toggle('lightmode');
    sidebar.classList.toggle("sideLightMode");
    links.classList.toggle("linksLight");
    typing.classList.toggle("typingLight");
    about.classList.toggle('aboutLight');
}

const letters = "qwertyuiopasdfGhjklzxcvbnm"

document.querySelector('.girik').onmouseover = event => 
{

    iterations = 0
    const interval = setInterval(() => 
    {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => 
            {  
                if(index < iterations)
                {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1/3;
    }, 50)
}