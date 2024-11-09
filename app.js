// Exercise 1

const maxOfTwoNumbers = (x, y) => {
	if (x >= y){
	   return x;
	} else {
	  return y;
	}
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3,9));

//Exercise 2 here: 

function isAdult(age) {
    return age >= 18 ? 'Adult' : 'Minor';
}
console.log('Exercise 2 Result:', isAdult(21)); 

// here is exercise 3:

function isCharAVowel(char) {
    const vowels = 'aeiouAEIOU'; // Including both lowercase and uppercase vowels
    return vowels.includes(char);
}

console.log('Exercise 3 Result:',isCharAVowel('a')); 

//exercise 4:

function generateEmail(name, domain) {
    return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail('johnsmith','example.com')); 

//exercise 5:

function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}. ${name}!`;
}

console.log('Exercise 5 Result:',greetUser('Sam', 'morning'));   

//Note to me; Question to ask Avisa tonight: why isn't my code running? Am I missing something?

//Exercise 6:

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

const result = maxOfThree(17, 4, 9);
console.log('Exercise 6 Result:', result); 


//Exercise 7:
function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
}

// Example usage:
const tip = calculateTip(50, 20);
console.log('Exercise 7 Result:', tip);  

//Exercise 8:

function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        // Convert Celsius to Fahrenheit
        return (temperature * 9/5) + 32;
    } else if (scale === 'F') {
        // Convert Fahrenheit to Celsius
        return (temperature - 32) * 5/9;
    } else {
        throw new Error('Invalid scale. Use "C" for Celsius or "F" for Fahrenheit.');
    }
}

// Example usage:
console.log('Exercise 8 Result:', convertTemperature(32, 'C')); // Output: 89.6
console.log('Exercise 8 Result:', convertTemperature(32, 'F')); // Output: 0

//Exercise 9: (I've got some doubts here; I need to ask.)

function basicCalculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'substract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                throw new Error('Cannot divide by zero.');
            }
        default:
            throw new Error('Invalid operation. Use "add", "substract", "multiply", or "divide".');
    }
}


console.log('Exercise 9 Result:',basicCalculator(10, 5, 'substract')); // Output: 5