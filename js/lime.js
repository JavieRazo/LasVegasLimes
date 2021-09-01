document.addEventListener('DOMContentLoaded', () => {
  addedSmoothEffect();
  function addedSmoothEffect() {
    const links = [...document.querySelectorAll('.container-section-navbar nav ul li a')];
    console.log("Links ::: ", links);
    links.forEach(link => link.addEventListener('click', smoothEffect));
  }
  function smoothEffect(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
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
