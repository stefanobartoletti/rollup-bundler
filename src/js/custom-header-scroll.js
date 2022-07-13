// --- Header Scroll Add Class ---

const html = document.querySelector('html');
const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  document.addEventListener('scroll', function () {
    if (html.scrollTop > 50) {
      siteHeader.classList.add('header-scrolled');
    } else {
      siteHeader.classList.remove('header-scrolled');
    }
  });
};
