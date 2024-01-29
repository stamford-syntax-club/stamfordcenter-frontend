import { AppShell, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ApplicationHeader from "./ApplicationHeader";
import ApplicationNavigationBar from "./ApplicationNavigationBar";

export default function ApplicationShell({ children }: { children: React.ReactNode }) {
	const [opened, { toggle, close }] = useDisclosure();

	const router = useRouter();

	useEffect(() => {
		close();
	}, [router, close]);

	return (
		<AppShell
			header={{ height: 70 }}
			navbar={{ width: 300, breakpoint: "lg", collapsed: { desktop: true, mobile: !opened } }}
			padding="md"
		>
			<ApplicationHeader opened={opened} toggle={toggle} />
			<ApplicationNavigationBar opened={opened} />
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
