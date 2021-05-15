(function () {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        reset: true
    });
     
    sr.reveal('.skill-icons>img', { delay: 200 })
    sr.reveal('h1', {delay: 200})
    sr.reveal('.project-image', {delay: 200})
    sr.reveal('.contact-icons', {delay: 200})
})();

