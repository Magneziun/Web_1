const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const Gender = document.querySelector('input[name="gender"]:checked').value;

        console.log('________________________________');
        console.log('Имя:', firstName);
        console.log('Фамилия:', lastName);
        console.log('Телефон:', phone);
        console.log('Email:', email);
        console.log('Пол:', Gender);
        console.log('Пароль', password);


    if (!firstName || !lastName || !phone || !email || !password || !confirmPassword || !Gender) {
        alert('заполните все поля !!!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Пароли не совпадают !!!');
        return;
    }
    
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        password: password, 
        gender: Gender
    };
        console.log('_________________________________');
        console.log('Создан пользователь:', newUser);

    localStorage.setItem('user', JSON.stringify(newUser));

        console.log('сохранены  localStorage');

    alert('Регистрация прошла успешно!!!');
});
