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
const scrollHeader =()=>{
    const header= document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact_form'),
      contactMessage=document.getElementById('contact_message')

  constsendEmail =(e)=>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendEmail('service_ik7yps3','template_hkcu4mg','#contact_form','9MTlMnQGq9vn3tFYg')
        .then(()=>{
          //Show sent message
          contactMessage.textContent = 'Message sent successfully V'

          // Remove message after five  second
          setTimeout(()=>{
            contactMessage.textContent =''
          }, 5000)

          // Clear input fields
          contactForm.reset()
        }, () =>{
          //Show error message
          contactMessage.textContent ='Message not sent  (Service erro) X'
        
        })
  }
  contactForm,addEventListener('submit',sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =() =>{
  const scrollUp = document.getElementById('scroll-up')
  //when the scroll is higher than  350 viewport hight , add the
  this.scrollY >= 350 ? scrollUp.classList.add('show-sroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive =()=>{
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId +']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/