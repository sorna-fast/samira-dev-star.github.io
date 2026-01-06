// اسکرول نرم به سکشن‌ها
document.querySelectorAll('header nav a').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id.startsWith('#')) return;
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// مشاهده کارت‌ها با انیمیشن هنگام ورود به دید
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(el => observer.observe(el));

// ---------------------------------------------------------------
// Certificates

  // Filtering
// Certificate Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const certCards = document.querySelectorAll('.cert-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    // Show/hide cards based on filter
    certCards.forEach(card => {
      if (filter === 'all' || card.dataset.platform === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Auto-scroll Controls
const carousel = document.querySelector('.cert-carousel');
let scrollInterval;

// Helper to start scrolling
function startScroll(speed, delay) {
  clearInterval(scrollInterval);
  scrollInterval = setInterval(() => {
    carousel.scrollBy({ left: speed, behavior: 'smooth' });
  }, delay);
}

// Play (normal speed)
document.querySelector('.play').addEventListener('click', () => {
  startScroll(2, 30); // scroll 2px every 30ms
});

// Slow Down
document.querySelector('.slow').addEventListener('click', () => {
  startScroll(1, 60); // scroll 1px every 60ms
});

// Speed Up
document.querySelector('.fast').addEventListener('click', () => {
  startScroll(4, 20); // scroll 4px every 20ms
});

// Stop scrolling when user interacts manually
carousel.addEventListener('mouseenter', () => clearInterval(scrollInterval));
carousel.addEventListener('mouseleave', () => clearInterval(scrollInterval));
// ----------------------------------------------------------------------------
