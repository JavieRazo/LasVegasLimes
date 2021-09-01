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
  /*let body = document.getElementsByClassName('container-section-body');
  console.log("VBodys ", body[0])
  body[0].addEventListener('scroll', addedBehaviorNavFixed);
  */
  // new Splide('.splide').mount();

  addedSmoothEffect();

  function addedSmoothEffect() {
    const links = [...document.querySelectorAll('.container-section-navbar nav ul li')];
    console.log("Links ::: ", links);
    links.forEach(link => link.addEventListener('click', smoothEffect));
  }

  function smoothEffect(e) {
    console.log("E ", e)
    e.prevetDefault();
    const href = this.getAttribute('href');
    console.log("Href: ", href)
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  function addedBehaviorNavFixed() {
    // sconsole.log("Scroll ", document.querySelector('#limes-alert'), window.scrollY)
    /*const navbar = document.querySelector('#lime-navbar');
    const footer = document.querySelector('#lime-footer');
    if (window.scrollY >= 230) {
      navbar.classList.add('container-navbar__navbar-fixed');
      footer.classList.add('container-footer__footer-fixed');
    } else {
      navbar.classList.remove('container-navbar__navbar-fixed');
      footer.classList.remove('container-footer__footer-fixed');
    }*/
  }


});
