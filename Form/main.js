let myForm = document.getElementById('my-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let msg = document.getElementById('msg');
let list = document.getElementById('users');
myForm.addEventListener('submit', onSubmit);

// document.addEventListener('DOMContentLoaded', (event) => {
//     Object.keys(localStorage).forEach((key) => {
//         let obj = JSON.parse(localStorage.getItem(key));
//         addItem(key, obj);
//     })
// })

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
        // let user = JSON.stringify(userDetails);
        // localStorage.setItem(user, user);

        axios.post("https://crudcrud.com/api/4813370fb394426ebe50e70fa6f9e466/appointmentData", userDetails)
            .then((response) => {
                console.log(response.data);
                addItem(response.data);
            })
            .catch(err => console.log(err));

        // if (localStorage.getItem(user) !== null) {
        //     let removeItem = document.getElementById(user);
        //     if (removeItem) {
        //         list.removeChild(removeItem);
        //     }
        // }

        // let obj = JSON.parse(localStorage.getItem(user));
        // addItem(user, obj);

        nameInput.value = '';
        emailInput.value = '';
    }
}

function addItem(user) {
    let childHTML = `<li id=${user.email} class=item>
                            ${user.name} : ${user.email} 
                            <button onClick=deleteUser('${user.email}') style='float:right'>Delete</button>
                            <button onClick=editUser('${user}') style='float:right'>Edit</button>
                        </li>`;
    list.innerHTML += childHTML;
}

function deleteUser(user) {
    // localStorage.removeItem(user);
    let removeItem = document.getElementById(user);
    list.removeChild(removeItem);
}

function editUser(user) {
    // let obj = JSON.parse(localStorage.getItem(user));
    nameInput.value = user.name;
    emailInput.value = user.email;
    deleteUser(user);
}