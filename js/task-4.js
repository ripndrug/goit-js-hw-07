const form = document.querySelector('.login-form');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const email = e.target.elements.email;
    const password = e.target.elements.password;

    if (!email.value.trim() || !password.value.trim()) {
        return alert('All form fields must be filled in');
    }

    console.log({
        email: email.value.trim(),
        password: password.value.trim()
    })

    form.reset();
}
