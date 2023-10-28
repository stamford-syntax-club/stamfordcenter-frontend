// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://bf33b80f7b217f0880ff43e5721a03de@o1282833.ingest.sentry.io/4506128117530624",

	// Adjust this value in production, or use tracesSampler for greater control
	tracesSampleRate: 1,

	// Setting this option to true will print useful information to the console while you're setting up Sentry.
	debug: false,

	replaysOnErrorSampleRate: 1.0,

	// This sets the sample rate to be 10%. You may want this to be 100% while
	// in development and sample at a lower rate in production
	replaysSessionSampleRate: 0.1,

	// You can remove this option if you're not planning to use the Sentry Session Replay feature:
	integrations: [
		new Sentry.Replay({
			// Additional Replay configuration goes in here, for example:
			maskAllText: true,
			blockAllMedia: true,
		}),
	],

	// Keep in mind.. this enables for EVERY environment EXCEPT development.
	// We use process.env.APP_ENV for our environment variable, but when running `npm run dev` and not through docker compose,
	// process.env.APP_ENV is undefined, and NextJS automatically sets NODE_ENV to development.
	enabled: process.env.NODE_ENV !== "development",
});
