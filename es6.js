        // Declaring variable
        // If we declare the variable with const it can not be changed.
        const name = Rabi;
        console.log(name);

        // Declaring array with const.
        // If we declare an array with const new elements can be added or push or pop. But
        // the entire array can't be chaneged.
        const numbers = [7, 8, 10];
        numbers[1] = 12;
        numbers.push(15);
        numbers.pop(7);

        // Similarly in case of an obeject we can update it but can't replace it.
        const person = {name: "Rabi", age: 24}; 

        // Uses of let.
        // let is also called scope variable.
        let sum = 0;
        for(let i = 0; i>=10; i++){
            sum = sum + i;
        }
        // i can not be accessed.
        console.log(i);

        // Default parameter.
        // ES5

        function add (num1, num2) {
            if (num2 == undefined){
                num2 = 0;
            }
            // num2 = num2 || 0;
            return num1 + num2;
        }
        const total = add(10);
        console.log(total);
        // ES6 default parameter.
        
        function add (num1, num2 = 20) {
          return num1 + num2;
        }
        const total = add(10 , 25);
        console.log(total);

        // Template string, multiple line string.
        const firstName = "Khnodoker";
        const lastName = "Anisha";
        const fullName = firstName + ' ' + lastName + " is my goffren";

        // ES6
        const fullName2 = `${firstName} ${lastName} is my wifu`;

        // Arrow function, multiple parameter, function body.
        // ES5
        // Function expression
        function doubleIt(num) {
            return num * 2;
        }

        const result = doubleIt(5);
        console.log(result);

        // Function declaration
        const doubleIt2 = function(num) {
            return num * 2;
        }
        
        const result1 = doubleIt2(5);
        console.log(result1);

        // ES6
        const doubleIt3 = num => num * 2;
        const add = (x, y) => x + y;
        const give5 = () => 5;

        // 22.6: Spread operator, concatenate multiple arrays, array max.
        // ES5
        
        const ages = [12, 13, 14, 15];
        const ages2 = [21, 22, 23, 24];
        const allAges = ages.concat(ages2);

        // ES6
        const allAges = [...ages, 5, ...ages2]

        const points = [101, 27, 63];
        const maxPoint = Math.max(...points);

        // 22.7: Class, constructor, create object from class.
        // Class name should be start with capital letter
        class Student {

            // constructor is a special kind of function it is called immediately after an instances of a class is created.
            // we can set parameter via constructor for different objects.
            // also common properties are default
            constructor(){
                this.id = 1;
                this.name = "Lamiya";
            }
        }

        const student1 = new Student();
        const student2 = new Student();

        // Inheritence, extends class, super, class method.


        // Destructure, object, array, destructure complex object.
        const person = {name: 'Lamiya', age:'21', job: 'student', boffren: 'Babyul', address: 'Tejgaon'};

        const {phone} = person;
        const boFfren = person.boffren;
        console.log(boFfren, phone); 

        // complex object
        const complexObject = {
            name: 'Rabi',
            info: {
                address: 'Hillview',
                goffren: 'Khondoker Anisha'
            }
        }
        const {goffren} = complexObject.info;


        