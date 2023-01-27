// Playground Examples

// TS recommends to use interface over types

// Option 1: interfaces describe data structures in a more natural way
// Describing objects e.g. shipments, orders

// interface Person {
// 	name: string;
// 	age: number;
// }

// interface PersonLoggerFn {
// 	(name: string, age: number): string;
// }

class Person {
	name: string = '';
	age: number = 0;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

// Option 2: types - use to create type aliases e.g. type Data = string can not be done with interfaces
// types are better for describing functions

// type Person = {
// 	name: string;
// 	age: number;
// };

// type Data = string;

type PersonLoggerFn = (name: string, age: number) => string;

export default function play() {
	const name: string = 'Filip';
	const age: number = 30;

	// const person: Person = {
	// 	name: 'John',
	// 	age: 34,
	// };

	// function logPersonInfo(personName: string, personAge: number): string {
	// 	const info = `Name: ${personName}, age: ${personAge}`;
	// 	console.log(info);
	// 	return info;
	// }

	const logPersonInfo: PersonLoggerFn = (
		personName: string,
		personAge: number
	): string => {
		const info = `Name: ${personName}, age: ${personAge}`;
		console.log(info);
		return info;
	};

	function logPersonInfo2(person: Person) {
		// const info = "Name: " + personName + ", age: " + personAge;
		const info = `Name: ${person.name}, age: ${person.age}`;
		console.log(info);
		return info;
	}

	const log: string = logPersonInfo(name, age);

	const person = new Person('Edward', 50);

	logPersonInfo2(person);
}
