import { AppShell, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ApplicationHeader from "./ApplicationHeader";
import ApplicationNavigationBar from "./ApplicationNavigationBar";

export default function ApplicationShell({ children }: { children: React.ReactNode }) {
	const theme = useMantineTheme();
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 70 }}
			navbar={{ width: 300, breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }}
			styles={
				{
					// main: {
					// 	background: "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8))", // ? Does this even work?
					// 	overflow: "auto",
					// },
				}
			}
			// navbarOffsetBreakpoint="sm"
			// asideOffsetBreakpoint="sm"
			padding="md"
		>
			<ApplicationHeader opened={opened} toggle={toggle} />
			<ApplicationNavigationBar opened={opened} />

			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}
