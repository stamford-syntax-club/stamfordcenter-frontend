import { AppShell, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import ApplicationHeader from "./ApplicationHeader";
import ApplicationNavigationBar from "./ApplicationNavigationBar";

export default function ApplicationShell({ children }: { children: React.ReactNode }) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
					overflow: "auto",
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={<ApplicationNavigationBar opened={opened} />}
			header={<ApplicationHeader opened={opened} setOpened={setOpened} theme={theme} />}
		>
			{children}
		</AppShell>
	);
}
