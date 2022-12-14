let myForm = document.getElementById('my-form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let msg = document.getElementById('msg');
let list = document.getElementById('users');
myForm.addEventListener('submit', onSubmit);

document.addEventListener('DOMContentLoaded', (event) => {
    axios.get("https://crudcrud.com/api/4813370fb394426ebe50e70fa6f9e466/appointmentData")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                addItem(response.data[i]);
            }
        })
        .catch(err => console.log(err));
})

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

        axios.post("https://crudcrud.com/api/4813370fb394426ebe50e70fa6f9e466/appointmentData", userDetails)
            .then((response) => {
                addItem(response.data);
            })
            .catch(err => console.log(err));

        nameInput.value = '';
        emailInput.value = '';
    }
}

function addItem(user) {
    let childHTML = `<li id=${user._id} class=item>
                            ${user.name} : ${user.email} 
                            <button onClick=deleteUser('${user._id}') style='float:right'>Delete</button>
                            <button onClick=editUser('${user._id}','${user.name}','${user.email}') style='float:right'>Edit</button>
                        </li>`;
    list.innerHTML += childHTML;
}

function deleteUser(id) {
    axios.delete(`https://crudcrud.com/api/4813370fb394426ebe50e70fa6f9e466/appointmentData/${id}`)
        .then(() => {
            let removeItem = document.getElementById(id);
            list.removeChild(removeItem);
        })
        .catch(err => console.log(err));
}

function editUser(id, name, email) {
    nameInput.value = name;
    emailInput.value = email;
    deleteUser(id);
}