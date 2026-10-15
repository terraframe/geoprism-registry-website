// Geoprism Registry home page: hero map year toggle and mobile nav menu.
// Without JS the page shows the 2018 map and an always-visible, wrapping nav.
(function () {
  // Year toggle
  var buttons = document.querySelectorAll('[data-year]');
  var maps = document.querySelectorAll('[data-map]');
  var caption = document.getElementById('map-caption');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var year = button.getAttribute('data-year');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
      maps.forEach(function (m) { m.hidden = m.getAttribute('data-map') !== year; });
      if (caption) caption.textContent = caption.getAttribute('data-caption-' + year);
    });
  });

  // Mobile nav disclosure
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!header || !toggle || !menu) return;

  header.classList.add('has-js');
  toggle.hidden = false;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
