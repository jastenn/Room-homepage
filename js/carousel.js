const carouselBtnPrev = document.querySelector('.carousel__controls--prev')
const carouselBtnNext = document.querySelector('.carousel__controls--next')
const carauselItems = document.querySelectorAll('.carousel__item')
const heroTextItems = document.querySelectorAll('.header-list__item')
let carouselActiveIdx = 0 //zero based
const carouselLastIdx = carauselItems.length - 1
let heroTextActiveIdx = 0 //zero based
const heroTextLastIdx = heroTextItems.length - 1

carouselBtnPrev.addEventListener('click', carouselPrevBtnHandler)
carouselBtnNext.addEventListener('click', carouselNextBtnHandler)

window.addEventListener('keyup', (e) => {
  if(!carouselBtnPrev.disabled && !carouselBtnNext.disabled) {
    if(e.key === 'ArrowLeft') {
      carouselPrevBtnHandler()
    } else if(e.key == 'ArrowRight') {
      carouselNextBtnHandler()
    }
  }
})

function carouselPrevBtnHandler() {
  //Vars
  const curActiveCarouselItem = carauselItems[carouselActiveIdx]
  const curActiveHeroTextItem = heroTextItems[heroTextActiveIdx]
  
  //for carousel img
  curActiveCarouselItem.classList.add('carousel__item--leavingLeft')
  curActiveCarouselItem.classList.remove('carousel__item--active')

  //for hero text
  curActiveHeroTextItem.classList.add('header-list__item--leaving')
  curActiveHeroTextItem.classList.remove('header-list__item--active')
  setTimeout(() => {
    //for hero text
    curActiveHeroTextItem.classList.remove('header-list__item--leaving')
  }, 300);
  setTimeout(() => {
    //for carousel img
    curActiveCarouselItem.classList.remove('carousel__item--leavingLeft')
  }, 600);

  carouselActiveIdx <= 0 ? carouselActiveIdx = carouselLastIdx : carouselActiveIdx --
  heroTextActiveIdx <= 0 ? heroTextActiveIdx = heroTextLastIdx : heroTextActiveIdx --
  const nextActiveCarouselItem = carauselItems[carouselActiveIdx]
  const nextActiveHeroTextItem = heroTextItems[carouselActiveIdx]
  //for carausel Img
  carouselBtnPrev.disabled = true
  carouselBtnNext.disabled = true
  nextActiveCarouselItem.classList.add('carausel__item--fromRight')
 

  setTimeout(() => {
    //for hero text
    nextActiveHeroTextItem.classList.add('header-list__item--next')
  }, 300);

  setTimeout(() => {
    //for hero text
    nextActiveHeroTextItem.classList.remove('header-list__item--next')
    nextActiveHeroTextItem.classList.add('header-list__item--active')

    //for carausel Img
    nextActiveCarouselItem.classList.remove('carausel__item--fromRight')
    nextActiveCarouselItem.classList.add('carousel__item--active')
    carouselBtnPrev.disabled = false
    carouselBtnNext.disabled = false
  }, 600);
}

function carouselNextBtnHandler() {
  //Vars
  const curActiveItem = carauselItems[carouselActiveIdx]
  const curActiveHeroTextItem = heroTextItems[heroTextActiveIdx]
  // carauselItems[carouselActiveIdx + 1].classList.add('carousel__item--origin-right')
  curActiveItem.classList.add('carousel__item--leavingRight')
  curActiveItem.classList.remove('carousel__item--active')
  //for hero text
  curActiveHeroTextItem.classList.add('header-list__item--leaving')
  curActiveHeroTextItem.classList.remove('header-list__item--active')
  setTimeout(() => {
    curActiveHeroTextItem.classList.remove('header-list__item--leaving')
  }, 300);

  //for carousel img
  setTimeout(() => {
    curActiveItem.classList.remove('carousel__item--leavingRight')
  }, 600);

  carouselActiveIdx >= carouselLastIdx ? carouselActiveIdx = 0 : carouselActiveIdx ++
  heroTextActiveIdx >= heroTextLastIdx ? heroTextActiveIdx = 0 : heroTextActiveIdx ++
  //Vars
  const nextActiveCarouselItem = carauselItems[carouselActiveIdx]
  const nextActiveHeroTextItem = heroTextItems[carouselActiveIdx]

  nextActiveCarouselItem.classList.add('carausel__item--fromLeft')
  carouselBtnPrev.disabled = true
  carouselBtnNext.disabled = true
  setTimeout(() => {
    //for hero text
    nextActiveHeroTextItem.classList.add('header-list__item--next')
  }, 300);
  setTimeout(() => {
    //for hero img
    nextActiveHeroTextItem.classList.remove('header-list__item--next')
    nextActiveHeroTextItem.classList.add('header-list__item--active')

    //for carousel img
    nextActiveCarouselItem.classList.remove('carausel__item--fromLeft')
    nextActiveCarouselItem.classList.add('carousel__item--active')

    carouselBtnPrev.disabled = false
    carouselBtnNext.disabled = false
  }, 600);
}