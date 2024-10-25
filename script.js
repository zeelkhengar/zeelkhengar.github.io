document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
