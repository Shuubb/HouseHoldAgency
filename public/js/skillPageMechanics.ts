
const skillBoxes = document.getElementById('skillBoxes')?.getElementsByTagName(`div`);


function skillBoxFloat(): void { 
    if(skillBoxes) {
        for(let i = 0; i < skillBoxes.length; i++) {
            let values = skillBoxes[i].getBoundingClientRect();
            let inViewPort = Math.round(window.innerHeight - values.bottom + skillBoxes[i].clientHeight/2);

            if(inViewPort > 0 && (inViewPort + skillBoxes[i].clientWidth) < window.innerWidth){
                if(i % 2 != 0)
                    skillBoxes[i].style.right = inViewPort/2 + 'px';
                else
                    skillBoxes[i].style.left = inViewPort/2 + 'px';
            }
        };
    };
};

addEventListener('scroll', skillBoxFloat);


