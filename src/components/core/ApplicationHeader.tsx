import { Header, MantineTheme, Text } from "@mantine/core";
import React from "react";

interface ApplicationHeaderProps {
	opened: boolean;
	setOpened: React.Dispatch<React.SetStateAction<boolean>>;
	theme: MantineTheme;
}

export default function ApplicationHeader({ opened, setOpened, theme }: ApplicationHeaderProps) {
	return (
		<Header height={{ base: 50, md: 70 }} p="md">
			<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
				{/* <Burger
					opened={opened}
					onClick={() => setOpened((o) => !o)}
					size="sm"
					color={theme.colors.gray[6]}
					mr="xl"
				/> */}

				<div className="container mx-auto">
					<Text>Application header</Text>
				</div>
			</div>
		</Header>
	);
}
