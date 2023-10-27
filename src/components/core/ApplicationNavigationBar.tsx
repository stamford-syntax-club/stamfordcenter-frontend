import { Button, AppShell, Stack } from "@mantine/core";
import Link from "next/link";
import { navigationItems } from "./ApplicationHeader";
import RecursiveNavLink from "./RecursiveNavLink";

interface ApplicationNavigationBarProps {
	opened: boolean;
}

export default function ApplicationNavigationBar({ opened }: ApplicationNavigationBarProps) {
	return (
		<AppShell.Navbar p="md" hidden={!opened}>
			<Stack className="h-full" gap="xs">
				{navigationItems.map(({ title, href, subitems }) => (
					<RecursiveNavLink key={title} item={{ title, href, subitems }} />
				))}

				{/* "Report a Problem" button */}
				<div className="mt-auto lg:ml-2">
					<Link href="https://forms.office.com/r/z48ExG8dPs" target="_blank">
						<Button variant="subtle">Report Problem</Button>
					</Link>
				</div>
			</Stack>
		</AppShell.Navbar>
	);
}
