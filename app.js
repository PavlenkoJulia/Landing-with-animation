gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero__section', { opacity: 1 }, { opacity: 0, scrollTrigger: {
        trigger: '.hero__section',
        start: 'center',
        end: '900',
        scrub: true
    } })

    let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item')

    itemsLeft.forEach(item  => {
        gsap.fromTo(item, { x: -50, opacity: 0 }, { 
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-800',
                end: '100',
                scrub: true
            }
        })
    });

    let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item')

    itemsRight.forEach(item  => {
        gsap.fromTo(item, { x: 50, opacity: 0 }, { 
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-800',
                end: '100',
                scrub: true
            }
        })
    });
}