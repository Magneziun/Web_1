const formAuth = document.getElementById("formAuth");

formAuth.addEventListener("submit", (e) => {
    e.preventDefault();

    const Fname = document.getElementById("first-name").value;
    const Lname = document.getElementById("last-name").value;
    const Email = document.getElementById("email").value;
    const City = document.getElementById("city").value;
    const Country = document.getElementById("country").value;
    const Gender = document.querySelector('input[name="gender"]:checked').value;
    
    alert("Вы успешно авторизовались" + "\n" + Fname + "\n" + Lname + "\n" + Email + "\n" + City + "\n" + Country + "\n" + Gender);});