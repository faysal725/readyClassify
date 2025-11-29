const spans = document.querySelectorAll('.common-btn .border-anim');
spans.forEach(span => {
    let angle = 90;
    function rotate() {
        angle += 0.4;
        span.style.background = `linear-gradient(${angle}deg, rgba(0,0,0,0) 0%, #dd5454af 50%, rgba(0,0,0,0) 100%)`;
        requestAnimationFrame(rotate);
    }
    rotate();
});

// bg
const bgElements = [
    document.querySelector('.rs-technology-icons-bg'),
    document.querySelector('.rs-technology-icons-bg-2'),
    document.querySelector('.rs-technology-icons-bg-3')
];

let angles = [210, 250, 90]; // initial angles

function rotateBorders() {
    bgElements.forEach((bg, idx) => {
        if (!bg) return;

        angles[idx] += 0.7;
        bg.style.setProperty('--angle', angles[idx] + 'deg');
    });

    requestAnimationFrame(rotateBorders);
}
rotateBorders();


// box
const boxes = document.querySelectorAll('.rs-price-box-items-2, .rs-service-box-pro');
let angle = 131;

function rotateBorder() {
    angle += 0.15;

    boxes.forEach(box => {
        box.style.setProperty('--border-angle', angle + 'deg');
    });

    requestAnimationFrame(rotateBorder);
}

rotateBorder();



document.addEventListener("DOMContentLoaded", function () {

    const submenuLinks = document.querySelectorAll('.rs-submenu li a');
    let borderAngle = 0;

    function rotateLinkBorder() {
        borderAngle += 0.7;

        submenuLinks.forEach(link => {
            link.style.setProperty('--border-angle', borderAngle + 'deg');
        });

        requestAnimationFrame(rotateLinkBorder);
    }

    rotateLinkBorder();
});




////////////////////

const icons = document.querySelectorAll('.rs-technology-icon');
const bg = document.querySelector('.rs-technology-icons-bg');
const bg2 = document.querySelector('.rs-technology-icons-bg-2');
const bg3 = document.querySelector('.rs-technology-icons-bg-3');

let centerX, centerY;
let R1, R2, R3;

// initialize radii //
function updateSizes() {
    if (!bg) return;

    const rect = bg.getBoundingClientRect();
    centerX = rect.width / 2;
    centerY = rect.height / 2;
    R1 = rect.width / 2;

    R2 = bg2 ? bg2.getBoundingClientRect().width / 2 : 0;
    R3 = bg3 ? bg3.getBoundingClientRect().width / 2 : 0;
}


// call initially //
updateSizes();

// update on resize //
window.addEventListener('resize', updateSizes);

// animation setup //
const iconSettings = Array.from(icons).map((icon, idx) => {
    const w = icon.offsetWidth;
    const h = icon.offsetHeight;

    // --- CENTER ICON --- //
    if (icon.classList.contains('center-icon')) {
        return {
            icon,
            w, h,
            isCenter: true
        };
    }

    // --- OTHER ICONS --- //
    let radius, speed, direction, totalInRing, positionInRing;

    if (idx < 5) {
        radius = R1;
        speed = 0.00045;
        direction = 1;
        totalInRing = 5;
        positionInRing = idx;
    }
    else if (idx < 8) {
        radius = R2;
        speed = 0.00045;
        direction = -1;
        totalInRing = 3;
        positionInRing = idx - 5;
    }
    else {
        radius = R3;
        speed = 0.00045;
        direction = 1;
        totalInRing = 2;
        positionInRing = idx - 8;
    }

    const randomOffset = (Math.random() - 0.5) * (Math.PI / totalInRing);
    const offset = (2 * Math.PI / totalInRing) * positionInRing + randomOffset;

    return { icon, radius, speed: speed * direction, offset, w, h, isCenter: false };
}).filter(Boolean);


// -------------------------------------- //
//          MAIN ANIMATION                //  
// -------------------------------------- //

function animateIcons() {
    const t = Date.now();

    iconSettings.forEach(({ icon, radius, offset, speed, w, h, isCenter }) => {

        // =========== CENTER ICON (Scale only + fixed center) =========== //
        if (isCenter) {
            const scale = 1 + Math.sin(t * 0.002) * 0.08;

            icon.style.transform = `scale(${scale})`;

            // Stay fixed at the exact center
            icon.style.left = `${centerX - w / 2}px`;
            icon.style.top = `${centerY - h / 2}px`;
            return;
        }

        // =========== NORMAL ORBIT ICONS =========== //
        const angle = t * speed + offset;

        const x = centerX + radius * Math.cos(angle) - w / 2;
        const y = centerY + radius * Math.sin(angle) - h / 2;

        icon.style.left = `${x}px`;
        icon.style.top = `${y}px`;
    });

    requestAnimationFrame(animateIcons);
}
animateIcons();




//offcanvas
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


///////////////////////////
// <!-- Swiper JS -->
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




// Tabs functionality
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






///////////////////////////////










