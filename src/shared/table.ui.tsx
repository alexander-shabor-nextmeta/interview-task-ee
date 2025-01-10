type TColumn<T> = {
	key: keyof T;
	label: string;
};

interface IProps<T extends Record<keyof T, string | number>> {
	loading?: boolean;
	columns: TColumn<T>[];
	rows: T[];
}

export function Table<T extends Record<keyof T, string | number>>({
	loading,
	columns,
	rows,
}: IProps<T>) {
	return (
		<table>
			<thead>
				<tr>
					{columns.map((column) => (
						<th key={column.key.toString()}>{column.label}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{loading && (
					<tr>
						<td colSpan={columns.length} align="center">
							<div className="loader"></div>
						</td>
					</tr>
				)}
				{rows.map((row, index) => (
					<tr key={index}>
						{columns.map((column) => (
							<td key={column.key.toString()}>{row[column.key]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
