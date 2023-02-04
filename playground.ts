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

type Car = {
	name: string;
};

type RaceCar = {
	speed: number;
} & Car & { mileage: number };

export default function play() {
	const car: RaceCar = {
		name: 'my car',
		speed: 100,
		mileage: 200,
	};

	function logCar(car: Car) {}

	logCar(car);
}
