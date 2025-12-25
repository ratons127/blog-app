const form = document.getElementById('comment-form');
const message = document.getElementById('comment-message');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    message.textContent = 'Posting...';

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const postId = window.location.pathname.split('/').pop();

    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) {
        const messageText = data.message || (data.errors && data.errors[0] && data.errors[0].msg) || 'Request failed';
        message.textContent = messageText;
        return;
      }

      message.textContent = 'Comment added!';
      window.location.reload();
    } catch (err) {
      message.textContent = 'Unable to reach the server. Is it running?';
    }
  });
}
