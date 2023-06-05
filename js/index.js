document.getElementById('search').addEventListener('submit', (e) => {
    e.preventDefault();
});

const hero = document.querySelector('.hero-section');
const stickyNav = (entries) => {
    const header = document.getElementById('header');
    const logo = document.querySelector('#header .logo');
    const [entry] = entries;
    if (!entry.isIntersecting) {
        header.classList.add('sticky');
        logo.style.display = 'none';
    } else {
        header.classList.remove('sticky');
        logo.style.display = 'block';
    }
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
});

headerObserver.observe(hero);


// lazy load
// slider
