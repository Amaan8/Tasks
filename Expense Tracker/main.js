let myForm = document.getElementById('my-form');
let amountInput = document.getElementById('amount');
let descriptionInput = document.getElementById('description');
let categoryInput = document.getElementById('category');
let items = document.getElementById('items');
myForm.addEventListener('submit', onSubmit);

document.addEventListener('DOMContentLoaded', (event) => {
    Object.keys(localStorage).forEach((key) => {
        let obj = JSON.parse(localStorage.getItem(key));
        addItem(key, obj);
    })
})

function onSubmit(e) {
    e.preventDefault();

    let details = {
        amount: amountInput.value,
        description: descriptionInput.value,
        category: categoryInput.value
    }
    let expense = JSON.stringify(details);
    localStorage.setItem(expense, expense);

    if (localStorage.getItem(amountInput.value) !== null) {
        let removeItem = document.getElementById(amountInput.value);
        if (removeItem) {
            list.removeChild(removeItem);
        }
    }

    let obj = JSON.parse(localStorage.getItem(expense));
    addItem(expense, obj);

    amountInput.value = '';
    descriptionInput.value = '';
}

function addItem(expense, obj) {
    let childHTML = `<li id=${expense} class=item>
                        ${obj.amount} : ${obj.description} : ${obj.category}
                        <button onClick=deleteExpense('${expense}')>Delete</button>
                        <button onClick=editExpense('${expense}')>Edit</button>
                    </li>`;
    items.innerHTML += childHTML;
}

function deleteExpense(expense) {
    localStorage.removeItem(expense);
    let removeItem = document.getElementById(expense);
    items.removeChild(removeItem);
}

function editExpense(expense) {
    let obj = JSON.parse(localStorage.getItem(expense));
    amountInput.value = obj.amount;
    descriptionInput.value = obj.description;
    categoryInput.value = obj.category;
    deleteExpense(expense);
}