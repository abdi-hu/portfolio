(function () {
    const srTop = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        reset: true
    });
    srTop.reveal('h1', {delay: 300})
    srTop.reveal('.project-image', {delay: 300})
    const srBottom = ScrollReveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: true
    });
    srBottom.reveal('.skill-icons>img', { delay: 300 })
    const srRight= ScrollReveal({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true
    });    
    srRight.reveal('.contact-icons', {delay: 300})
})();

