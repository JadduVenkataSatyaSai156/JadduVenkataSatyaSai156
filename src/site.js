const credentials = {
  email: 'founder@mcasetu.demo',
  password: 'Setu@123',
};

const personas = {
  founder: ['Company setup wizard', 'Name availability preview', 'Incorporation timeline'],
  professional: ['Bulk client dashboard', 'DSC health check', 'Deadline risk queue'],
  investor: ['Company trust snapshot', 'Filing history', 'Watchlist alerts'],
  director: ['DIN/KYC center', 'Role mapping', 'Consent & audit log'],
};

const form = document.querySelector('#login-form');
const error = document.querySelector('#login-error');
const persona = document.querySelector('#persona');
const tabButtons = document.querySelectorAll('[data-tab]');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value;

  if (email === credentials.email && password === credentials.password) {
    error.hidden = true;
    document.querySelector('#dashboard')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  error.hidden = false;
});

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const items = personas[button.dataset.tab] ?? personas.founder;
    persona.innerHTML = items.map((item) => `<p>✅ ${item}</p>`).join('');
  });
});
