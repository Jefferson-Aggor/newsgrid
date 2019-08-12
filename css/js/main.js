window.addEventListener('scroll', function() {
    if (this.window.scrollY > 150) {
        this.document.querySelector('#main-nav').style.opacity = 0.95
    } else {
        this.document.querySelector('#main-nav').style.opacity = 1
    }
})