window.addEventListener('scroll', function() {
    var image = document.querySelector('#image-container img');
    var scrollPosition = window.scrollY;
    var blurValue = 30 - scrollPosition / 100; // Adjust the divisor to control the speed of unblurring

    image.style.filter = 'blur(' + blurValue + 'px)';
});


//var blurValue = Math.min(scrollPosition / 100); // with min calculation
