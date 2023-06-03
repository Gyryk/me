darkCarry = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);
if(parseInt(darkCarry.substring(6, 7)) == 0) darkMode()

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interactable) => 
{
    const x = e.clientX - (trailer.offsetWidth / 2),
    y = e.clientY - (trailer.offsetHeight / 2);

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interactable ? 4 : 1})`
    }
    
    trailer.animate(keyframes, {
        duration: 500,
        fill: "forwards"
    })
}

const getTrailerImg = type => 
{
    switch(type)
    {
        case "link":
            return "img/link.png"
        case "info":
            return "img/info.png"
        default:
            return "img/arrowTrailer.png"
    }
}

window.onmousemove = ev => 
{
    const interact = ev.target.closest(".interactable"),
    interacting = interact !== null;

    const icon = document.getElementById("trailer-icon");

    animateTrailer(ev, interacting);

    trailer.dataset.type = interacting ? interact.dataset.type : "";

    if(interacting)
    {
        icon.src = getTrailerImg(interact.dataset.type);
    }
}

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
    if(dark)
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
        trailer.style.backgroundColor = "#111111"
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
        trailer.style.backgroundColor = "#fffcdf"
    }

    main.classList.toggle('lightmode');
    sidebar.classList.toggle("sideLightMode");
    links.classList.toggle("linksLight");
    typing.classList.toggle("typingLight");
    about.classList.toggle('aboutLight');
}

function aboutFunc()
{
    if(dark) window.location.href='https://gyryk.github.io/me/about.html';

    else
    {
        window.location.href='https://gyryk.github.io/me/about?dark=0'
    }
}

const symbols = "ぁぃぅぇぉかきくけこさしすせそたちってとなにぬねのはひふへほみむめもゃゅょらりるれろゎゐゑをんゔゕゖ゚ゝゟ゠ァィゥェォカキクコサスセソタチッテトナニヌネノハヒフヘホマミムメモャュョラリルレロヮヰヱヲヵヶヽヿ㍐"

window.onload = e =>
{
    i = 0
    const inter = setInterval(() => 
    {
        document.querySelector('.name').innerText = document.querySelector('.name').innerText.split("")
            .map((symbol, inx) => 
            {  
                if(inx < i)
                {
                    return document.querySelector('.name').dataset.og[inx];
                }

                return symbols[Math.floor(Math.random() * 102)]
            })
            .join("");

        if(i >= document.querySelector('.name').dataset.og.length) clearInterval(inter);

        i += 1/4;
    }, 30)

    document.querySelector('.name').innerText = "Hi, I'm Girik!"
}

const letters = "qwertyuiopasdfghjklzxcvbnm"

document.querySelector('.gamedev').onmouseover = event => 
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
    }, 40)
}

document.querySelector('.webdev').onmouseover = event => 
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

        iterations += 1/2;
    }, 50)
}

document.querySelector('.swe').onmouseover = event => 
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

        iterations += 1/2;
    }, 40)
}

// Could make this more individual
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            document.querySelector('.icon').classList.add("rightFade");
            document.querySelector('.titles').classList.add("topFade");
            document.querySelector('.infoText').classList.add("leftFade");
            document.querySelector('.buttons').classList.add("rightFade");
            // Have to fix topFade translation
        }
        // else
        // {
        //     document.querySelector('.icon').classList.replace("rightFade", "rightFadeOut");
        //     document.querySelector('.titles').classList.replace("topFade", "topFadeOut");
        //     document.querySelector('.infoText').classList.replace("leftFade", "leftFadeOut");
        //     document.querySelector('.buttons').classList.replace("rightFade", "rightFadeOut");
        //     // Have to make fade follow scroll instead of triggering animation
        // }
    })
})

observer.observe(document.querySelector('.mainInfo'))