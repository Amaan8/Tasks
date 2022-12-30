let myForm = document.getElementById('my-form');
let amountInput = document.getElementById('amount');
let descriptionInput = document.getElementById('description');
let categoryInput = document.getElementById('category');
let items = document.getElementById('items');
myForm.addEventListener('submit', onSubmit);

document.addEventListener('DOMContentLoaded', (event) => {
    const getData = async () => {
        try {
            const response = await axios.get("https://crudcrud.com/api/6bae5b2b1f3d42b9b4d4496e35d7a030/expenseData");
            for (let i = 0; i < response.data.length; i++) {
                addItem(response.data[i]);
            }
        } catch (err) {
            console.log(err);
        }
    }
    getData();
})

function onSubmit(e) {
    e.preventDefault();

    let details = {
        amount: amountInput.value,
        description: descriptionInput.value,
        category: categoryInput.value
    }

    const post = async () => {
        try {
            const response = await axios.post("https://crudcrud.com/api/6bae5b2b1f3d42b9b4d4496e35d7a030/expenseData", details);
            addItem(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    post();

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
    const deleteData = async () => {
        try {
            const response = await axios.delete(`https://crudcrud.com/api/6bae5b2b1f3d42b9b4d4496e35d7a030/expenseData/${id}`);
            let removeItem = document.getElementById(id);
            items.removeChild(removeItem);
        } catch (err) {
            console.log(err);
        }
    }
    deleteData();
}

function editExpense(id, amount, description, category) {
    amountInput.value = amount;
    descriptionInput.value = description;
    categoryInput.value = category;
    deleteExpense(id);
}