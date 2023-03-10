interface Person {
	name: string;
}

type ReturnType<T> = T extends () => infer R ? R : unknown;

export default function play() {
	function logger(a) {
		return true;
	}

	const loggerReturn: ReturnType<typeof logger> = true;
}
