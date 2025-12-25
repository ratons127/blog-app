const form = document.getElementById('auth-form');
const message = document.getElementById('auth-message');

function formatErrors(data) {
  if (!data) return 'Request failed';
  if (data.message) return data.message;
  if (Array.isArray(data.errors)) {
    return data.errors.map((err) => err.msg).join(', ');
  }
  return 'Request failed';
}

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    message.textContent = 'Sending...';

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(form.dataset.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) {
        message.textContent = formatErrors(data);
        return;
      }

      message.textContent = 'Success! Redirecting...';
      window.location.href = '/';
    } catch (err) {
      message.textContent = 'Unable to reach the server. Is it running?';
    }
  });
}
