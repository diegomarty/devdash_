import React from "react";

import { config } from "../../devdash_config";

export function Dashboard() {
	const title = "DevDash_";

	const repositoryuyrls = config.widgets.map((widget) => widget.repository_url);

	return (
		<>
			<header>
				<h1>{title}</h1>
			</header>
			<section>
				<ul>
					{config.widgets.map((widget) => (
						<li key={widget.id}>{widget.repository_url}</li>
					))}
				</ul>
			</section>
		</>
	);
}
