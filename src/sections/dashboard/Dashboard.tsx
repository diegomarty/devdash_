import { githubApiResponses } from "../../github_api_responses";
import { ReactComponent as Check } from "./check.svg";
import styles from "./Dashboard.module.scss";
import { ReactComponent as Error } from "./error.svg";
import { ReactComponent as Lock } from "./lock.svg";
import { ReactComponent as Unlock } from "./unlock.svg";

export function Dashboard() {
	const title = "DevDash_";

	const isoToReadable = (lastUpdate: string): string => {
		const lastUpdatedDate = new Date(lastUpdate);
		const currentDate = new Date();
		const diffDays = lastUpdatedDate.getDate() - currentDate.getDate();

		if (diffDays === 0) {
			return "today";
		}

		if (diffDays > 30) {
			return "more than a mont ago";
		}

		return `${diffDays} days ago`;
	};

	return (
		<>
			<header className={styles.container}>
				<h1>{title}</h1>
			</header>
			<section className={styles.container}>
				{githubApiResponses.map((widget) => (
					<article className={styles.widget} key={widget.repositoryData.id}>
						<header className={styles.widget__header}>
							<a
								className={styles.widget__title}
								href={widget.repositoryData.html_url}
								target="_blank"
								title={`${widget.repositoryData.organization.login}/${widget.repositoryData.name}`}
								rel="noreferrer"
							>
								{widget.repositoryData.organization.login}/{widget.repositoryData.name}
							</a>
							{widget.repositoryData.private ? <Lock /> : <Unlock />}
						</header>
						<p>Last update {isoToReadable(widget.repositoryData.updated_at)}</p>
						{widget.CiStatus.workflow_runs.length > 0 && (
							<div>
								{widget.CiStatus.workflow_runs[0].status === "completed" ? <Check /> : <Error />}
							</div>
						)}
					</article>
				))}
			</section>
		</>
	);
}
