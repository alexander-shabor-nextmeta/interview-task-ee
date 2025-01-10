import { useEffect, useState } from "react";
import { Circle } from "../entities/circle";
import { test_circles } from "../__mocks__/circles";
import { Section } from "../shared/section.ui";
import { Table } from "../shared/table.ui";
import { getRandomNumber } from "../shared/random.lib";

export function Circles() {
	const [circles, setCircles] = useState<Circle[]>([]);

	useEffect(() => {
		setTimeout(() => {
			setCircles(test_circles);
		}, getRandomNumber(200, 1500));
	}, []);

	return (
		<Section title="Circles">
			<Table
				loading={!circles.length}
				columns={[
					{ key: "id", label: "Id" },
					{ key: "color", label: "Color" },
					{ key: "area", label: "Area" },
					{ key: "radius", label: "Radius" },
				]}
				rows={circles}
			/>
		</Section>
	);
}
