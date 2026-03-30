const formAuth = document.getElementById("formAuth");

formAuth.addEventListener("submit", (e) => {
    e.preventDefault();

    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    

    console.log(`login = ${login}, password = ${password}`);

    if (login === "admin" && password === "admin") {
        alert("Вы успешно авторизовалсь");
        window.location.href = "first.html";
    } else {
        alert("Неверный логин и пароль");
    }
});