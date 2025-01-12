import { useEffect, useState } from "react";
import { Triangle } from "../entities/triangles";
import { test_triangles } from "../__mocks__/triangles";
import { Section } from "../shared/section.ui";
import { Table } from "../shared/table.ui";
import { request } from "../shared/request.lib";

export function Triangles() {
	const [triangles, setTriangles] = useState<Triangle[]>([]);

	useEffect(() => {
		request(() => setTriangles(test_triangles));
	}, []);

	return (
		<Section title="Triangles">
			<Table
				loading={!triangles.length}
				columns={[
					{ key: "id", label: "Id" },
					{ key: "color", label: "Color" },
					{ key: "area", label: "Area" },
					{ key: "height", label: "Height" },
					{ key: "base", label: "Base" },
				]}
				rows={triangles}
			/>
		</Section>
	);
}
