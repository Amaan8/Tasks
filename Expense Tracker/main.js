let myForm = document.getElementById('my-form');
let amountInput = document.getElementById('amount');
let descriptionInput = document.getElementById('description');
let categoryInput = document.getElementById('category');
let items = document.getElementById('items');
myForm.addEventListener('submit', onSubmit);

document.addEventListener('DOMContentLoaded', (event) => {
    axios.get("https://crudcrud.com/api/1dfcfa11851a43bba799dafc4adf11bc/expenseData")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                addItem(response.data[i]);
            }
        })
        .catch(err => console.log(err));
})

function onSubmit(e) {
    e.preventDefault();

    let details = {
        amount: amountInput.value,
        description: descriptionInput.value,
        category: categoryInput.value
    }

    axios.post("https://crudcrud.com/api/1dfcfa11851a43bba799dafc4adf11bc/expenseData", details)
        .then((response) => {
            addItem(response.data);
        })
        .catch(err => console.log(err));

    amountInput.value = '';
    descriptionInput.value = '';
}

function addItem(expense) {
    let childHTML = `<li id=${expense._id} class=list-group-item>
                        ${expense.amount} : ${expense.description} : ${expense.category}
                        <button onClick=deleteExpense('${expense._id}') class='btn btn-danger'>Delete</button>
                        <button onClick=editExpense('${expense._id}','${expense.amount}','${expense.description}','${expense.category}') class='btn btn-warning'>Edit</button>
                    </li>`;
    items.innerHTML += childHTML;
}

function deleteExpense(id) {
    axios.delete(`https://crudcrud.com/api/1dfcfa11851a43bba799dafc4adf11bc/expenseData/${id}`)
        .then(() => {
            let removeItem = document.getElementById(id);
            items.removeChild(removeItem);
        })
        .catch(err => console.log(err));
}

function editExpense(id, amount, description, category) {
    amountInput.value = amount;
    descriptionInput.value = description;
    categoryInput.value = category;
    deleteExpense(id);
}