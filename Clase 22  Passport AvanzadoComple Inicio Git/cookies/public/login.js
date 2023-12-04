// const token = window.localStorage.getItem('token');

// if (token) {
//   window.location.href = '/profile'
// };

const loginForm = document.getElementById('login-form');

loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const loginFormData = new FormData(loginForm);
  const loginPayload = Object.fromEntries(loginFormData);

  try {
    const response = await fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(loginPayload)
    });
    console.log(response);
    window.location.href = '/profile';
  }
  catch(error) {
    console.log(error);
    window.location.href = '/';
  }
})