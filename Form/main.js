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
        localStorage.setItem(emailInput.value, user);

        if (localStorage.getItem(emailInput.value) !== null) {
            let removeItem = document.getElementById(emailInput.value);
            if (removeItem) {
                list.removeChild(removeItem);
            }
        }

        let obj = JSON.parse(localStorage.getItem(emailInput.value));
        let childHTML = `<li id=${emailInput.value} class=item>
                            ${obj.name} : ${obj.email} 
                            <button onClick=deleteUser('${emailInput.value}') style='float:right'>Delete</button>
                            <button onClick=editUser('${emailInput.value}') style='float:right'>Edit</button>
                        </li>`;
        list.innerHTML += childHTML;

        nameInput.value = '';
        emailInput.value = '';
    }
}

function deleteUser(user) {
    localStorage.removeItem(user);
    let removeItem = document.getElementById(user);
    list.removeChild(removeItem);
}

function editUser(user) {
    let obj = JSON.parse(localStorage.getItem(user));
    nameInput.value = obj.name;
    emailInput.value = obj.email;
    deleteUser(user);
}