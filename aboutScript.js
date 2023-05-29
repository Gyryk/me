arrow = document.getElementById("sidebarArrow");
main = document.querySelector('.main');
sidebar = document.querySelector('.sidebar');
hamburger = document.querySelector('.hamburger');

document.querySelector('.skillLevels').classList.add('skillFade');

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
arrowImg = document.getElementById('arrowImg');
projects = document.getElementById('projects');
skill = document.getElementById('skillPic');

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
        arrowImg.src = "img/arrowLight.png"
        projects.src = "img/projectsLight.png";
        skill.src = "img/skillLevelsLight.png";

        email.src = "img/emailLight.png";
        twitter.src = "img/twitterLight.png";
        github.src = "img/githubLight.png";
        linkedin.src = "img/linkedInLight.png";
    }
    else
    {
        dark = true;
        toggle.src = "img/lightmode.png";
        arrowImg.src = "img/arrow.png"
        projects.src = "img/projects.png";
        skill.src = "img/skillLevels.png"

        email.src = "img/email.png";
        twitter.src = "img/twitter.png";
        github.src = "img/github.png";
        linkedin.src = "img/linkedin.png";
    }

    main.classList.toggle('lightmode');
    sidebar.classList.toggle("sideLightMode");
}
