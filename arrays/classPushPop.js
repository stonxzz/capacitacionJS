//Methods that modify the original array (Mutability)

//push()
const countries = ['Usa', 'Canada', 'UK']
const newCountries = countries.push('Mexico', 'Germany')

console.log(countries);
console.log(newCountries);

//pop()
const removedCountry = countries.pop();
console.log(countries);
console.log(removedCountry);