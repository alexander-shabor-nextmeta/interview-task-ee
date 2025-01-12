import { useEffect, useState } from "react";
import { Circle } from "../entities/circle";
import { test_circles } from "../__mocks__/circles";
import { Section } from "../shared/section.ui";
import { Table } from "../shared/table.ui";
import { request } from "../shared/request.lib";

export function Circles() {
	const [circles, setCircles] = useState<Circle[]>([]);

	useEffect(() => {
		request(() => setCircles(test_circles));
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
