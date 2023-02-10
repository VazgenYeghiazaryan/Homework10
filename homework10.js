// 1.Create an Author class and a Book class. Author should have: name, email, gender.It should have appropriate getters and setters.
// It should have a toString method.
//Book should have: title, author(Author), price, quantity.It should have appropriate getters and setters.
//It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
// It should have a toString method.


class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name() {
        return this._name
    }

    set(value) {
        this._name = value
    }
    get email() {
        return this._email
    }

    set(value) {
        this._email = value
    }
    get gender() {
        return this._gender
    }

    set(value) {
        this._gender = value
    }
    toString() {
        return `Author {name = ${this.name}, email = ${this.email}, gender = ${this.gender}}`
    }
}

let author = new Author("Մովսես Խորենացի", "asd@gmail.com", "Male");

console.log(author)
console.log(author.toString())

class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity
    }
    get title() {
        return this._title
    }

    set(value) {
        this._title = value
    }
    get author() {
        return this._author
    }

    set(value) {
        this._author = value
    }
    get price() {
        return this._price
    }

    set(value) {
        this._price = value
    }
    get quantity() {
        return this._quantity
    }

    set(value) {
        this._quantity = value
    }
    getProfit() {
        return this.price * this.quantity + '$'
    }
    toString() {
        return `Book {title = ${this.title}, author = ${this.author.name}, price = ${this.price}, quantity = ${this.quantity}}`
    }
}

let book = new Book("Ողբ Հայաստանի", author, 320, 120)
console.log(book)
console.log(book.toString())
console.log(book.getProfit())

/*
2.Create an Account class. Account should have: id, name, balance.It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance, otherwise output
“Amount exceeded balance.It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance
and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.
It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they are the same or not
comparing all fields.It should have toString method. */


class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance
    }

    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get balance() {
        return this._balance
    }
    set(value) {
        this._name = value
    }
    set(value) {
        this._balance = value
    }
    creditAmount(amount) {
        return this._balance + amount
    }
    debitAmount(amount) {
        if (amount < this._balance) {
            return this._balance - amount
        }
        else { return 'Amount exceeded balance.' }
    }
    transferTo(anotherAccount, amount) {
        if (amount > this._balance) {
            return "Amount exceeded balance.";
        }
        else {
            this._balance -= amount;
            anotherAccount._balance += amount;
        }
        return this._balance;
    }
    static identifyAccounts(accountFirst, accountSecond) {
        return (
            accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance
        );
    }

    toString() {
        return `Account[id = ${this._id}, name = ${this._name}, balance = ${this._balance}]`;
    }
}


let account1 = new Account(1, 'ASD', 1000)
let account2 = new Account(2, 'DSA', 500)

console.log(account1.transferTo(account2, 800))
console.log(account1.creditAmount(400))
console.log(Account.identifyAccounts(account1, account2))
console.log(account2.toString())

/*
3. Write classes: Person, Student, Staff. Person should have: firstName, lastName, gender, age. It should have appropriate getters and setters.
It should have a method: toString().Student is inherited from Person.It should have program(array of strings), year, fee.It should have appropriate getters
and setters.It should have method: passExam(program, grade).Student should contain the data about its programs and exams.passExam will update that data,
so if student passed all the exams(grade is great or equal to 50), its year should be increased by one.It should have a toString method.
Teacher is inherited from Person.It should have program(string), pay. It should have appropriate getters and setters.It should have a toString method. */

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age
    }
    get firstName() {
        return this._firstName
    }
    set firstName(value) {
        this._firstName = value
    }
    get lastName() {
        return this._lastName
    }
    set lastName(value) {
        this._lastName = value
    }
    get gender() {
        return this._gender
    }
    set gender(value) {
        this._gender = value
    }
    get age() {
        return this._age
    }
    set age(value) {
        this._age = value
    }
    toString() {
        return `Person firstName = ${this._firstName}, lastName = ${this._lastName}, gender = ${this._gender}, age = ${this._age}`
    }
}

class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age)
        this.program = program;
        this.year = year;
        this.fee = fee
    }
    get program() {
        return this._program
    }
    set program(value) {
        this._program = value
    }
    get year() {
        return this._year
    }
    set year(value) {
        this._year = value

    } get fee() {
        return this._fee
    }
    set fee(value) {
        this._fee = value
    }
    passExam(program, grade) {
        if (program) {
            if (grade >= 50) {
                return this._year + 1
            }
            else {
                return 'Failed';
            }
        }
        return 'Invalid program'
    }
    toString() {
        return `Student: ${this.firstName} ${this.lastName}, ${this.gender}, ${this.age} years old, ${this.program}, year ${this.year}, fee ${this.fee}`;
    }
}
class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age)
        this._program = program;
        this._pay = pay;
    }
    get program() {
        return this._program
    }
    set program(value) {
        this._program = value
    }
    get pay() {
        return this._pay
    }
    set pay(value) {
        this.pay = value
    }
    toString() {
        return `${this._firstName}, ${this._lastName}, ${this._gender}, ${this.age}, ${this._program}, ${this._pay},`
    }
}


let person = new Person('dd', 'sds', 'unknown', 93)
let student = new Student('Aaa', 'Ddd', 'male', 17, ['math', 'history'], 2006, '1500$')
let teacher = new Teacher('Olga', 'Vasileva', 'female', 65, 'Literature', '120$')

console.log(teacher.toString())
console.log(person.toString())
console.log(student.toString())
console.log(student.passExam(['Math', "History"], 656))