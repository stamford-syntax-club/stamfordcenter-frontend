import { Navbar, Text } from "@mantine/core";

interface ApplicationNavigationBarProps {
	opened: boolean;
}

export default function ApplicationNavigationBar({ opened }: ApplicationNavigationBarProps) {
	return (
		<Navbar
			p="md"
			hiddenBreakpoint={Number.MAX_VALUE} // XD
			hidden={!opened}
			width={
				opened
					? { sm: 200, lg: 300 }
					: {
							sm: 0,
							lg: 0,
					  }
			}
		>
			<Text>Application navbar</Text>
		</Navbar>
	);
}
