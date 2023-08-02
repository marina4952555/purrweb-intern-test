(function() {
  'use strict';

  const backSlideBtn = document.querySelector('.slider__btn-prev');
  const nextSlideBtn = document.querySelector('.slider__btn-next');
  const slides = document.querySelectorAll('.slider__item');
  const dots = document.querySelectorAll('.dots__item');
  const SLIDE_WIDTH = 500;
  const ANIMATION_DURATION = 505;
  const ANIMATION_STEP = 10;
  const LAST_SLIDE_DELAY = 500;
  const SHIFT_STEP = 10;
  const ACTIVE_DOT_CLASS = 'dots__item--active';
  let currentPosition = 0;
  let currentSlideIndex = 0;
  let isAnimationCompleted = true;
  
  for (const slide of slides) {
    const index = Array.from(slides).indexOf(slide);
    slide.dataset.index = index;
    slide.style.left = `${currentPosition}px`;
    currentPosition += SLIDE_WIDTH;
  }
  
  backSlideBtn.addEventListener('click', () => {
    if (isAnimationCompleted) {
      isAnimationCompleted = false;
      currentSlideIndex -= 1;
  
      if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
  
        for (let i = 1; i < slides.length; i++) {
          const currentPosition = parseInt(slides[i].style.left);
          const targetPosition = currentPosition - SLIDE_WIDTH*slides.length;
          slides[i].style.left = `${targetPosition}px`;
        }
        moveLastSlide(0, 'back');
      }
      moveAllSlides('back');
      changeActiveDot();
    }
  })
  
  nextSlideBtn.addEventListener('click', () => {
    if (isAnimationCompleted) {
      isAnimationCompleted = false;
      currentSlideIndex += 1;
  
      if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0;
  
        for (let i = 0; i < slides.length - 1; i++) {
          const currentPosition = parseInt(slides[i].style.left);
          const targetPosition = currentPosition + SLIDE_WIDTH*slides.length;
          slides[i].style.left = `${targetPosition}px`;
        }
  
        moveLastSlide(slides.length-1, 'forward');
      }
      moveAllSlides('forward');
      changeActiveDot();
    }
  })

  const moveLastSlide = (lastSlideIndex, direction) => {
    const currentPosition = SLIDE_WIDTH*(slides.length-1);
    console.log(currentPosition);
    const timer = setInterval(() => {
      if (direction === 'back') {
        slides[lastSlideIndex].style.left = `-${currentPosition}px`;
      }

      if (direction === 'forward') {
        slides[lastSlideIndex].style.left = `${currentPosition}px`;
      }
      
      clearInterval(timer);
    }, LAST_SLIDE_DELAY);
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
      if (isAnimationCompleted === true) {
        isAnimationCompleted = false;
  
        if (currentSlideIndex === i) {
          return;
        }
        
        currentSlideIndex = i;

        for (const slide of slides) {
          if (parseInt(slide.dataset.index) === i) {
            if (parseInt(slide.style.left) > 0) {
              const steps = parseInt(slide.style.left) / SLIDE_WIDTH;
              moveAllSlides('forward', steps);
            }
  
            if (parseInt(slide.style.left) < 0) {
              const steps = Math.abs(parseInt(slide.style.left) / SLIDE_WIDTH);
              moveAllSlides('back', steps);
            }

            changeActiveDot(i);
          }
        }
      }
    })
  }
  
  const slideMoveAnimation = (direction, position, item, steps) => {
    const start = Date.now();
    const timer = setInterval(function() {
      const timePassed = Date.now() - start;

      if (timePassed >= ANIMATION_DURATION) {
        isAnimationCompleted = true;
        clearInterval(timer);
        return;
      }
    
      if (direction === 'back') {
        if (steps) {
          position += steps*SHIFT_STEP;
        } else {
          position += SHIFT_STEP;
        }
      }
      
      if (direction === 'forward') {
        if (steps) {
          position -= steps*SHIFT_STEP;
        } else {
          position -= SHIFT_STEP;
        }
      }

      // if (position === slides.length * SLIDE_WIDTH || position === slides.length * SLIDE_WIDTH) {
      //   position = 0; 
      // }

      item.style.left = `${Math.round(position)}px`;
  
    }, ANIMATION_STEP);
  }
  
  const moveAllSlides = (direction, steps) => {
    for (const slide of slides) {
      const currentSlidePosition = parseInt(slide.style.left);
      slideMoveAnimation(direction, currentSlidePosition, slide, steps);
    }
  }
  
  const changeActiveDot = (index) => {
    for (const dot of dots) {
      if (dot.classList.contains(ACTIVE_DOT_CLASS)) {
        dot.classList.remove(ACTIVE_DOT_CLASS);
      }
    }
  
    if (index) {
      dots[index].classList.add(ACTIVE_DOT_CLASS);
    } else {
      dots[currentSlideIndex].classList.add(ACTIVE_DOT_CLASS);
    }
  }
}())