// Password Toggle Functionality
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
});

// Form Submission Handling
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('loginBtn');
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;

    // Simulate login delay
    setTimeout(() => {
        alert("Login Successful!");
        btn.innerHTML = originalContent;
        btn.disabled = false;
    }, 2000);
});
