document.addEventListener('DOMContentLoaded', () => {
    // grab all the slides
    let slides = document.querySelectorAll('.portfolio-page')
    // set initial slide
    let currentSlide = 0
    //grab both buttons
    const nextButton = document.querySelector('#btn__next')
    const prevButton = document.querySelector('#btn__previous')
    function nextSlide() {
      // current slide becomes hidden
      slides[currentSlide].className = 'portfolio-page'
      // set the current slide as the next one
      currentSlide = (currentSlide + 1) % slides.length
      // add the class showing to the slide to make it visible
      slides[currentSlide].className = 'portfolio-page page__show'
    }
    function prevSlide() {
      // current slide becomes hidden
      slides[currentSlide].className = 'portfolio-page'
      // set the current slide as the previous one
      currentSlide = (currentSlide - 1) % slides.length
      if (currentSlide == -1) {
        currentSlide = slides.length - 1
      }
      // add the class showing to the slide to make it visible
      slides[currentSlide].className = 'portfolio-page page__show'
    }
    nextButton.addEventListener('click', () => {
      // go to next slide on click of the button
      nextSlide()
    })
    prevButton.addEventListener('click', () => {
      // go to previous slide on click of the button
      prevSlide()
    })
  })