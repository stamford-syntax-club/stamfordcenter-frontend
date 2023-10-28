// TODO: Make the env files .env.local and .env.production.local or w/e
export const API_BASE_LINK =
	process.env.NODE_ENV === "production" ? "https://center-be.stamford.dev" : "https://center-be-beta.stamford.dev";