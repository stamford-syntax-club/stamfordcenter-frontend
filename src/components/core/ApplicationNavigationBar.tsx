import { AppShell, Text } from "@mantine/core";

interface ApplicationNavigationBarProps {
	opened: boolean;
}

export default function ApplicationNavigationBar({ opened }: ApplicationNavigationBarProps) {
	return (
		<AppShell.Navbar p="md" hidden={!opened}>
			<Text>Application navbar</Text>
		</AppShell.Navbar>
	);
}
