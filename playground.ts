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

type RaceCar = {
	name: string;
	maxSpeed: number;
};

type CityCar = {
	name: string;
	space: string;
};

type Car = RaceCar | CityCar;

export default function play() {
	function logCarInfo(car: Car) {
		console.log(car.name);
	}
}
