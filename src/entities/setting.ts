export enum SettingType {
	Circle = "Circle",
	Square = "Square",
	Triangle = "Triangle",
}

export class Setting {
	type!: string;

	constructor(obj?: Partial<Setting>) {
		this.type = obj?.type || "";
	}
}
