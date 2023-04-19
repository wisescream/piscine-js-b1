const clone1 = Object.assign({},person);
const clone2 =  Object.assign({},person);
const samePerson = person;
person.age += 1;
person.country = 'FR';
console.log(`Original Person values: Age=${person.age}, Country=${person.country}`);
console.log(`Clone 1 values: Age=${clone1.age}, Country=${clone1.country}`);
console.log(`Clone 2 values: Age=${clone2.age}, Country=${clone2.country}`);
console.log(`Same Person values: Age=${samePerson.age}, Country=${samePerson.country}`);