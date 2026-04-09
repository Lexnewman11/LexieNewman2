<script>
document.addEventListener('DOMContentLoaded', function () {
  // =========================
  // ADD NAVIGATION (injected)
  // =========================
  const navHTML = `
    <nav>
      <ul class="nav-links" style="display:flex; gap:20px; padding:10px; justify-content:center; list-style:none;">
        <li><a href="index.html">Home</a></li>
        <li><a href="style.html">Style Gallery</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="materialize.html">Materialize</a></li>
        <li><a href="materialize.js">Materialize JS</a></li>
      </ul>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Modal
  const modalElems = document.querySelectorAll('.modal');
  M.Modal.init(modalElems);

  // Fix image paths to capital "Images"
  document.querySelectorAll('img').forEach(img => {
    if (img.src.includes('/images/')) {
      img.src = img.src.replace('/images/', '/Images/');
    }
  });

  // Basic carousel
  const basicElem = document.querySelector('#basicCarousel');
  const basicInstance = M.Carousel.init(basicElem, {
    duration: 200,
    dist: -100,
    shift: 0,
    padding: 0,
    numVisible: 5,
    indicators: false
  });

  document.querySelector('#basicPrev').addEventListener('click', () => basicInstance.prev());
  document.querySelector('#basicNext').addEventListener('click', () => basicInstance.next());
  document.querySelector('#basicGo3').addEventListener('click', () => basicInstance.set(2));

  // Collapsible
  const collElem = document.querySelector('#demoCollapsible');
  M.Collapsible.init(collElem, {
    accordion: false
  });

  // Full-width slider
  const fwElem = document.querySelector('#fullWidthCarousel');
  const fwInstance = M.Carousel.init(fwElem, {
    fullWidth: true,
    indicators: true
  });

  document.querySelector('#fwPrev').addEventListener('click', () => fwInstance.prev());
  document.querySelector('#fwNext').addEventListener('click', () => fwInstance.next());

  let autoplayOn = false;
  let autoplayTimer = null;

  function startAutoplay() {
    autoplayTimer = setInterval(() => fwInstance.next(), 3000);
    autoplayOn = true;
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
    autoplayOn = false;
  }

  document.querySelector('#fwToggle').addEventListener('click', () => {
    if (autoplayOn) stopAutoplay();
    else startAutoplay();
  });
});

// Style picker
function displayStyle() {
  const selectedStyle = document.querySelector('input[name="style"]:checked').value;
  document.getElementById('style-response').innerText = `You picked: ${selectedStyle}`;
}

// Email form
function submitEmail(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  document.getElementById('email-response').innerText =
    `Thanks for subscribing! Style updates will be sent to: ${email}`;

  document.getElementById('modal-content-text').innerText =
    `Thanks for subscribing! Style updates will be sent to: ${email}`;

  const modal = M.Modal.getInstance(document.getElementById('modal1'));
  modal.open();

  document.getElementById('email').value = '';
}
</script>
