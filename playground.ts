// Playground Examples

interface Person {
	name: string;
}

interface Student extends Person {
	age: number;
}

interface PostGraduateStudent extends Person {
	age: number;
	projects: string[];
}

type StudentInfo<T extends any = Student> = T extends Student
	? {
			data: T;
			grades: number[];
	  }
	: string;

// interface StudentInfo<T extends Student = Student> {
// 	data: T;
// 	grades: number[];
// }

type Car = { engine: string };

export default function play() {
	function logStudentInfo(info: StudentInfo<Car>) {
		console.log(info);
		console.log(info);
	}

	const info = {
		data: {
			name: 'Filip',
			age: '',
		},
		grades: [1, 2, 3, 1],
	};

	logStudentInfo(info);
}
