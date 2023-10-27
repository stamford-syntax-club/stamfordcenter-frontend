import { AppShell, Burger, Button, Menu, NavLink, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import RecursiveNavLink from "./RecursiveNavLink";

interface ApplicationHeaderProps {
	opened: boolean;
	toggle: () => void;
}

export interface NavigationItem {
	title: string;
	href: string;
	subitems?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Undergraduate",
		href: "/undergraduate",
		subitems: [
			{
				title: "idk1",
				href: "/xd",
			},
			{
				title: "idk2",
				href: "/xd",
				subitems: [
					{
						title: "idk3",
						href: "/xd",
					},
					{
						title: "idk4",
						href: "/xd",
					},
				],
			},
		],
	},
	{
		title: "Study Plans",
		href: "/study_plans",
	},
	{
		title: "More",
		href: "/more",
	},
];

export default function ApplicationHeader({ opened, toggle }: ApplicationHeaderProps) {
	return (
		<AppShell.Header p="sm">
			<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
				<div className="container relative mx-auto h-full">
					<div className="flex h-full flex-row items-center">
						<Burger opened={opened} onClick={toggle} hiddenFrom="md" size="lg" />

						<Logo
							link="/"
							src="/assets/images/logos/stamford-logo-clearbg-white.png"
							alt="Stamford Internation University logo"
						/>
						<Logo
							link="https://discord.gg/vBRVJ87cjk"
							src="/assets/images/logos/codelogo.png"
							alt="Stamford Internation University logo"
							isRounded
						/>

						<Navigation items={navigationItems} />

						<ReportButton link="https://forms.office.com/r/z48ExG8dPs" />
					</div>
				</div>
			</div>
		</AppShell.Header>
	);
}

interface LogoProps {
	link: string;
	src: string;
	alt: string;
	isRounded?: boolean;
}

function Logo({ link, src, alt, isRounded = false }: LogoProps) {
	return (
		<div className={`relative ${isRounded ? "aspect-square" : "aspect-[3.664]"} h-full`}>
			<Link href={link}>
				<Image className={isRounded ? "rounded-full" : ""} src={src} alt={alt} fill />
			</Link>
		</div>
	);
}

function Navigation({ items }: { items: NavigationItem[] }) {
	return (
		<div className="ml-10 hidden h-full w-full flex-row items-center gap-x-4 lg:flex">
			{items.map((item) => (
				<div key={"navitem" + item.title} className="relative flex h-full cursor-pointer flex-col items-center">
					{item.subitems ? <NavLinkWithDropdown {...item} /> : <NormalNavLink {...item} />}
				</div>
			))}
		</div>
	);
}

function NormalNavLink({ title, href }: NavigationItem) {
	return <NavLink component={Link} label={title} href={href} className="rounded-sm no-underline" />;
}

function NavLinkWithDropdown({ title: mainTitle, href: mainHref, subitems: mainSubitems }: NavigationItem) {
	const dropdownItems = mainSubitems?.map(({ title: itemTitle, href: itemHref, subitems: itemSubitems }) =>
		itemSubitems ? (
			<NavLink component={Link} key={itemTitle} href={itemHref} label={itemTitle}>
				{itemSubitems.map((subItem) => (
					<RecursiveNavLink key={subItem.title} item={subItem} />
				))}
			</NavLink>
		) : (
			<NavLink component={Link} key={itemTitle} label={itemTitle} href={itemHref} />
		),
	) || <NavLink component={Link} label={mainTitle} href={mainHref} />;

	return (
		<Menu shadow="md" width={200}>
			<Menu.Target>
				{/* TODO: text-sm shouldn't be needed */}
				<UnstyledButton ta="center" className="h-full text-sm">
					{mainTitle}
					<FaChevronDown className="mx-1" size={10} />
				</UnstyledButton>
			</Menu.Target>
			<Menu.Dropdown>{dropdownItems}</Menu.Dropdown>
		</Menu>
	);
}

function ReportButton({ link }: { link: string }) {
	return (
		<div className="hidden lg:ml-2 lg:inline">
			<Link href={link} target="_blank">
				<Button variant="subtle">Report Problem</Button>
			</Link>
		</div>
	);
}
