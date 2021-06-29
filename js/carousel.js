const carouselBtnPrev = document.querySelector('.carousel__controls--prev')
const carouselBtnNext = document.querySelector('.carousel__controls--next')
const carauselItems = document.querySelectorAll('.carousel__item')
let carouselActiveIdx = 0 //zero based
const carouselLastIdx = carauselItems.length - 1

carouselBtnPrev.addEventListener('click', carouselPrevBtnHandler)
carouselBtnNext.addEventListener('click', carouselNextBtnHandler)

function carouselPrevBtnHandler() {
  //Vars
  const curActiveItem = carauselItems[carouselActiveIdx]
  // carauselItems[carouselActiveIdx + 1].classList.add('carousel__item--origin-right')
  curActiveItem.classList.add('carousel__item--leavingLeft')
  curActiveItem.classList.remove('carousel__item--active')
  setTimeout(() => {
    curActiveItem.classList.remove('carousel__item--leavingLeft')
  }, 600);

  carouselActiveIdx <= 0 ? carouselActiveIdx = carouselLastIdx : carouselActiveIdx --
  
  const nextActiveItem = carauselItems[carouselActiveIdx]
  nextActiveItem.classList.add('carausel__item--fromRight')
  carouselBtnPrev.disabled = true
  setTimeout(() => {
    carouselBtnPrev.disabled = false
    nextActiveItem.classList.remove('carausel__item--fromRight')
    nextActiveItem.classList.add('carousel__item--active')
  }, 600);
}

function carouselNextBtnHandler() {
  //Vars
  const curActiveItem = carauselItems[carouselActiveIdx]
  // carauselItems[carouselActiveIdx + 1].classList.add('carousel__item--origin-right')
  curActiveItem.classList.add('carousel__item--leavingRight')
  curActiveItem.classList.remove('carousel__item--active')
  setTimeout(() => {
    curActiveItem.classList.remove('carousel__item--leavingRight')
  }, 600);

  carouselActiveIdx >= carouselLastIdx ? carouselActiveIdx = 0 : carouselActiveIdx ++
  //Vars
  const nextActiveItem = carauselItems[carouselActiveIdx]
  nextActiveItem.classList.add('carausel__item--fromLeft')
  carouselBtnNext.disabled = true
  setTimeout(() => {
    carouselBtnNext.disabled = false
    nextActiveItem.classList.remove('carausel__item--fromLeft')
    nextActiveItem.classList.add('carousel__item--active')
  }, 600);
}