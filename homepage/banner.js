const slideshow = document.querySelector('.banner');
const images = slideshow.querySelectorAll('.banner-text');
let i = 0;

function MoveImgToBottom(a) {
    var divx = document.getElementById('banner-' + a);
    var parent = divx.parentNode;

    parent.appendChild(divx); // Đưa divx xuống dưới cùng
    slideshow.style.transition = 'none';
    slideshow.style.transform = 'translateX(0%)';
}

function SlideShow() {
    slideshow.style.transition = '0.5s';
    slideshow.style.transform = 'translateX(-33.3333%)';

    setTimeout(function() {
        if(i == images.length - 1 ) {
            MoveImgToBottom( i + 1 );
            i = 0;
        }
        else{
            MoveImgToBottom( i + 1 );
            i++;
        }
    }, 2000);
}

setInterval(SlideShow, 3000);

