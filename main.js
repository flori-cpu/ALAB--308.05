// -1- Function to sum an array of numbers
function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// Function to calculate the average of an array of numbers
function averageArray(numbers) {
    let total = sumArray(numbers);
    return numbers.length > 0 ? total / numbers.length : 0;
}

// Function to find the longest string in an array
function longestString(strings) {
    let longest = "";
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}

// Function to return strings longer than a given length
function stringsLongerThan(strings, length) {
    let result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > length) {
            result.push(strings[i]);
        }
    }
    return result;
}

// Function to print numbers from 1 to n using recursion
function printNumbers(n) {
    if (n > 0) {
        printNumbers(n - 1);
        console.log(n);
    }
}

// Array of people objects
const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sorting the array by age
const sortedByAge = people.sort((a, b) => parseInt(a.age) - parseInt(b.age));
console.log("Sorted by age:", sortedByAge);

// Filtering out people older than 50
const filteredPeople = people.filter(person => parseInt(person.age) <= 50);
console.log("People aged 50 or younger:", filteredPeople);

// Mapping to change occupation to job and incrementing age
const updatedPeople = people.map(person => ({
    ...person,
    job: person.occupation,
    age: parseInt(person.age) + 1
}));
console.log("Updated people with incremented age:", updatedPeople);

// Calculating the sum of ages
const sumAges = people.reduce((acc, person) => acc + parseInt(person.age), 0);
console.log("Sum of ages:", sumAges);

// Calculating the average age
const averageAge = sumAges / people.length;
console.log("Average age:", averageAge);

// Function to increment a person's age
function incrementAge(person) {
    if (!person.age) {
        person.age = 0;
    }
    person.age++;
    person.updated_at = new Date();
    console.log("Incremented age for person:", person);
}

// Function to copy a person and increment the age
function copyAndIncrementAge(person) {
    const copy = { ...person, updated_at: new Date() };
    if (!copy.age) {
        copy.age = 0;
    }
    copy.age++;
    console.log("Copied and incremented person:", copy);
    return copy;
}

// Example usage of increment and copy functions
let testPerson = { id: "99", name: "Test", occupation: "Tester", age: "30" };
incrementAge(testPerson);

const copiedPerson = copyAndIncrementAge(testPerson);

// Example of printing numbers
console.log("Printing numbers from 1 to 5:");
printNumbers(5);

