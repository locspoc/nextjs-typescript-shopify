// Playground Examples

interface Person {
	kind: 'business' | 'academic' | 'otherType';
	name: string;
	age: number;
}

interface Person {
	prop1: string;
	prop2: number;
}

interface AcademicPerson extends Person {
	kind: 'academic';
	publications: string[];
}

interface BusinessPerson extends Person {
	kind: 'business';
	salary: number;
}

type Noop = () => any;
type Noop2 = () => void;

export default function play() {
	function iterate(items: Array<any>) {
		items.forEach((item) => {
			console.log(item.toUpperCase());
		});
	}

	iterate(['filip', 'john', 'tom']);
}
