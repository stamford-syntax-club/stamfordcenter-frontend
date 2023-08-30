import { Navbar, NavLink, Button } from "@mantine/core";
import { navigationItems } from "./ApplicationHeader";
import { useState } from "react";
import Link from "next/link";

interface ApplicationNavigationBarProps {
	opened: boolean;
	onClose: () => void;
}

export default function ApplicationNavigationBar({ opened, onClose }: ApplicationNavigationBarProps) {
	const closeNavbar = () => {
		onClose();
	};

	return (
		<Navbar
			className="min-w-max lg:hidden"
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={opened ? { sm: "100%", lg: 300 } : { sm: 0, lg: 0 }}
		>
			<>
				{/* div around each navlink */}
				{navigationItems.map(({ title, href, subitems }) => (
					<div key={title} className="ml-2">
						{subitems ? (
							<NavLink label={title} childrenOffset={28} styles={{ label: { fontSize: "1.5rem" } }}>
								{subitems.map(({ title: childTitle, href: childHref }) => (
									<Link href={childHref} className="no-underline" key={childTitle}>
										<NavLink label={childTitle} styles={{ label: { fontSize: "1.2rem" } }} />
									</Link>
								))}
							</NavLink>
						) : (
							<Link href={href} className="no-underline" key={`link-${title}`} onClick={closeNavbar}>
								<NavLink label={title} styles={{ label: { fontSize: "1.5rem" } }} />
							</Link>
						)}
					</div>
				))}

				{/* "Report a Problem" button */}

				<div className="lg:ml-2">
					<Link href="https://forms.office.com/r/z48ExG8dPs" target="_blank">
						<Button variant="subtle">Report Problem</Button>
					</Link>
				</div>
			</>
		</Navbar>
	);
}
