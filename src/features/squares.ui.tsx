import { useEffect, useState } from "react";
import { Square } from "../entities/square";
import { test_squares } from "../__mocks__/squares";
import { Section } from "../shared/section.ui";
import { Table } from "../shared/table.ui";
import { getRandomNumber } from "../shared/random.lib";

export function Squares() {
	const [squares, setSquares] = useState<Square[]>([]);

	useEffect(() => {
		setTimeout(() => {
			setSquares(test_squares);
		}, getRandomNumber(200, 1500));
	}, []);

	return (
		<Section title="Squares">
			<Table
				loading={!squares.length}
				columns={[
					{ key: "id", label: "Id" },
					{ key: "color", label: "Color" },
					{ key: "area", label: "Area" },
					{ key: "side", label: "Side" },
				]}
				rows={squares}
			/>
		</Section>
	);
}
