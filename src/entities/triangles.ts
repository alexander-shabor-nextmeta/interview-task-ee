export class Triangle {
	id!: string;
	color!: string;
	area!: number;
	height!: number;
	base!: number;

	constructor(obj?: Partial<Triangle>) {
		this.id = (obj && obj.id) || "";
		this.color = (obj && obj.color) || "";
		this.base = (obj && obj.base) || 0;
		this.height = (obj && obj.height) || 0;
		this.area = Triangle.countArea(this.base, this.height);
	}

	static countArea(base: number, height: number): number {
		return parseFloat(((base * height * 1) / 2).toFixed(2));
	}
}
