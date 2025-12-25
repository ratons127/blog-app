const nav = document.getElementById('nav-auth');

if (nav) {
  const guestLinks = nav.querySelectorAll('[data-guest]');
  const userLabel = nav.querySelector('.nav-user');
  const userLinks = nav.querySelectorAll('a[data-user]');
  const logoutLink = nav.querySelector('[data-logout]');

  const setGuest = () => {
    guestLinks.forEach((link) => link.removeAttribute('hidden'));
    userLinks.forEach((link) => link.setAttribute('hidden', 'hidden'));
    if (userLabel) userLabel.setAttribute('hidden', 'hidden');
    if (logoutLink) logoutLink.setAttribute('hidden', 'hidden');
  };

  const setUser = (user) => {
    guestLinks.forEach((link) => link.setAttribute('hidden', 'hidden'));
    userLinks.forEach((link) => link.removeAttribute('hidden'));
    if (userLabel) {
      userLabel.textContent = `Hi, ${user.username}`;
      userLabel.removeAttribute('hidden');
    }
    if (logoutLink) logoutLink.removeAttribute('hidden');
  };

  fetch('/api/auth/me', { credentials: 'same-origin' })
    .then((res) => (res.ok ? res.json() : null))
    .then((data) => {
      if (data && data.user) {
        setUser(data.user);
      } else {
        setGuest();
      }
    })
    .catch(() => setGuest());

  if (logoutLink) {
    logoutLink.addEventListener('click', async (event) => {
      event.preventDefault();
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' });
      window.location.reload();
    });
  }
}
