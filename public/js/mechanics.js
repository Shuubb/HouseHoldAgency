
//skillBoxes Floating mechanism
const skillBoxesPar = document.getElementById('skillBoxes');
const skillBoxes = skillBoxesPar.getElementsByTagName(`div`);

skillBoxFloat();

function skillBoxFloat() { 
    for(let i = 0; i < skillBoxes.length; i++) {
        let values = skillBoxes[i].getBoundingClientRect();
        let inViewPort = Math.round(window.innerHeight - values.bottom + skillBoxes[i].clientHeight/2);

        if(inViewPort > 0 && (inViewPort + skillBoxes[i].clientWidth) < window.innerWidth){
            if(skillBoxes[i].classList.contains(`right`))
                skillBoxes[i].style.right = inViewPort/2 + 'px';
            else
                skillBoxes[i].style.left = inViewPort/2 + 'px';
        }
    };
};

addEventListener('scroll', skillBoxFloat);