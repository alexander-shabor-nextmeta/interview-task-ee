import { useEffect, useState } from "react";
import { Setting } from "../entities/setting";
import { request } from "../shared/request.lib";
import { test_settings } from "../__mocks__/settings";
import { SettingRow } from "../features/setting-row.ui";

export function Settings() {
	const [settings, setSettings] = useState<Setting[]>([]);

	useEffect(() => {
		request(() => setSettings(test_settings));
	}, []);

	return (
		<article>
			{!settings.length && <div className="loader"></div>}
			{settings.map((setting) => (
				<SettingRow key={setting.type} setting={setting} />
			))}
		</article>
	);
}
