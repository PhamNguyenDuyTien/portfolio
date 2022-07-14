// ============= Skills =============== //
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const footerInput = document.querySelector(".footer-input");
const menubar = document.querySelector(".menu-bar");
const navnbar = document.querySelector("nav");
const headerNavs = document.querySelectorAll(".header-nav a");
const btnWatches = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const tabCloses = document.querySelectorAll('.card-close');

btnWatches.forEach(btnWatch => {
    btnWatch.addEventListener('click', () => {
        const target = document.querySelector(btnWatch.dataset.tabTarget);
        tabCloses.forEach(tabClose => {
            tabClose.addEventListener('click', () => {
                target.classList.remove('active');
            });
        });                
        target.classList.add('active');
    })
});
// Make animation of skill bars

window.addEventListener("scroll", () => {
    skillsEffect();
});

checkScroll = (el) =>{
    let rect = el.getBoundingClientRect();
    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}
  
skillsEffect = () =>{
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

// Change background of footer input
footerInput.addEventListener("focus", () =>{
    footerInput.classList.add("focus");
})
footerInput.addEventListener("blur", () =>{
    if(footerInput.value != "") return;
    footerInput.classList.remove("focus");
})

// Menu bar

closeMenu = () =>{
    navnbar.classList.remove("open");
    document.body.classList.remove("stop-scroll");
}

menubar.addEventListener("click", () =>{
    if(!navnbar.classList.contains("open")){
        navnbar.classList.add("open");
        document.body.classList.add("stop-scroll");
    }
    else{
        closeMenu();
    }
})

headerNavs.forEach(headerNav => headerNav.addEventListener("click", () => closeMenu()))
