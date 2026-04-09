<script>
document.addEventListener('DOMContentLoaded', function () {
  // Modal
  const modalElems = document.querySelectorAll('.modal');
  M.Modal.init(modalElems);

  // Fix image paths from images/ to Images/
  document.querySelectorAll('img').forEach(function(img) {
    if (img.getAttribute('src') && img.getAttribute('src').includes('images/')) {
      img.setAttribute('src', img.getAttribute('src').replace('images/', 'Images/'));
    }
  });

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

    if (basicPrev) basicPrev.addEventListener('click', function () { basicInstance.prev(); });
    if (basicNext) basicNext.addEventListener('click', function () { basicInstance.next(); });
    if (basicGo3) basicGo3.addEventListener('click', function () { basicInstance.set(2); });
  }

  // Collapsible
  const collElem = document.querySelector('#demoCollapsible');
  if (collElem) {
    M.Collapsible.init(collElem, {
      accordion: false
    });
  }

  // Full-width carousel
  const fwElem = document.querySelector('#fullWidthCarousel');
  if (fwElem) {
    const fwInstance = M.Carousel.init(fwElem, {
      fullWidth: true,
      indicators: true
    });

    const fwPrev = document.querySelector('#fwPrev');
    const fwNext = document.querySelector('#fwNext');
    const fwToggle = document.querySelector('#fwToggle');

    if (fwPrev) fwPrev.addEventListener('click', function () { fwInstance.prev(); });
    if (fwNext) fwNext.addEventListener('click', function () { fwInstance.next(); });

    let autoplayOn = false;
    let autoplayTimer = null;

    function startAutoplay() {
      autoplayTimer = setInterval(function () {
        fwInstance.next();
      }, 3000);
      autoplayOn = true;
    }

    function stopAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
      autoplayOn = false;
    }

    if (fwToggle) {
      fwToggle.addEventListener('click', function () {
        if (autoplayOn) {
          stopAutoplay();
        } else {
          startAutoplay();
        }
      });
    }
  }
});

function displayStyle() {
  const selectedStyle = document.querySelector('input[name="style"]:checked');
  if (selectedStyle) {
    document.getElementById('style-response').innerText = 'You picked: ' + selectedStyle.value;
  }
}

function submitEmail(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  document.getElementById('email-response').innerText =
    'Thanks for subscribing! Style updates will be sent to: ' + email;

  const modalText = document.getElementById('modal-content-text');
  if (modalText) {
    modalText.innerText =
      'Thanks for subscribing! Style updates will be sent to: ' + email;
  }

  const modalElem = document.getElementById('modal1');
  if (modalElem) {
    const modal = M.Modal.getInstance(modalElem);
    if (modal) modal.open();
  }

  emailInput.value = '';
}
</script>
