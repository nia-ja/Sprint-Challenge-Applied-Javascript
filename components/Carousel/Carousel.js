class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        // reference to the left button
        this.leftBtn = this.carousel.querySelector('.left-button');
        // reference to the right button
        this.rightBtn = this.carousel.querySelector('.right-button');
        // reference to all images
        this.images = this.carousel.querySelectorAll('img');
        // set index to first slide
        this.imageIndex = 0;
        //display first image in NodeList
        this.images[this.imageIndex].style.display = 'block';
        // click events for buttons
        this.leftBtn.addEventListener('click', this.showPreviousImage.bind(this));
        this.rightBtn.addEventListener('click', this.showNextImage.bind(this));
    }

    showPreviousImage() {
        // set all images as invisible
        this.images.forEach(image => {
            image.style.display = 'none';
            image.classList.remove('animate-left');
            image.classList.remove('animate-right');
        });
        // substruct 1 from index
        this.imageIndex -= 1;
        //if index is negative
        if (this.imageIndex < 0) {
            // grab last image from NodeList
            this.imageIndex = this.images.length - 1;
            this.images[this.imageIndex].classList.toggle('animate-left');
            //display last image
            this.images[this.imageIndex].style.display = 'block';
        } else {
            this.images[this.imageIndex].classList.toggle('animate-left');
            //display image with currant index
            this.images[this.imageIndex].style.display = 'block';
        }
    }

    showNextImage() {
        // set all images as invisible
        this.images.forEach(image => {
            image.style.display = 'none';
            image.classList.remove('animate-left');
            image.classList.remove('animate-right');
        });
        //adds 1 to index
        this.imageIndex += 1;
        // if index is bigger then length of immage NodeList
        if (this.imageIndex > (this.images.length - 1)) {
            // grab first image from NodeList
            this.imageIndex = 0;
            this.images[this.imageIndex].classList.toggle('animate-right');
            //display first image
            this.images[this.imageIndex].style.display = 'block';
        } else {
            this.images[this.imageIndex].classList.toggle('animate-right');
            //display image with currant index
            this.images[this.imageIndex].style.display = 'block';
        }
    }

}


// reference to the carousel
let carousel = document.querySelector('.carousel')
// creating new instance of Carousel class
carousel = new Carousel(carousel);

// images are changing automatically, when user is not clicking (9000ms == 9s)
setInterval(carousel.showNextImage.bind(carousel), 9000);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/