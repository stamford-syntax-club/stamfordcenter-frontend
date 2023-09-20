import { AppShell, Burger, Button, Code, Menu, TextInput, UnstyledButton } from "@mantine/core";
import { getHotkeyHandler, useHotkeys } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

interface ApplicationHeaderProps {
	opened: boolean;
	toggle: () => void;
}

interface NavigationItem {
	title: string;
	href: string;
	subitems?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Undergraduate",
		href: "/undergraduate",
		subitems: [
			{
				title: "idk",
				href: "/xd",
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

function NormalNavLink({ title, href }: NavigationItem) {
	return (
		<Link href={href}>
			<UnstyledButton className="h-full w-full p-2">{title}</UnstyledButton>
		</Link>
	);
}

function NavLinkWithDropdown({ title, href, subitems }: NavigationItem) {
	return (
		<Menu shadow="md" key={"navitem" + title} width={200}>
			<Menu.Target>
				<UnstyledButton className="flex flex-row items-center">
					{title}&nbsp;
					<FaChevronDown size={7} />
				</UnstyledButton>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Item className="p-0">
					{subitems?.map(({ title, href }) => (
						<NormalNavLink key={"subitem" + title} title={title} href={href} />
					))}
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}

export default function ApplicationHeader({ opened, toggle }: ApplicationHeaderProps) {
	const searchbarRef = useRef<HTMLInputElement>(null);
	useHotkeys([
		[
			"ctrl+K",
			() => {
				if (searchbarRef.current) {
					searchbarRef.current.focus();
				}
			},
		],
	]);

	return (
		<AppShell.Header p="sm">
			{/* Main div */}
			<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
				{/* Holder div */}
				<div className="container relative mx-auto h-full">
					{/* Inner div */}
					<div className="flex h-full flex-row items-center">
						<Burger opened={opened} onClick={toggle} hiddenFrom="md" size="lg" />

						{/* Stamford Logo */}
						<div className="relative aspect-[3.664] h-full">
							<Link href="/">
								<Image
									src="/assets/images/logos/stamford-logo-clearbg-white.png"
									alt="Stamford Internation University logo"
									fill
								/>
							</Link>
						</div>

						{/* SyntaX logo */}
						<div className="relative mx-2 aspect-square h-full">
							<a href="https://discord.gg/vBRVJ87cjk" target="_">
								<Image
									className="rounded-full"
									src="/assets/images/logos/codelogo.png"
									alt="Stamford Internation University logo"
									fill
								/>
							</a>
						</div>

						{/* Navigation */}
						<div className="xl:ml-20class ml-10 hidden h-full w-full flex-row items-center gap-x-4 lg:flex">
							{navigationItems.map(({ title, href, subitems: children }) => (
								<div
									key={"navitem" + title}
									className="relative flex h-full cursor-pointer items-center"
								>
									{children ? (
										<div className="flex flex-row items-center">
											<NavLinkWithDropdown title={title} href={href} subitems={children} />
										</div>
									) : (
										<NormalNavLink title={title} href={href} />
									)}
								</div>
							))}

							{/* Searchbar */}
							{/* TODO: Maybe move to the far right, and collapse on non-xl screen sizes. */}
							{/* FIXME: Will have some squishing problems, fix later */}
							<div className="pl-4">
								<TextInput
									ref={searchbarRef}
									placeholder="Search"
									variant="filled"
									leftSection={<FaSearch />}
									rightSectionWidth={70}
									rightSection={<Code className="hidden xl:inline">Ctrl + K</Code>}
									onKeyDown={getHotkeyHandler([
										["Enter", () => searchbarRef.current?.blur()],
										["Escape", () => searchbarRef.current?.blur()],
									])}
								/>
							</div>
						</div>

						{/* Report Problem */}
						{/* TODO: Move this into the mobile navbar on breakpoints that have it */}
						<div className="lg:ml-2">
							<Link href="https://forms.office.com/r/z48ExG8dPs" target="_blank">
								<Button variant="subtle">Report Problem</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</AppShell.Header>
	);
}
