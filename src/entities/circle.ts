export class Circle {
	id!: string;
	color!: string;
	radius!: number;
	area!: number;

	constructor(obj?: Partial<Circle>) {
		this.id = (obj && obj.id) || "";
		this.color = (obj && obj.color) || "";
		this.radius = (obj && obj.radius) || 0;
		this.area = Circle.countArea(this.radius);
	}

	static countArea(radius: number) {
		return parseFloat((Math.PI * radius ** 2).toFixed(2));
	}
}
