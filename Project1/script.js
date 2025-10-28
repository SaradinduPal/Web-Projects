window.addEventListener("load", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
});


function FirstPageAnimation(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:2,
        ease:Expo.easeInOut,  
    })
    .to(".boundingElement",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.2
    })
    .from("#heroFooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}

// function circleMouseFollow(){
//     window.addEventListener('mousemove',(details)=>{
//         // console.log(details.clientX,details.clientY); give x and y axis values according the page
//         document.querySelector("#miniCircle").style.transform= `translate(${details.clientX}px,${details.clientY}px)`;
//     })
// }

FirstPageAnimation();
// circleMouseFollow();