const divElement = document.getElementById('profile-content');
const token = window.localStorage.getItem('token');// 

fetch('/users/current', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}` //obtenemos la info del usuario logueado
    
  }, // auto local storage no
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if (data.error) {
      throw data.error;
    }
    const user = data.payload;
    const html = `
      <h1 style="color: lightgreen;">Bienvenido ${user?.email}</h1>
      <br>
      <button 
        style="background-color: coral; color: whitesmoke; padding: 8px; border: none"
        onClick="return logout()">
        Logout
      </button>
    `;
    divElement.innerHTML = html;
  })
  .catch((error) => {
    const html = `<h1 style="color: red;">${error}</h1>`;
    divElement.innerHTML = html;
    setTimeout(() => {
      window.location.href = '/';
      window.localStorage.removeItem('token');
    }, 3000);
  });

const logout = () => {
  window.localStorage.removeItem('token');
  window.location.href = '/';
}
