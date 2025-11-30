//==================== background ==================== //
const bgElements = [
    document.querySelector('.rs-technology-icons-bg'),
    document.querySelector('.rs-technology-icons-bg-2'),
    document.querySelector('.rs-technology-icons-bg-3')
];
let angles = [210, 250, 90];
function rotateBorders() {
    bgElements.forEach((bg, idx) => {
        if (!bg) return;

        angles[idx] += 0.7;
        bg.style.setProperty('--angle', angles[idx] + 'deg');
    });

    requestAnimationFrame(rotateBorders);
}
rotateBorders();


//====================== icon animation ====================== //
const icons = document.querySelectorAll('.rs-technology-icon');
const bg = document.querySelector('.rs-technology-icons-bg');
const bg2 = document.querySelector('.rs-technology-icons-bg-2');
const bg3 = document.querySelector('.rs-technology-icons-bg-3');

let centerX = 0, centerY = 0;
let R1 = 0, R2 = 0, R3 = 0;
let iconSettings = [];

function updateSizes() {
    if (!bg) return;

    const rect = bg.getBoundingClientRect();
    centerX = rect.width / 2;
    centerY = rect.height / 2;

    R1 = rect.width / 2;
    R2 = bg2 ? bg2.getBoundingClientRect().width / 2 : 0;
    R3 = bg3 ? bg3.getBoundingClientRect().width / 2 : 0;

    rebuildIconSettings();
}

function rebuildIconSettings() {
    iconSettings = Array.from(icons).map((icon, idx) => {
        const w = icon.offsetWidth;
        const h = icon.offsetHeight;

        if (icon.classList.contains('center-icon'))
            return { icon, w, h, isCenter: true };

        let radius, speed, totalInRing, positionInRing, direction;

        if (idx < 5) {
            radius = R1;
            speed = 0.00028;
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
            speed = 0.0007;
            direction = 1;
            totalInRing = 2;
            positionInRing = idx - 8;
        }

        const offset = (2 * Math.PI / totalInRing) * positionInRing;

        return {
            icon,
            radius,
            speed: speed * direction,
            angle: offset,
            w, h,
            isCenter: false
        };
    });
}

updateSizes();
window.addEventListener('resize', updateSizes);

function animateIcons(timestamp) {
    iconSettings.forEach(item => {
        if (item.isCenter) {
            const scale = 1 + Math.sin(timestamp * 0.002) * 0.08;
            item.icon.style.transform =
                `translate(${centerX - item.w / 2}px, ${centerY - item.h / 2}px) scale(${scale})`;
            return;
        }

        item.angle += item.speed * 16;

        const x = centerX + item.radius * Math.cos(item.angle) - item.w / 2;
        const y = centerY + item.radius * Math.sin(item.angle) - item.h / 2;

        item.icon.style.transform = `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animateIcons);
}
requestAnimationFrame(animateIcons);