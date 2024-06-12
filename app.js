  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu'),
        navToggle= document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
/*======Menu show ======*/
  if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*=====Menu hidden=====*/
  if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const LinkAction=()=>{
    const navMenu =document.getElementById('nav-menu')
    // when we click on each nav-link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',LinkAction))

/*=============== ADD BLUR HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/