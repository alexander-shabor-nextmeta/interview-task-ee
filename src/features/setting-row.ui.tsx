import { ReactNode } from "react";
import { Setting, SettingType } from "../entities/setting";
import { Circles } from "./circles.ui";
import { Squares } from "./squares.ui";
import { Triangles } from "./triangles";

interface IProps {
	setting: Setting;
}

export function SettingRow({ setting }: IProps) {
	return Widgets.create(setting);
}

class Widgets {
	static create(setting: Setting): ReactNode {
		switch (setting.type) {
			case SettingType.Circle:
				return <Circles />;
			case SettingType.Square:
				return <Squares />;
			case SettingType.Triangle:
				return <Triangles />;
			default:
				throw new Error("Invalid setting type");
		}
	}
}
