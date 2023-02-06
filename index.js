// template Id template_4gsau8l
// service id service_hktt44g
// Account Id suWITkyfHjYIAkuII

// function contact(event) {
//     event.preventDefault();
//     console.log('it worked');
// }
let isModalOpen = false;
let contrastToggle = false;
 const scaleFactor = 1 / 20; // minimise the change

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i% 2 !== 0;
        const boolInteger = isOdd ? -1 : 1;
         shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px)`;
    }
    // // for (let i = 1; i < shapes.length; i+2) {
    // //     shapes[i].style.transform = `translate(${x * -1}px, ${y * -1}px)`
    // // }
}

function toggleContrast(event) {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal_overlay-loading');
    const sucess = document.querySelector('.modal_overlay-sucess');
    loading.classList += " modal_overlay-visible" 

    emailjs
    .sendForm(
        'service_hktt44g',
        'template_4gsau8l',
        event.target, 
        'suWITkyfHjYIAkuII'
    ).then(() => {
        loading.classList.remove("modal_overlay-visible");
        sucess.classList += " modal_overlay-visible";
    }).catch(() => {
        loading.classList.remove("modal_overlay-visible");
        alert(
            "The email service is temporily unavaialbe. Please contact me on my email:tonydahbar11@gmail.com"
        );
    }) 
}
function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
    return document.body.classList += " modal_open"; /* request to open the moal */
    }
    else {
         return document.body.classList.remove("modal_open");
    }
}