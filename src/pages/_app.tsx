import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "../styles/globals.css";

import ApplicationShell from "@components/core/ApplicationShell";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { AppProps } from "next/app";
import Head from "next/head";

const theme = createTheme({
	colors: {
		dark: [
			"#C1C2C5",
			"#A6A7AB",
			"#909296",
			"#5c5f66",
			"#373A40",
			"#2C2E33",
			"#25262b",
			"#1A1B1E",
			"#141517",
			"#101113",
		],
	},
});

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<>
			<Head>
				<title>Stamford Center</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<MantineProvider theme={theme} defaultColorScheme="dark">
				<Notifications />
				<ApplicationShell>
					<Component {...pageProps} />
				</ApplicationShell>
			</MantineProvider>
		</>
	);
}
