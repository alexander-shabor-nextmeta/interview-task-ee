import { PropsWithChildren } from "react";

interface IProps {
	title: string;
}

export function Section({ title, children }: PropsWithChildren<IProps>) {
	return (
		<section>
			<fieldset title={title}>
				<legend>
					<strong>{title}</strong>
				</legend>
				{children}
			</fieldset>
		</section>
	);
}
