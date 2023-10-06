import "@mantine/core/styles.css";
import "../styles/globals.css";

import ApplicationShell from "@components/core/ApplicationShell";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { AppProps } from "next/app";
import Head from "next/head";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>Stamford Center</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<MantineProvider defaultColorScheme="dark">
				<Notifications />
				<ApplicationShell>
					<Component {...pageProps} />
				</ApplicationShell>
			</MantineProvider>
		</>
	);
}
