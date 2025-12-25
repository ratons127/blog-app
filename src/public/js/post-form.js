const form = document.getElementById('post-form');
const message = document.getElementById('post-message');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    message.textContent = 'Publishing...';

    try {
      const formData = new FormData(form);
      const response = await fetch('/api/posts', {
        method: 'POST',
        credentials: 'same-origin',
        body: formData
      });

      const data = await response.json();
      if (!response.ok) {
        const messageText = data.message || (data.errors && data.errors[0] && data.errors[0].msg) || 'Request failed';
        message.textContent = messageText;
        return;
      }

      message.textContent = 'Published! Redirecting...';
      window.location.href = `/posts/${data.data._id}`;
    } catch (err) {
      message.textContent = 'Unable to reach the server. Is it running?';
    }
  });
}
