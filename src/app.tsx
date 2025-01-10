import { Circles } from "./features/circles.ui";
import { Summary } from "./features/summary.ui";
import { Squares } from "./features/squares.ui";

export function App() {
	return (
		<div>
			<Summary />
			<article>
				<Circles />
				<Squares />
			</article>
		</div>
	);
}
