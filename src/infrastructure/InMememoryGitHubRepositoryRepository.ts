import { githubApiResponses } from "../github_api_responses";

export class InMememoryGitHubRepositoryRepository {
	search(): typeof githubApiResponses {
		return githubApiResponses;
	}
}
