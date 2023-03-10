export default async function play() {
	type Greeting = { message: string };

	type InferHelloProps<T> = T extends () => Promise<{ props: infer Props }>
		? Props
		: never;

	const getHelloProps = async function () {
		const greeting: Greeting = { message: 'Hi Friends!' };

		return {
			props: {
				greeting,
				data: {
					cars: ['cars1', 'cars2'],
				},
			},
		};
	};

	function sayHello(props: InferHelloProps<typeof getHelloProps>) {
		console.log(props.data.cars);
	}

	const data = await getHelloProps();
	sayHello(data.props);
}
