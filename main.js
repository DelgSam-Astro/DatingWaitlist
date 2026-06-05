// this is the behavior of the landing page (what it does)

/*

You put here:
button clicks
form submissions
validation
animations (advanced)
API calls (later)

*/

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.big-button');
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      const label = button.textContent.trim();
      const href = button.getAttribute('href');
      console.log(`Button clicked: ${label} -> ${href}`);
      button.classList.add('button-pressed');
      window.setTimeout(() => button.classList.remove('button-pressed'), 120);
    });
  });
});