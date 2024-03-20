gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


gsap.from("#nav #navleft a",{
    y:100,
    duration:1,
    delay:1,
    opacity:0
})

gsap.from("#navleft img",{
    scale:100,
    opacity:0,
    duration:1,
    delay:1
})

gsap.from("#signupleft h2",{
    x:-100,
    opacity:0,
    duration:1,
    delay:2
})

gsap.from("#menu img",{
    scale:0,
    opacity:0,
    delay:1,
    duration:1
})

gsap.from("#curations h2",{
    y:100,
    opacity:0,
    delay:2,
    duration:1
})

gsap.from(".offrbox",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".offrbox",
        scroller:"#main"

    }
})

gsap.from("#page2  h2",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2  h2",
        scroller:"#main"

    }
})

gsap.from("#baristarecom h3, #baristarecom a",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#baristarecom h3, #baristarecom a",
        scroller:"#main"

    }
})

gsap.from(".baristabox",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".baristabox",
        scroller:"#main"
    }
})

gsap.from("#learnmore h3, #learnmore a",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#learnmore h3, #learnmore a",
        scroller:"#main"
    }
})

gsap.from("#info",{
    scale:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#info",
        scroller:"#main"
    }
})