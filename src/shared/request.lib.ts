import { getRandomNumber } from "./random.lib";

export function request(cb: () => void) {
	setTimeout(() => {
		cb();
	}, getRandomNumber(200, 1500));
}
