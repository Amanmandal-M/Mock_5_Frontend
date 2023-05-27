const baseUrl = `https://freelance-portal.onrender.com`;
const freelanceUrl = `${baseUrl}/freelancers`;

const userButton = document.querySelector('.user');
const adminButton = document.querySelector('.admin');

userButton.addEventListener('click', () =>{
    window.location.href = "./html/users.html";
});

adminButton.addEventListener('click', () =>{
    window.location.href = "./html/admin.html";
})