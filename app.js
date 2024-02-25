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
