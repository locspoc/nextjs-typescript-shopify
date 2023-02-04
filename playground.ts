// Playground Examples

interface Person {
	name: string;
	age: number;
}

interface AcademicPerson extends Person {
	publications: string[];
}

interface BusinessPerson extends Person {
	salary: number;
}

export default function play() {
	const person1: AcademicPerson = {
		name: 'filip',
		age: 23,
		publications: ['1', '2'],
	};

	const person2: BusinessPerson = {
		name: 'john',
		age: 25,
		salary: 100000,
	};

	function logPerson(person: Person) {}

	logPerson(person1);
	logPerson(person2);
}
