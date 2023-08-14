const myText = new SplitType('#loading-text')
const timeline = gsap.timeline();

timeline.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})
.to('#loading-text', {
    opacity: 0,
    duration: 1,
    delay: 1,
})
.to('.slider', {
    width: '100%',
    delay: 0,
    duration: 1,
    ease: 'power2.inOut'
})
.to('.progress', {
    opacity: 0,
    delay: 0,
    display: 'none',
})
.to('.slider', {
    opacity: 0,
    delay: 0,
    display: 'none',
})