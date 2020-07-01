let a = 1;
let name = 'Ameno';
let bol = true;
let h = null;

let human = {
    name: 'Ameno',
    surname: 'Rahimli',
    age: 28,
    cry: function () {
        console.log('inqeeeee');
    },
    getAge: function () {
        return this.age;
    },

    getFullName: function () {
        return this.name + ' ' + this.surname;
    }
};

// f(x) = x^2;

function f(x) {
    return x * x;
}


console.log(f(5)); //4



class School {
    constructor(number) {
        this.number = number;
        this.students = [];

    }

    addStudent(name, surname, age) {
        this.students.push({
            name, surname, age,
            ability: Math.random()
        });
    }

    learn() {
        this.students = this.students.map(student => {
            if (student.ability > 0.6) {
                student.mark = 5;
            } else if (student.ability > 0.3) {
                student.mark = 3;

            }
            return student;
        })
    }

    diploma() {
        this.students = this.students.map(student => {
            if (student.mark === 5) {
                student.diplom = 'red';
            } else if (student.mark === 3) {

                student.diplom = 'blue';

            } else {
                student.diplom = 'failed'

            }
            return student;
        })
    }

    log() {
        console.log(this);
    }

    printGraduates() {
        console.log(this.students.filter(student => student.diplom !== 'failed'));
    }
}

let school = new School(107);

school.addStudent('Amina', 'Rahimli', '28');
school.addStudent('Ilkay', 'Rahimli', '22');
school.addStudent('Orxan', 'Rahimli', '30');


school.learn();

school.diploma();

//school.printGraduates();












