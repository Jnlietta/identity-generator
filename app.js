const fs = require ('fs');

const genders = [ 'M' , 'F' ];
const maleNames = [ 'John', 'Arthur', 'Tom', 'Frank', 'Carl' ];
const femaleNames = [ 'Julia', 'Samantha', 'Anastasia', 'Alexandra', 'Barbara' ];
const lastNames = [ 'Smith', 'Roberts', 'Edison', 'Anderson', 'Whiliams']
const people = [];

const randChoice = (arr) => {
    if (arr.length === 0) {
        return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

const randPhone = () => {
    phoneNumber = '+48 ';

    //first number
    phoneNumber += Math.floor(Math.random() * 4) + 5;

    //two next numbers
    for(let i=0; i<2; i++){
        phoneNumber += Math.floor(Math.random() * 10);
    }

    //two next sections of polish number
    for(let i=0; i<2; i++){
        phoneNumber += '-';

        for(let i=0; i<3; i++){
            phoneNumber += Math.floor(Math.random() * 10);
        }
    }

    return phoneNumber;
}

const createEmail = (name, surname) => {
    email = name + '.' + surname + '@gmail.com';

    return email.toLowerCase();
}

for( let i = 0; i < 20; i++ ){
    const person = {
        id: i+1,
    };

    person.gender = randChoice(genders);
    
    if (person.gender === 'M'){
        person.firstName = randChoice(maleNames);
    } else {
        person.firstName = randChoice(femaleNames);
    }

    person.lastName = randChoice(lastNames);

    person.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

    person.phone = randPhone();

    person.email = createEmail(person.firstName,person.lastName);

    people.push(person);
  }

  const jsonData = JSON.stringify(people, null, 2);

  fs.writeFile('people.json', jsonData, (err) => {
    if (err) {
      console.log('Something went wrong');
    } else {
      console.log('File has been successfully generated! Check people.json');
    }
  });