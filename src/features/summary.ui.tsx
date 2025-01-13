import { useState } from "react";
import { Section } from "../shared/section.ui";

export function Summary() {
	const [sum] = useState(0);

	return (
		<Section title="Summary">
			<p>
				Sum of Area: <strong>{sum}</strong>
			</p>
		</Section>
	);
}
