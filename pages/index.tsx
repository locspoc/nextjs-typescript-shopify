export default function Home() {
	const message: string = 'Hello World!';

	let age: number = 30;
	let a: AddEventListenerOptions;
	let b: NodeJS.Process;

	console.log('b.browser: ', b.browser);

	let person: Person = {
		name: 'Fillip',
	};

	return (
		<div>
			{message} {age}
		</div>
	);
}
