import { ActionIcon, Button, Card, Group, Tooltip } from "@mantine/core";
import Image from "next/image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function QuickLinkCard() {
	return (
		<Card withBorder className="flex h-[30rem] max-w-sm flex-col md:h-[22rem] md:max-w-[16rem]">
			<Card.Section>
				<div className="relative mx-2 mt-2 aspect-video">
					<Image className="rounded-sm" src={"/assets/images/logos/ssc-mascot.png"} alt={"something"} fill />
				</div>
			</Card.Section>

			<Card.Section className="flex items-center p-2 font-bold">Blackboard</Card.Section>

			<Card.Section className="flex items-center px-2 pb-2">
				Hello this is Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, mollitia!
			</Card.Section>

			<Card.Section className="row mt-auto flex items-center gap-x-2 px-2 pb-2">
				<Button className="w-full">Open</Button>
				<Tooltip label="open source">
					<ActionIcon variant="outline" color="blue" size="lg">
						<FaArrowUpRightFromSquare />
					</ActionIcon>
				</Tooltip>
			</Card.Section>
		</Card>
	);
}

export default function TestCardPage() {
	return (
		<div className="container mx-auto">
			<Group position="center">
				<QuickLinkCard />
				<QuickLinkCard />
				<QuickLinkCard />
				<QuickLinkCard />
				<QuickLinkCard />
				<QuickLinkCard />
				<QuickLinkCard />
				<QuickLinkCard />
				<QuickLinkCard />
			</Group>
		</div>
	);
}
