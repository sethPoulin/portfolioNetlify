const nav = document.getElementById('navBar');
const sectionOne = document.querySelector('header')

let prevRatio = 1

const headerObserver = new IntersectionObserver
(function(entries) {
  entries.forEach(entry => {
    const currentRatio = entry.intersectionRatio
    if(!entry.isIntersecting) {
      nav.classList.add('nav-slide-down')
      nav.classList.remove('nav-fade-out')
    // if user is scrolling upwards
    } else if(prevRatio < currentRatio){
      // if we're less than halfway up the section, remove the slide down animation and run the fade out animation
      if(currentRatio < 0.5) {
        nav.classList.remove('nav-slide-down')
        nav.classList.add('nav-fade-out')
      } else {
        // remove the fade out animation, allowing the .navBar class to take effect
        nav.classList.remove('nav-fade-out')
      }
    }
    prevRatio = currentRatio
  })
}, {
  threshold: [0, 0.5, 1]
})

headerObserver.observe(sectionOne)