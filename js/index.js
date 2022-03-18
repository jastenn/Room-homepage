(function () {
  const hamburger = document.querySelector('.nav__hamburger')
  const closeNav = document.querySelector('.nav__close-nav')
  const navList = document.querySelector('.nav__list')
  const topNavContainer = navList.parentElement
  const navBackdrop = document.getElementById('backdrop')

  hamburger.addEventListener('click', hamburgerHandler)
  closeNav.addEventListener('click', closeNavHandler)
  navBackdrop.addEventListener('click', closeNavHandler)
  window.addEventListener('resize', resizeHandler)

  function hamburgerHandler() {
    topNavContainer.classList.add('active')
    navBackdrop.style.display = 'block'
    document.body.style.height = '100vh'
    document.body.style.overflowY = 'hidden'
    setTimeout(() => {
      backdropHandler()
    }, 150);
  }

  function closeNavHandler() {
    topNavContainer.classList.remove('active')
    document.body.removeAttribute('style')
    setTimeout(() => backdropHandler(), 100);
    setTimeout(() => navBackdrop.removeAttribute('style'), 300);
  }

  function backdropHandler() {
    if(topNavContainer.classList.contains('active')) {
      navBackdrop.classList.add('active')
    } else {
      navBackdrop.classList.remove('active')
    }
  }

  function resizeHandler(e) {
    if(e.target.innerWidth >= 800) {
      if(topNavContainer.classList.contains('active')) {
        topNavContainer.classList.remove('active')
        navBackdrop.classList.remove('active')
      }
    }
  }
})()