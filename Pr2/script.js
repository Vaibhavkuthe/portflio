// Preloder
let Preloder = document.querySelector(".preloder");
setTimeout(()=>{
    Preloder.style.display = "none"
},2000)

//nav Scroll
let nav = document.querySelector(".top");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 60){
        nav.style.background = " rgb(29, 4, 35)";
    }
    else{
        nav.style.background = "none"
    }
})
let body = document.querySelector("body")
let cursor = document.querySelector(".cursor");
body.addEventListener("mousemove",(e)=>{
    cursor.style.top = (e.y + -9)+"px";
    cursor.style.left = (e.x-10)+"px";
    
});
let hovr = document.querySelectorAll(".hovr");
hovr.forEach((val)=>{
    val.addEventListener("mouseover",(vk)=>{
        cursor.style.backgroundColor=" rgba(218, 54, 213, 0)";
        cursor.style.height = " 80px";
        cursor.style.width = " 80px";
        cursor.style.border= " 2px solid rgb(255, 255, 255)"
        cursor.style.boxShadow = " 0px 0px 20px rgb(218, 54, 213)"
        body.addEventListener("mousemove",(e)=>{
            cursor.style.top = (e.y -40)+"px";
            cursor.style.left = (e.x-40)+"px";
            
        });
    })
    val.addEventListener("mouseout",()=>{
        cursor.style.backgroundColor= " rgb(218, 54, 213)";
        cursor.style.height = " 20px";
        cursor.style.width = " 20px";
        cursor.style.border= "none"
        cursor.style.boxShadow = " 0px 0px 0px rgb(218, 54, 213)"
        body.addEventListener("mousemove",(e)=>{
            cursor.style.top = (e.y + -9)+"px";
            cursor.style.left = (e.x-10)+"px";
        });
    })
})
//blink animation
let textElement = document.querySelector(".blink");
const fullText = " Telecom Student";
    let index = fullText.length;
    let isDeleting = true;
    const speed = 150;

    function animateText() {
      if (isDeleting) {
        textElement.textContent = fullText.substring(0, index) + "|";
        index--;
        if (index < 0) {
          isDeleting = false;
          index = 0;
          setTimeout(animateText, 1000); // pause before typing back
          return;
        }
      } else {
        textElement.textContent = fullText.substring(0, index) + "|";
        index++;
        if (index > fullText.length) {
          isDeleting = true;
          index = fullText.length;
          setTimeout(animateText, 1000); // pause before deleting again
          return;
        }
      }
      setTimeout(animateText, speed);
    }

    animateText();
//nav 

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");

a1.addEventListener("click",()=>{
    a1.style.color = " rgb(138, 77, 199)";
    a1.style.borderBottom = " 3px solid rgb(198, 130, 233)"
    a1.style.paddingBottom = " 5px";
   a2.style.color = "white";
   a2.style.borderBottom = " none"
    a2.style.paddingBottom = " 0px";
    a3.style.color = "white";
    a3.style.borderBottom = " none"
    a3.style.paddingBottom = " 0px";
    a4.style.color = "white";
    a4.style.borderBottom = " none"
    a4.style.paddingBottom = " 0px";
}
);
a2.addEventListener("click",()=>{
    a1.style.color = "white";
    a1.style.borderBottom = " none"
    a1.style.paddingBottom = " 0px";
    a2.style.color = " rgb(138, 77, 199)";
    a2.style.borderBottom = " 3px solid rgb(198, 130, 233)"
    a2.style.paddingBottom = " 5px";
    a3.style.color = "white";
    a3.style.borderBottom = " none"
    a3.style.paddingBottom = " 0px";
    a4.style.color = "white";
    a4.style.borderBottom = " none"
    a4.style.paddingBottom = " 0px";
});
a3.addEventListener("click",()=>{
    a1.style.color = "white";
    a1.style.borderBottom = " none"
    a1.style.paddingBottom = " 0px";
    a2.style.color = "white";
    a2.style.borderBottom = " none"
    a2.style.paddingBottom = " 0px";
    a3.style.color = " rgb(138, 77, 199)";
    a3.style.borderBottom = " 3px solid rgb(198, 130, 233)"
    a3.style.paddingBottom = " 5px";
    a4.style.color = "white";
    a4.style.borderBottom = " none"
    a4.style.paddingBottom = " 0px";
});
a4.addEventListener("click",()=>{
    a1.style.color = "white";
    a1.style.borderBottom = " none"
    a1.style.paddingBottom = " 0px";
    a2.style.color = "white";
    a2.style.borderBottom = " none"
    a2.style.paddingBottom = " 0px";
    a3.style.color = "white";
    a3.style.borderBottom = " none"
    a3.style.paddingBottom = " 0px";
    a4.style.color = " rgb(138, 77, 199)";
    a4.style.borderBottom = " 3px solid rgb(198, 130, 233)"
    a4.style.paddingBottom = " 5px";
});
//mobile nav
let mobnav = document.querySelector(".mobile-nav");
let close = document.querySelector(".x");
let menu = document.querySelector(".menu");
let cl = document.querySelectorAll(".cl")
let trans = document.querySelector(".trans")
close.addEventListener("click",()=>{
    mobnav.style.opacity = "0";
    mobnav.style.left = "-100%";
    menu.style.opacity = "1";
    trans.style.display = "none";
})
menu.addEventListener("click",()=>{
   mobnav.style.opacity = "1";
    mobnav.style.left = "0px";
    menu.style.opacity = "0";
    trans.style.display = "block";
});
cl.forEach((val)=>{
    val.addEventListener("click",()=>{
        mobnav.style.opacity = "0";
        mobnav.style.left = "-100%";
        menu.style.opacity = "1";
        trans.style.display = "none";
    })
})

window.addEventListener("click",(e)=>{
    if(e.target == mobnav){
        mobnav.style.opacity = "0";
        mobnav.style.left = "-100%";
        menu.style.opacity = "1";
        trans.style.display = "none";
    }
    if(e.target == trans){
        mobnav.style.opacity = "0";
        mobnav.style.left = "-100%";
        menu.style.opacity = "1";
        trans.style.display = "none"
    }
   
})
// window.addEventListener("click",(e)=>{
//     if(e.target != mobnav && mobnav.style.opacity === "1"){
//         mobnav.style.opacity = "0";
//         mobnav.style.left = "-100%";
//     }
// })
//option3

let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let ontent1 = document.querySelector(".content1");
let ontent2 = document.querySelector(".content2");  
let ontent3 = document.querySelector(".content3");

option1.addEventListener("click",()=>{
    ontent1.style.display = "none";
    ontent3.style.display = "none";
    ontent2.style.display = "flex";
    option1.style.backgroundColor = " rgb(138, 77, 199)";
    option1.style.color = "white"
    option2.style.backgroundColor = " rgba(255, 255, 255, 0)";
    option3.style.backgroundColor = " rgba(255, 255, 255, 0)";
   
})
option2.addEventListener("click",()=>{
    ontent1.style.display = "none";
    ontent3.style.display = "flex";
    ontent2.style.display = "none";
    option1.style.backgroundColor = " rgba(255, 255, 255, 0)";
    option2.style.backgroundColor = " rgb(138, 77, 199)";
    option3.style.backgroundColor = " rgba(255, 255, 255, 0)";
})
option3.addEventListener("click",()=>{
    ontent1.style.display = "flex";
    ontent3.style.display = "none";
    ontent2.style.display = "none";
    option1.style.backgroundColor = " rgba(255, 255, 255, 0)";
   
    option2.style.backgroundColor = " rgba(255, 255, 255, 0)";
    option3.style.backgroundColor = " rgb(138, 77, 199)";
})
// // contact 
// let sub = document.querySelector(".submit-btn");
// sub.addEventListener("click",()=>{
//     alert("fotm was filed")
// })

// Preloader and animation handling
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloder');
    const body = document.body;

    // Hide preloader after 2 seconds
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            // Add animate-content class to trigger animations
            body.classList.add('animate-content');
        },100); // Wait for opacity transition to complete
    }, 2000);
});

// Scroll animation for .s1 section
const s1Section = document.querySelector('.s1');

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    const sectionTop = s1Section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
        s1Section.classList.add('visible');
    }
}

// Initial check
checkScroll();

// Add scroll event listener
window.addEventListener('scroll', checkScroll);

// Scroll animation for .s3 section
const s3Section = document.querySelector('.s3');

function checkS3Scroll() {
    const triggerBottom = window.innerHeight * 0.8;
    const sectionTop = s3Section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
        s3Section.classList.add('visible');
    }
}

// Initial check
checkS3Scroll();

// Add scroll event listener
window.addEventListener('scroll', checkS3Scroll);

// Scroll animation for contact section
const contactLeft = document.querySelector('.contact-left');
const contactRight = document.querySelector('.contact-right');

function checkContactScroll() {
    const triggerBottom = window.innerHeight * 0.8;
    const contactLeftTop = contactLeft.getBoundingClientRect().top;
    const contactRightTop = contactRight.getBoundingClientRect().top;

    if (contactLeftTop < triggerBottom) {
        contactLeft.classList.add('visible');
    }
    if (contactRightTop < triggerBottom) {
        contactRight.classList.add('visible');
    }
}

// Initial check
checkContactScroll();

// Add scroll event listener
window.addEventListener('scroll', checkContactScroll);