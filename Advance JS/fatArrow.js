class Student {
    static count = 0;
    constructor(name, age, phone, marks) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.count++;
        this.isEligible(40)(18);
    }
    isEligible(minMarks) {
        return (minAge) => {
            if (this.marks > minMarks && this.age > minAge) {
                console.log(`${this.name} is eligible`);
            }
            else {
                console.log(`${this.name} is not eligible`);
            }
        }
    }
    static studentCount() {
        console.log(Student.count);
    }
}

let john = new Student('John', 22, 50983, 96);
let roy = new Student('Roy', 23, 50943, 65);
let mary = new Student('Mary', 17, 54983, 72);
let zack = new Student('Zack', 24, 50483, 38);
let mark = new Student('Mark', 20, 50984, 53);

Student.studentCount();