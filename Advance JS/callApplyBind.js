let Student = {
    age: 20,
    name: 'John',
    subject: 'Maths'
}

function addLastName(x) {
    console.log(this.name + ' ' + x);
}

addLastName.call(Student, 'Doe');

function addSubjects(a, b, c) {
    console.log(this.subject + a + b + c);
}

addSubjects.apply(Student, [' Science', ' History', ' English']);

function printAge() {
    console.log(this.age);
}

let bound = printAge.bind(Student);
bound();