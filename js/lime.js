document.addEventListener('DOMContentLoaded', () => {
  /*const navBar = document.querySelector('.navbar-burger');
  if (navBar) {
    navBar.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target =(navBar.dataset || {}).target;
      const element = document.getElementById(target);
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      navBar.classList.toggle('is-active');
      element.classList.toggle('is-active');
    });
  }*/
  /*let navbar = document.querySelector('#lime-navbar');
  console.log("Nav; ", navbar);
  const offsetTopNav = navbar.offsetTop;
  console.log("offfssettop ; ", offsetTopNav)*/
  window.addEventListener('scroll', addedBehaviorNavFixed);
  addedSmoothEffect();

  function addedSmoothEffect() {
    const links = [...document.querySelectorAll('.container-navbar nav ul li')];
    console.log("Links ::: ", links);
    links.forEach(link => link.addEventListener('click', smoothEffect));
  }

  function smoothEffect(e) {
    e.prevetDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  function addedBehaviorNavFixed() {
    const navbar = document.querySelector('#lime-navbar');
    const footer = document.querySelector('#lime-footer');
    if (window.scrollY >= 230) {
      navbar.classList.add('container-navbar__navbar-fixed');
      footer.classList.add('container-footer__footer-fixed');
    } else {
      navbar.classList.remove('container-navbar__navbar-fixed');
      footer.classList.remove('container-footer__footer-fixed');
    }

  }


});
