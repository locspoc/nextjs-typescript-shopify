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
	maxSpeed: 200;
	team: string;
};

type CityCar = {
	name: string;
	space: string;
	maxSpeed: 100;
};

type Car = RaceCar | CityCar;

export default function play() {
	const car: RaceCar = {
		name: 'Race Car',
		maxSpeed: 200,
		team: 'ferrari',
	};

	function logCarInfo(car: Car) {
		console.log((car as CityCar).space);

		console.log((<RaceCar>car).maxSpeed);

		switch (car.maxSpeed) {
			case 200:
				console.log(car.team);
				break;
			case 100:
				console.log(car.space);
				break;
			default:
				console.log(car);
		}
	}
}
