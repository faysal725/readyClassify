// Accordion behavior (smooth, accessible, optional single-open mode)
const accordion = document.getElementById('accordion');
const single = accordion?.dataset.accordion === 'single';

accordion?.addEventListener('click', (e) => {
  const btn = e.target.closest('button[aria-controls]');
  if (!btn) return;

  const panelId = btn.getAttribute('aria-controls');
  const panel = document.getElementById(panelId);
  const icon = btn.querySelector('img');

  const isOpen = btn.getAttribute('aria-expanded') === 'true';

  // If single mode, close others first
  if (single) {
    accordion.querySelectorAll('button[aria-controls]').forEach(b => {
      if (b !== btn) {
        b.setAttribute('aria-expanded', 'false');
        const p = document.getElementById(b.getAttribute('aria-controls'));
        const i = b.querySelector('img');
        p.style.gridTemplateRows = '0fr';
        i?.classList.remove('rotate-0');
      }
    });
  }

  // Toggle this one
  btn.setAttribute('aria-expanded', String(!isOpen));
  panel.style.gridTemplateRows = isOpen ? '0fr' : '1fr';
  icon?.classList.toggle('rotate-0', !isOpen);
});

// Keyboard support for Space/Enter (buttons already handle this in most browsers,
// but this ensures consistent behavior if default is prevented by something else)
accordion?.querySelectorAll('button[aria-controls]').forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});



const accordionButtons = document.querySelectorAll("#accordion button");

accordionButtons.forEach(btn => {
  const wrapper = btn.closest(".accordion-item");
  let angle = 0; // start angle

  function rotateBorder() {
    if (wrapper.classList.contains("active")) {
      angle += 0.05; // rotation speed
      if (angle >= 360) angle = 0;
      wrapper.style.border = "1px solid transparent";
      wrapper.style.borderImage = `linear-gradient(${angle}deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 10%, #DD5454 50%, rgba(0,0,0,0.9) 90%, rgba(0,0,0,1) 100%) 1`;
    } else {
      wrapper.style.borderImage = "";
      wrapper.style.border = "1px solid transparent";
    }
    requestAnimationFrame(rotateBorder);
  }

  rotateBorder();

  btn.addEventListener("click", () => {
    accordionButtons.forEach(otherBtn => {
      if (otherBtn !== btn) {
        const otherPanel = otherBtn.nextElementSibling;
        const otherWrapper = otherBtn.closest(".accordion-item");
        otherPanel.classList.remove("grid-rows-[1fr]");
        otherWrapper.classList.remove("active");
        otherWrapper.classList.remove("bg-[rgba(221,84,84,0.09)]");
        otherWrapper.classList.add("bg-[rgba(255,255,255,0.08)]");
      }
    });

    const panel = btn.nextElementSibling;
    const wrapper = btn.closest(".accordion-item");

    panel.classList.toggle("grid-rows-[1fr]");
    wrapper.classList.toggle("active");

    if (panel.classList.contains("grid-rows-[1fr]")) {
      wrapper.classList.add("bg-[rgba(221,84,84,0.09)]");
      wrapper.classList.remove("bg-[rgba(255,255,255,0.08)]");
    } else {
      wrapper.classList.remove("bg-[rgba(221,84,84,0.09)]");
      wrapper.classList.add("bg-[rgba(255,255,255,0.08)]");
    }
  });
});




