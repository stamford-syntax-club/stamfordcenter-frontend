import { Divider, Drawer, Paper } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Dispatch, SetStateAction, useState } from "react";

interface Resource {
	name: string;
	description: string;
	iconURL: string;
	files: ResourceFile[];
}

interface ResourceFile {
	fileKey: string;
	fileURL: string;
}

interface ResourceCardProps {
	resource: Resource;
	setCurrentResource: Dispatch<SetStateAction<Resource>>;
	openDrawer: () => void;
}

// TODO: Refactor.
// This page will be replaced with a page that fetches data from the backend.
// Keep in mind that we're using a drawer here because we might have a lot of resources, and just
// laying it all out on the page would be kind of annoying to navigate.
// On mobile especially, it would be a pain to scroll through all of the resources, and we won't have enough space
// for a quick navigation bar on the side. This way, we can just have a drawer that pops up with the resources and each button
// will be fairly compact, but provide all the necessary information to the user.
function ResourceCard({ resource, setCurrentResource, openDrawer }: ResourceCardProps) {
	const { name, description, iconURL } = resource;

	return (
		<Paper
			className="h-64 w-full cursor-pointer p-2"
			onClick={() => {
				setCurrentResource(resource);
				openDrawer();
			}}
		>
			<p>{name}</p>
			<img src={iconURL} alt={`${name} icon`} />
			<Divider />
			<p>{description}</p>
		</Paper>
	);
}

// Page
export default function ResourcesPage() {
	const [resourceList, setResourceList] = useState<Resource[]>([
		{
			name: "Resource 1",
			description: "This is a sample resource for debugging.",
			iconURL: "https://example.com/icon1.png",
			files: [
				{ fileKey: "file1", fileURL: "https://example.com/file1" },
				{ fileKey: "file2", fileURL: "https://example.com/file2" },
			],
		},
		{
			name: "Resource 2",
			description: "Another sample resource for debugging.",
			iconURL: "https://example.com/icon2.png",
			files: [
				{ fileKey: "fileA", fileURL: "https://example.com/fileA" },
				{ fileKey: "fileB", fileURL: "https://example.com/fileB" },
			],
		},

		{
			name: "Resource 3",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus rerum labore mollitia amet quo quidem necessitatibus omnis exercitationem animi eaque!",
			iconURL: "https://example.com/icon3.png",
			files: [
				{ fileKey: "file22A", fileURL: "https://example.com/fileADD" },
				{ fileKey: "fileBawda", fileURL: "https://example.com/fileBDD" },
			],
		},
	]);

	const [selectedResource, setSelectedResource] = useState(resourceList[0]);
	const [isDrawerOpen, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);

	return (
		<div className="container mx-auto flex flex-col items-center gap-x-4 gap-y-4 md:grid md:grid-cols-2 xl:grid-cols-3">
			<Drawer
				title={selectedResource.name}
				opened={isDrawerOpen}
				onClose={closeDrawer}
				position="bottom"
				classNames={{
					title: "font-bold text-2xl",
				}}
			>
				<ul>
					{selectedResource.files.map((file, index) => (
						<li key={`file_${index}`}>{file.fileKey}</li>
					))}
				</ul>
			</Drawer>

			{resourceList.map((resource, index) => (
				<ResourceCard
					key={`resource_${index}`}
					resource={resource}
					setCurrentResource={setSelectedResource}
					openDrawer={openDrawer}
				/>
			))}
		</div>
	);
}
