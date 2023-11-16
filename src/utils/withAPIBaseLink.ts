// utils/withApiBaseLink.ts

import { GetServerSideProps, GetServerSidePropsResult } from "next";

type ApiLinkProps = {
	API_BASE_LINK: string;
};

// Type for the higher-order function which may take an optional GetServerSideProps function
type WithAPIBaseLink = <P extends {} = {}>(
	getServerSidePropsFunc?: GetServerSideProps<P>,
) => GetServerSideProps<P & ApiLinkProps>;

const withAPIBaseLink: WithAPIBaseLink = (getServerSidePropsFunc) => async (context) => {
	const API_BASE_LINK =
		process.env.APP_ENV === "production" ? "https://center-be.stamford.dev" : "https://center-be-beta.stamford.dev";

	let props: GetServerSidePropsResult<any> = { props: {} };

	if (getServerSidePropsFunc) {
		props = await getServerSidePropsFunc(context);
	}

	// Ensure props is an object with a props key
	if ("props" in props) {
		return {
			props: {
				...props.props,
				API_BASE_LINK,
			},
		};
	}

	return props;
};

export default withAPIBaseLink;
