const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.classList.toggle('fa-eye-slash');
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    btn.innerText = "Please wait...";
    btn.disabled = true;
    setTimeout(() => {
        alert("Login Successful!");
        btn.innerText = "Login";
        btn.disabled = false;
    }, 1500);
});
