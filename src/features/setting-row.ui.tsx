import { Setting, SettingType } from "../entities/setting";
import { Circles } from "./circles.ui";
import { Squares } from "./squares.ui";
import { Triangles } from "./triangles";

interface IProps {
	setting: Setting;
}

export function SettingRow({ setting }: IProps) {
	if (setting.type === SettingType.Circle) {
		return <Circles />;
	}
	if (setting.type === SettingType.Square) {
		return <Squares />;
	}
	if (setting.type === SettingType.Triangle) {
		return <Triangles />;
	}
	throw new Error("Invalid setting type");
}
