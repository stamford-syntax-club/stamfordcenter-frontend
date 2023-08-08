import { Burger, Header, MantineTheme, Menu, TextInput, UnstyledButton } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

interface ApplicationHeaderProps {
	opened: boolean;
	setOpened: React.Dispatch<React.SetStateAction<boolean>>;
	theme: MantineTheme;
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
		title: "Reg Announcement",
		href: "/news",
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
		title: "Student Engagement",
		href: "/studentengagement",
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

export default function ApplicationHeader({ opened, setOpened, theme }: ApplicationHeaderProps) {
	return (
		<Header height={70} p="sm">
			{/* Main div */}
			<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
				{/* Holder div */}
				<div className="container relative mx-auto h-full">
					{/* Inner div */}
					<div className="flex h-full flex-row items-center">
						<Burger
							className="block lg:hidden"
							opened={opened}
							onClick={() => setOpened((o) => !o)}
							size="lg"
							color={theme.colors.gray[6]}
							mr="xl"
						/>

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
						<div className="ml-20 hidden h-full flex-row items-center gap-x-4 lg:flex">
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
						</div>

						{/* Search */}
						<div className="ml-auto w-[18rem] mr-60">
							<TextInput
								className="rounder-lg"
								icon={<FaSearch />}
								placeholder="Search in Stamford Center"
								variant="filled"
							/>
						</div>
					</div>
				</div>
			</div>
		</Header>
	);
}
