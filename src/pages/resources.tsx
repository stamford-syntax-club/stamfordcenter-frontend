import ResourceCard from "@components/page_components/resources/ResourceCard";
import ResourceDrawer from "@components/page_components/resources/ResourceDrawer";
import { TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Resource } from "@ourtypes/resources_page_types/ResourceTypes";
import { useEffect, useState } from "react";

export default function ResourcesPage() {
	const [resourceList, setResourceList] = useState<Resource[]>([]);

	useEffect(() => {
		fetch("https://center-be.stamford.dev/api/resources/resources").then((res) => {
			res.json().then((data) => {
				setResourceList(data);
			});
		});
	}, []);

	const [selectedResource, setSelectedResource] = useState(resourceList[0]);
	const [isDrawerOpen, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);

	return (
		<div className="flex flex-col">
			{/* Searchbar */}
			<div className="container mx-auto mb-4 flex w-full flex-row items-center">
				<div className="w-full">
					{/* TODO: add the icons back lol */}
					<TextInput
						placeholder="Search Resources"
						// leftSection={<IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />}
						rightSectionWidth={70}
						// rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
						styles={{ section: { pointerEvents: "none" } }}
						className="w-full md:mr-auto md:w-64"
					/>
				</div>
			</div>

			{/* Cards grid */}
			<div className="container mx-auto flex flex-col items-center gap-x-4 gap-y-4 md:grid md:grid-cols-2 xl:grid-cols-3">
				<ResourceDrawer
					selectedResource={selectedResource}
					isDrawerOpen={isDrawerOpen}
					closeDrawer={closeDrawer}
				/>

				{resourceList.map((resource, index) => (
					<ResourceCard
						key={`resource_${index}`}
						resource={resource}
						setCurrentResource={setSelectedResource}
						openDrawer={openDrawer}
					/>
				))}
			</div>
		</div>
	);
}
