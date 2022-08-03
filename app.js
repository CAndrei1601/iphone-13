//scroll trigger

// const tlIntro = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".first-page",
//     start: "0%",
//     end: "100%",
//     scrub: true,
//   },
// });

// tlIntro.fromTo("nav", { opacity: 1 }, { opacity: 0 });

// fade out progresiv la nav
// first page
const tlF = gsap.timeline({
  scrollTrigger: {
    trigger: '.first-page',
    start: '0%',
    end: '100%',
    pin: true,
    pinSpacing: false,
  },
});
// Highlite page 2

const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    scrub: true,
    start: '-40%',
    end: '40%',
  },
});

tlH.fromTo(
  '.highlight',
  { color: 'rgba(255,255,255,0.4' },
  { color: 'rgba(255,255,255,1', stagger: 1 }
);

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: '.second-page',
    scrub: true,
    start: '-20%',
    end: '60%',
  },
});

tlHRemove.to('.highlight', { color: 'rgba(255,255,255,0', stagger: 1 });

//third page

const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    start: '-25%',
    end: '30%',
    scrub: true,
  },
});

tlSplit.fromTo('.large-phone', { x: '40%' }, { x: '20%' });
tlSplit.fromTo('.small-phone', { x: '-40%' }, { x: '-20%' }, '<');
tlSplit.fromTo(
  '.product-text-left',
  { x: '50%', opacity: 0 },
  { x: '0%', opacity: 1 },
  '<'
);
tlSplit.fromTo(
  '.product-text-right',
  { x: '-50%', opacity: 0 },
  { x: '0%', opacity: 1 },
  '<'
);

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: '.third-page',
    pin: true, //pin the page even if you scroll
    pinSpacing: false,
    start: '0%',
    end: '100%',
  },
});

//Carousel

const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery-container');

let currentSwatch = 'blue';
let topIndex = '2';

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;

  swatch.addEventListener('click', (e) => {
    let swatchName = e.target.getAttribute('swatch');
    let closeUp = document.querySelectorAll('.' + swatchName);
    gsap.set(closeUp, { zIndex: topIndex });
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });
    console.log(swatchName);
  });
});
