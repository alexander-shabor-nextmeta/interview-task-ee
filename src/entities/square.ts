export class Square {
	id!: string;
	color!: string;
	area!: number;
	side!: number;

	constructor(obj?: Partial<Square>) {
		this.id = (obj && obj.id) || "";
		this.color = (obj && obj.color) || "";
		this.side = (obj && obj.side) || 0;
		this.area = Square.countArea(this.side);
	}

	static countArea(side: number) {
		return parseFloat((side * side).toFixed(2));
	}
}
