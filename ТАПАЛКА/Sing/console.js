document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('#password').value;

        console.log('Email:', email);
        console.log('Password:', password);

        alert("Ви зареєструвалися!");
        this.reset();
    });
});