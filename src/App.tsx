import { h } from 'preact';
import { useCounter } from '@hooks/useCounter';

const Comp1 = () => {
	const [count, increment] = useCounter(0);
	return (
		<div>
			<p>Counter: {count}</p>
			<button onClick={increment as any}>Increment</button>
		</div>
	);
};

export function App(props) {
	return (
		<div>
			<Comp1 />
		</div>
	);
}
