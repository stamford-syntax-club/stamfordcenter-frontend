import { Accordion, Text } from "@mantine/core";
import { ClubActivities } from "@ourtypes/about_page_types/ClubAchievement";

interface ClubActivityAccordionProps {
	activities: ClubActivities[];
}

export default function ClubActivityAccordion({ activities }: ClubActivityAccordionProps) {
	return (
		<Accordion multiple variant="contained">
			{activities.map((achievement, index) => (
				<Accordion.Item key={`achievement-${index}`} value={`achievemment-${index}`}>
					<Accordion.Control>
						<Text className="text-lg">{achievement.title}</Text>
					</Accordion.Control>
					<Accordion.Panel>
						<Text>{achievement.description}</Text>
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
