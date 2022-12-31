gsap.registerPlugin(ScrollTrigger);

let tl1 = gsap.timeline({
    scrollTrigger :{
        trigger:'.home',
        start:'0%',
        end:'80%',
        scrub: 1
    }
});
let tl2 = gsap.timeline({
    scrollTrigger :{
        trigger:'.home',
        start:'0%',
        end:'80%',
        scrub: 1,
    }
});
let tl4 = gsap.timeline({
    scrollTrigger :{
        trigger:'.home',
        start:'0%',
        end:'40%',
        scrub: 1,
    }
});
let tl8 = gsap.timeline({
    scrollTrigger :{
        trigger:'.home',
        start:'0%',
        end:'40%',
        scrub: 1,
    }
});
let tl5 = gsap.timeline({
    scrollTrigger :{
        trigger:'.home',
        start:'10%',
        end:'100%',
        scrub: 1,
    }
});
let tl6 = gsap.timeline({
    scrollTrigger :{
        trigger:'.s1',
        start:'10%',
        end:'100%',
        scrub: 1,
    }
});
let tl7 = gsap.timeline({
    scrollTrigger :{
        trigger:'.s1',
        start:'10%',
        end:'12%',
        scrub: 1,
    }
});

gsap.from('.navbar',{y:-100})

tl1.fromTo('.slide',{y: 0}, {y:-500});
tl2.fromTo('.title', { scale:6 } , { scale:1, top:'2rem',left:'3rem', x:"50%" , y:'50%'});
tl4.fromTo('.square2',{left:'65rem'},{left:'100rem',opacity:0})
tl8.fromTo('.square1',{right:'65rem'},{right:'100rem',opacity:0})
tl7.fromTo('.top h2',{opacity:1},{opacity:0})

tl5.fromTo('.top h2',{x:-1000},{x:0 })
tl6.fromTo('.down h2',{x:1000},{x:0})

let tl3 = gsap.timeline({
    scrollTrigger :{
        trigger:'.home',
        start:'0%',
        end:'200%',
        scrub: 1,
        pin:true,
        pinSpacing:false
    }
});
