import { Setting, SettingType } from "../entities/setting";
import { getRandomNumber } from "../shared/random.lib";

const settingsCount = getRandomNumber(1, 3);
const settings: Setting[] = [];

for (let i = settingsCount; i <= 3; i++) {
	let type = "";
	if (i === 1) {
		type = SettingType.Circle;
	} else if (i === 2) {
		type = SettingType.Triangle;
	} else if (i === 3) {
		type = SettingType.Square;
	}
	settings.push(new Setting({ type }));
}

export const test_settings = [...settings];
