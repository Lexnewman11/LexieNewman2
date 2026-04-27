function changeMessage() {
  document.getElementById("styleMessage").innerHTML =
    "Style tip: Confidence and simple accessories can elevate any outfit.";
}

function toggleOutfitList() {
  let list = document.getElementById("outfitList");

  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function () {

  // Modal
  const modalElems = document.querySelectorAll('.modal');
  M.Modal.init(modalElems);

  // Basic carousel
  const basicElem = document.querySelector('#basicCarousel');
  if (basicElem) {
    const basicInstance = M.Carousel.init(basicElem, {
      duration: 200,
      dist: -100,
      shift: 0,
      padding: 0,
      numVisible: 5,
      indicators: false
    });

    const basicPrev = document.querySelector('#basicPrev');
    const basicNext = document.querySelector('#basicNext');
    const basicGo3 = document.querySelector('#basicGo3');

    if (basicPrev) {
      basicPrev.addEventListener('click', function () {
        basicInstance.prev();
      });
    }

    if (basicNext) {
      basicNext.addEventListener('click', function () {
        basicInstance.next();
      });
    }

    if (basicGo3) {
      basicGo3.addEventListener('click', function () {
        basicInstance.set(3);
      });
    }
  }

});