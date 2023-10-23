import { NavLink } from "@mantine/core";
import Link from "next/link";
import { NavigationItem } from "./ApplicationHeader";

interface RecursiveNavLinkProps {
	item: NavigationItem;
}
export default function RecursiveNavLink({ item }: RecursiveNavLinkProps) {
	if (item.subitems) {
		return (
			<NavLink label={item.title}>
				{item.subitems.map((subItem) => (
					<RecursiveNavLink key={subItem.title} item={subItem} />
				))}
			</NavLink>
		);
	}

	return item.href ? (
		<NavLink label={item.title} href={item.href} className="no-underline"/>
	) : (
		<NavLink label={item.title} />
	);
}
