import ResourceCard from "@components/page_components/resources/ResourceCard";
import ResourceDrawer from "@components/page_components/resources/ResourceDrawer";
import { TextInput } from "@mantine/core";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import { Resource } from "@ourtypes/resources_page_types/ResourceTypes";
import { useEffect, useState } from "react";

import withAPIBaseLink from "@utils/withAPIBaseLink";
import { InferGetServerSidePropsType } from "next";

export default function ResourcesPage({ API_BASE_LINK }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	const [resourceList, setResourceList] = useState<Resource[]>([]);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		fetch(`${API_BASE_LINK}/api/resources/resources`).then((res) => {
			res.json().then((data) => {
				setResourceList(data);
			});
		});
	}, [API_BASE_LINK]);

	const [selectedResource, setSelectedResource] = useState(resourceList[0]);
	const [isDrawerOpen, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);

	// NOTE: This is just in case we have a lot of resources, so it doesn't update the search query on every keystroke.
	const [debouncedSearchQuery] = useDebouncedValue(searchQuery, 200);

	const filteredResources = resourceList.filter((resource) =>
		resource.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
	);

	return (
		<div className="flex flex-col">
			{/* Searchbar */}
			<div className="container mx-auto mb-4 flex w-full flex-row items-center">
				<div className="w-full">
					{/* TODO: Make this search the ResourceFile inside the Resource and maybe bring it up? That might be pretty annoying though */}
					<TextInput
						placeholder="Search Resources"
						value={searchQuery}
						onChange={(event) => setSearchQuery(event.currentTarget.value)}
						rightSectionWidth={70}
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

				{filteredResources.map((resource, index) => (
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

export const getServerSideProps = withAPIBaseLink();
