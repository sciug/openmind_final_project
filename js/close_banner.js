const closeButtonBanner = document.querySelector('.discount_header_container button');



closeButtonBanner.addEventListener('click', function(){
    this.parentElement.style.display = 'none'
})