// // document.getaddEventListener("click", function (this) {
// //     console.log(this.getAttribute('class'));
// // })
// document.querySelector("#Products").addEventListener("click", function (event) {
//     var get_classname = event.target.className;
//     console.log(get_classname);
//     if (get_classname == "First-slide") {
//         document.querySelector(".first").classList.remove("close");
//         document.querySelector(".cancel").addEventListener("click", function () {
//             document.querySelector(".first").classList.add("close");
//         })
//     }
//     if (get_classname == "second-slide") {
//         document.querySelector(".second").classList.remove("close");

//         document.querySelector(".cancel").addEventListener("click", function () {
//             document.querySelector(".first").classList.add("close");
//         })
//     }



// })

var loader = document.querySelector('.loading');
window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector("body").fadeOut();
})


const tl = gsap.timeline({ defaults: { duration: 1, ease: "back.out(1.7)" } })
tl.fromTo('.animate-button', { scale: 0.7 }, { scale: 1, ease: "back.out(1.7)", repeat: -1 })
gsap.fromTo('.Title-Div1', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: "back.out(1.7)", duration: 1.5 })
gsap.fromTo('.header-info', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: "back.out(1.7)", duration: 0.7 }, '<50%')

gsap.fromTo('.heading-products', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: "back.out(1.7)", duration: 0.7 })
document.querySelector(".Title-Div1").addEventListener("wheel", function () {
    gsap.fromTo('.heading-products', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: "back.out(1.7)", duration: 0.7 })
    gsap.fromTo('.heading-paragraph', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: "back.out(1.7)", duration: 0.7 }, "<60%")
    gsap.fromTo('.our-story', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: "back.out(1.7)", duration: 0.7 }, "<60%")
    gsap.fromTo('.story', { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: "back.out(1.7)", duration: 0.7 }, "<40%")
    gsap.fromTo('.offers', { opacity: 0, x: 100 }, { opacity: 1, x: 0, ease: "back.out(1.7)", duration: 0.7 }, "<60%")
})
document.querySelector(".our-story").addEventListener("wheel", function () {
    gsap.fromTo('.heading-1', { opacity: 0, y: -100 }, { opacity: 1, y: 0, ease: "back.out(1.7)", duration: 0.7 })
})
document.querySelector(".carousel").addEventListener("wheel", function () {
    gsap.fromTo('.submit-paragraph', { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: "back.out(1.7)", duration: 0.7 })
    gsap.fromTo('.input-form', { opacity: 0, x: 100 }, { opacity: 1, x: 0, ease: "back.out(1.7)", duration: 0.7 }, "<60%")
})
document.querySelector(".pricing").addEventListener("wheel", function () {
    gsap.fromTo('.pricing-header', { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: "back.out(1.7)", duration: 0.7 })
    gsap.fromTo('.pricing-paragraph-1', { opacity: 0, x: 100 }, { opacity: 1, x: 0, ease: "back.out(1.7)", duration: 0.7 }, "<50%")
    gsap.fromTo('.test', { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: "back.out(1.7)", duration: 0.7 }, "<50%")
})



