document.addEventListener("DOMContentLoaded", function () {
    //=========================== common btn =========================== //
    const spans = document.querySelectorAll('.common-btn .border-anim');
    spans.forEach(span => {

        span.style.background = `linear-gradient(90deg, rgba(0,0,0,0) 0%, #dd5454af 50%, rgba(0,0,0,0) 100%)`;

        let angle = 90;
        function rotate() {
            angle += 0.4;
            span.style.background = `linear-gradient(${angle}deg, rgba(0,0,0,0) 0%, #dd5454af 50%, rgba(0,0,0,0) 100%)`;
            requestAnimationFrame(rotate);
        }
        rotate();
    });


    //================================= box animation ================================= //
    const boxes = document.querySelectorAll('.rs-price-box-items-2, .rs-service-box-pro');
    let boxAngle = 131;

    function rotateBorder() {
        boxAngle += 0.15;
        boxes.forEach(box => {
            box.style.setProperty('--border-angle', boxAngle + 'deg');
        });
        requestAnimationFrame(rotateBorder);
    }
    rotateBorder();


    //================================= submenu border ================================= //
    // const submenuLinks = document.querySelectorAll('.rs-submenu li a');
    // let borderAngle = 0;

    // function rotateLinkBorder() {
    //     borderAngle += 0.7;

    //     submenuLinks.forEach(link => {
    //         link.style.setProperty('--border-angle', borderAngle + 'deg');
    //     });

    //     requestAnimationFrame(rotateLinkBorder);
    // }

    // rotateLinkBorder();

});


//=============================== offcanvas =============================== //
const offcanvasBtn = document.querySelector('.rs-offcanvas-btn');
const offcanvasArea = document.querySelector('.tp-offcanvas-area');
const offcanvasOverlay = document.querySelector('.tp-offcanvas-overlay');
const offcanvasCloseElements = document.querySelectorAll('.tp-offcanvas-close, .tp-offcanvas-overlay');

offcanvasBtn.addEventListener('click', () => {
    offcanvasArea.classList.add('tp-offcanvas-area-open');
    offcanvasOverlay.classList.add('tp-offcanvas-overlay-open');
});

offcanvasCloseElements.forEach(el => {
    el.addEventListener('click', () => {
        offcanvasArea.classList.remove('tp-offcanvas-area-open');
        offcanvasOverlay.classList.remove('tp-offcanvas-overlay-open');
    });
});


// =========== Swiper JS =========== //
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 500,
    slideToClickedSlide: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        410: {
            slidesPerView: 1,
            spaceBetween: 12
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 22
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 35
        }
    }
});




// ============================= tabs ============================ //
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.rs-tab-btn button');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const slides = Array.from(document.querySelectorAll('.swiper-slide'));
            const index = slides.findIndex(slide => slide.classList.contains(category));

            if (index >= 0) {
                swiper.slideTo(index, 500);
            }
        });
    });
});



// ============================= tabs 2 ============================ //
const tabs = document.querySelectorAll('.rs-tab-btn-2 button');
const items = document.querySelectorAll('.gallery-section .grid > div');
items.forEach(item => {
    if (!item.classList.contains('website')) item.style.display = 'none';
});
tabs.forEach(tab => {
    if (tab.dataset.category === 'website') tab.classList.add('active');
});
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.dataset.category;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});




// ============== backToTop ============== //
let windowHeight = 0;
let documentHeight = 0;

function updateDimensions() {
    windowHeight = window.innerHeight;
    documentHeight = document.documentElement.scrollHeight - windowHeight;
}

updateDimensions();
window.addEventListener('resize', updateDimensions);

const box = document.querySelector(".scrollToTop");

if (box) {
    const water = box.querySelector(".water");

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const percent = Math.min(Math.floor((scrollPosition / documentHeight) * 100), 100);

        if (water) {
            water.style.transform = `translate(0, ${100 - percent}%)`;
        }

        if (scrollPosition >= 200) {
            box.style.display = "block";
            box.style.opacity = "1";
        } else {
            box.style.opacity = "0";
            box.style.display = "none";
        }
    });

    // Scroll to top
    box.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


// ============== HeaderSticky ============== //
window.addEventListener("scroll", function () {
    const header = document.querySelector(".rs-header-area");
    
    if (window.scrollY > 300) {
        header.classList.add("rs-header-sticky");
    } else {
        header.classList.remove("rs-header-sticky");
    }
});











