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

// type StudentInfo<T extends Student = Student> = {
// 	data: Student;
// 	grades: number[];
// };

interface StudentInfo<T extends Student = Student> {
	data: T;
	grades: number[];
}

export default function play() {
	function logStudentInfo(info: StudentInfo<PostGraduateStudent>) {
		console.log(info.data.name);
		console.log(info.data.age);
		console.log(info.data.projects);
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
