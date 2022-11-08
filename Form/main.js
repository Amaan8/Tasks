let myForm = document.getElementById('my-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let msg = document.getElementById('msg');
let list = document.getElementById('users');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.className = 'error';
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        let userDetails = {
            name: nameInput.value,
            email: emailInput.value
        }
        let user = JSON.stringify(userDetails);
        localStorage.setItem('user_' + emailInput.value, user);

        let li = document.createElement('li');
        li.className = 'item';
        let obj = JSON.parse(localStorage.getItem('user_' + emailInput.value));
        let text = document.createTextNode(obj.name + ' : ' + obj.email);
        li.appendChild(text);
        list.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}