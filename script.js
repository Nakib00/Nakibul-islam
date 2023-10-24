Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -1, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.056983308419169 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 2 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.1, range: [0, 2], _gsap: { id: 9 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.35, range: [0, 2] },
    noise_scale: { value: 28.93, range: [0, 100] },
  },
  gooey: true,
});

// Animation Hero H1 text
var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  var h1all = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;

  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      animating = true;
      gsap.to(h1all[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });

      index === h1all.length - 1 ? (index = 0) : index++;

      gsap.to(h1all[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});


// Function to open the sidebar
function openSidebar() {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.add('active');
}

// Function to close the sidebar
function closeSidebar() {
  const sidebar = document.querySelector('#sidebar');
  sidebar.classList.remove('active');
}